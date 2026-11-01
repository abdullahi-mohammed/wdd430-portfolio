import ProjectList, { Project } from '@/components/ProjectList';

const projects: Project[] = [
  {
    title: 'Sleep Outside Outdoor Gear',
    description:
      'A responsive e-commerce web application for outdoor recreation equipment, featuring product catalog browsing, dynamic shopping cart management, item sorting, and secure checkout workflows.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vite', 'REST API'],
    link: 'https://github.com/abdullahi-mohammed/wdd330',
  },
  {
    title: 'MindEase Therapy App',
    description:
      'A personal wellness and therapy companion application offering guided self-reflection tools, mood tracking, and accessible mental health support resources.',
    technologies: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Vite'],
    link: 'https://github.com/abdullahi-mohammed/therapy-app',
  },
  {
    title: 'RESTful Book Management API',
    description:
      'A robust backend service featuring complete CRUD operations, database persistence, schema validation, and interactive Swagger API documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'REST API'],
    link: 'https://github.com/24on7store/cse341-team7-project',
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center py-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
          My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I&apos;m a full-stack developer learning and building with modern web technologies, React, and Next.js. Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
