import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, ShieldCheck, FileCode, Gift, Sparkles, Check, Briefcase } from 'lucide-react';

const BonusSection = () => {
  // 2026 Strategic Value Data Source
  const bonuses = [
    {
      id: 1,
      label: "BONUS 1",
      value: "$399",
      title: "Agentic Architect Blueprint",
      text: "The exact 2026 technical roadmap used to transition from Senior SDE to a 6-figure AI Architect.",
      icon: <Terminal className="w-16 h-16 md:w-20 md:h-20 text-emerald-400" strokeWidth={1.5} />,
      color: "from-emerald-500",
      glow: "from-emerald-500/20 to-teal-500/10"
    },
    {
      id: 2,
      label: "BONUS 2",
      value: "$499",
      title: "Production-Ready Snippet Vault",
      text: "Reusable Python & LangGraph code snippets for image analyzers, email bots, and multi-agent swarms.",
      icon: <FileCode className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" strokeWidth={1.5} />,
      color: "from-cyan-500",
      glow: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: 3,
      label: "BONUS 3",
      value: "$599",
      title: "The 'AI' Agency SOPs",
      text: "Our internal Standard Operating Procedures for deploying autonomous agents in enterprise support environments.",
      icon: <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-purple-400" strokeWidth={1.5} />,
      color: "from-purple-500",
      glow: "from-purple-500/20 to-indigo-500/10"
    },
    {
      id: 4,
      label: "BONUS 4",
      value: "$299",
      title: "Zero-Hallucination Frameworks",
      text: "A masterclass on RAG (Retrieval-Augmented Generation) and memory management for reliable agents.",
      icon: <Database className="w-16 h-16 md:w-20 md:h-20 text-blue-400" strokeWidth={1.5} />,
      color: "from-blue-500",
      glow: "from-blue-500/20 to-cyan-500/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Gift className="w-4 h-4" />
            <span>Enterprise Launch Assets</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">Agentic Architect</span> Toolkit
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium">
            Register for the Masterclass and instantly unlock over <span className="text-emerald-400 font-bold">$1,700</span> in battle-tested resources.
          </p>
        </motion.div>

        {/* Bonus Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {bonuses.map((bonus) => (
            <motion.div 
              key={bonus.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 shadow-2xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${bonus.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${bonus.glow} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="relative flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full"></div>
                <div className="relative">
                  {bonus.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-4">
                  <span className="text-neutral-500 font-black tracking-[0.2em] text-xs uppercase">
                    {bonus.label}
                  </span>
                  <div className="mt-2 md:mt-0 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                      Value: <span className="line-through opacity-50 ml-0.5">{bonus.value}</span> FREE
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-black text-xl md:text-2xl mb-3 tracking-tight group-hover:text-emerald-100 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-neutral-400 font-medium leading-relaxed text-sm md:text-base">
                  {bonus.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Trigger CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 text-neutral-500 text-sm font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Assets delivered instantly via Discord & Email
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;