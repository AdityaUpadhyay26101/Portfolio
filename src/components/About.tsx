export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
            Hi! I am <span className="font-semibold text-teal-600">Aditya Upadhyay</span>,
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
            Pre Final-Year Computer Science Engineering student with a strong foundation in
            Java and Object-Oriented Programming (OOPs). Currently specializing in the Spring
            Framework to build scalable, robust backend systems, while expanding expertise
            into Android development.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
            Hands-on experience building foundational projects using Java, XML and SpringBoot, MySQL ,Kotlin
            including a LibraryManagementWebApp and GroCart App. Disciplined coder focused on writing clean,
            maintainable code, with proficiency in Git and GitHub for version control.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Seeking to bridge the gap between academic theory and industry standards by
            contributing to a fast-paced development team.
          </p>
        </div>
      </div>
    </section>
  );
}
