import { Code2, Database, Server, Smartphone, GitBranch } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Java', icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'OOPs', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'MySQL', icon: Database, color: 'from-blue-600 to-blue-700' },
    { name: 'SpringBoot', icon: Server, color: 'from-green-500 to-emerald-600' },
    { name: 'Kotlin', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center"
              >
                <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-full mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
