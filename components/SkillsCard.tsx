export interface SkillsCardProps {
  category: string;
  skills: string[];
  description?: string;
}

export default function SkillsCard({
  category,
  skills,
  description,
}: SkillsCardProps) {
  return (
    <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {category}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
      )}
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

