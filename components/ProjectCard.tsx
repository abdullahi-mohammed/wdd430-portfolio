interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-5 border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-800 dark:border-blue-500 rounded-r shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          {description}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-gray-200">Technologies:</strong> {technologies.join(', ')}
        </p>
      </div>
      {link && (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold hover:underline inline-flex items-center gap-1"
          >
            View Project
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      )}
    </article>
  );
}

