import SkillsCard from '@/components/SkillsCard';

const skillCategories = [
  {
    category: 'Frontend Development',
    description: 'Building responsive, accessible, and dynamic user interfaces.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    category: 'Backend & Databases',
    description: 'Developing secure, scalable server applications and RESTful APIs.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Swagger/OpenAPI', 'SQL'],
  },
  {
    category: 'Developer Tools & Workflow',
    description: 'Version control, deployment pipelines, and modern development tooling.',
    skills: ['Git & GitHub', 'Vercel', 'Vite', 'Postman', 'VS Code', 'Agile Teamwork'],
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello! I&apos;m Abdullahi Mohammed, an enthusiastic full-stack software and web developer.
          I am currently pursuing Software Development through Brigham Young University-Idaho,
          focusing on architecting clean, responsive, and user-centric web applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My experience spans frontend development using React and Next.js, as well as backend REST API
          design with Node.js and MongoDB. I enjoy solving challenging real-world problems and creating
          seamless digital experiences.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Technical Expertise & Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat) => (
            <SkillsCard
              key={cat.category}
              category={cat.category}
              description={cat.description}
              skills={cat.skills}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

