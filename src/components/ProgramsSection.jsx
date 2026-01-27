import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart, Brain, Code2, ArrowRight } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Data Analyst & AI Certification",
      subtitle: "Microsoft Certified • 6 Months",
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      description: "From beginner to job-ready. Master the tools used by top Fortune 500 companies to analyze business data.",
      skills: ["Python (Pandas, NumPy)", "SQL & Database Mgmt", "Power BI & Tableau", "Adv. Excel & Macros", "AI-Augmented Analytics"],
      target: "Non-IT Professionals, Freshers",
      highlight: "Includes Job Placement Assistance"
    },
    {
      id: 2,
      title: "Data Science & AI Certification",
      subtitle: "Advanced Track • Microsoft Certified",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "Go beyond analytics. Build predictive models and machine learning pipelines that solve complex problems.",
      skills: ["Machine Learning Algos", "Statistical Inference", "Deep Learning", "Generative AI Integration", "Cloud AI Services"],
      target: "Aspiring Data Scientists, ML Engineers",
      highlight: "Real-world Capstone Projects"
    },
    {
      id: 3,
      title: "Agentic AI Developer Program",
      subtitle: "Flagship • Future Tech",
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      description: "Don't just automate tasks—build intelligent agents that reason, plan, and execute independently.",
      skills: ["Autonomous Agents", "LangChain & Vector DBs", "Agentic Workflows", "Responsible AI Design", "Multi-Agent Systems"],
      target: "Developers, Tech Innovators",
      highlight: "Build Next-Gen AI Systems"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Industry-Standard <br />
            <span className="text-emerald-500">Certification Programs</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Practical, hands-on training designed to take you from zero to hired. 
            Work on real datasets, build a portfolio, and get referred to our 200+ hiring partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div 
              key={program.id}
              whileHover={{ y: -10 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group"
            >
              <div className="bg-neutral-950 w-16 h-16 rounded-xl flex items-center justify-center border border-neutral-800 mb-6 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>

              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
                {program.subtitle}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{program.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-b border-neutral-800 pb-8">
                {program.description}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {program.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-neutral-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-xs text-neutral-500 mb-4 font-mono">
                  Best for: <span className="text-neutral-300">{program.target}</span>
                </div>
                <button className="w-full py-4 rounded-xl bg-neutral-100 text-neutral-950 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                  View Syllabus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;