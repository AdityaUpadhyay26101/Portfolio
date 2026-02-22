import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'GoCart',
      description:
        'GroCart is a modern, full-stack grocery application that integrates a Jetpack Compose Android Frontend with a scalable Java Spring Boot Backend and MySQL Database. It features real-time data synchronization, personalized user sessions, and optimized performance management to handle complex UI rendering.',
      technologies: ['Jetpack Compose', 'Spring Boot', 'MySQL', 'Android'],
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'LibraryManagement',
      description:
        'This project digitizes traditional library operations. It allows an Admin to manage books and students while automating critical tasks like tracking due dates and sending overdue warnings via email. The system is secured with Spring Security and uses a responsive Glassmorphism UI.',
      technologies: ['Spring Boot', 'Spring Security', 'MySQL', 'Java'],
      gradient: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-200"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
