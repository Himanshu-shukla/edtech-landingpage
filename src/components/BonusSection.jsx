import React from 'react';
import { motion } from 'framer-motion';
import { Map, Library, Users, FileText, Gift, Sparkles, Check } from 'lucide-react';

const BonusSection = () => {
  // Enhanced Data Source with Values
  const bonuses = [
    {
      id: 1,
      label: "BONUS 1",
      value: "$199",
      title: "Agentic AI Specialist Roadmap",
      text: "The exact step-by-step roadmap to becoming a 10X Specialist in 90 days or less.",
      icon: <Map className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" strokeWidth={1.5} />,
      color: "from-cyan-500",
      glow: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: 2,
      label: "BONUS 2",
      value: "$249",
      title: "The Ultimate AI Prompt Library",
      text: "A comprehensive resource library of 500+ pre-tested prompts for immediate integration.",
      icon: <Library className="w-16 h-16 md:w-20 md:h-20 text-purple-400" strokeWidth={1.5} />,
      color: "from-purple-500",
      glow: "from-purple-500/20 to-pink-500/10"
    },
    {
      id: 3,
      label: "BONUS 3",
      value: "$499",
      title: "Private 'AI Pioneers' Community",
      text: "Direct access to our private Discord network of AI builders, experts, and hiring managers.",
      icon: <Users className="w-16 h-16 md:w-20 md:h-20 text-emerald-400" strokeWidth={1.5} />,
      color: "from-emerald-500",
      glow: "from-emerald-500/20 to-teal-500/10"
    },
    {
      id: 4,
      label: "BONUS 4",
      value: "$299",
      title: "Exclusive Industry Case Studies",
      text: "Deep-dive breakdowns of how top companies are actually using these exact agents right now.",
      icon: <FileText className="w-16 h-16 md:w-20 md:h-20 text-amber-400" strokeWidth={1.5} />,
      color: "from-amber-500",
      glow: "from-amber-500/20 to-orange-500/10"
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Aceternity Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            <span>Limited Time Inclusions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Unlock These <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">Exclusive Bonuses</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            Register today and instantly unlock over <span className="text-amber-400 font-bold">$1,200</span> in value for free.
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
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 shadow-xl hover:border-neutral-700 transition-all duration-300"
            >
              {/* Dynamic Top Border Highlight */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${bonus.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Background Glow Effect */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${bonus.glow} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Icon Container */}
              <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full"></div>
                <div className="relative">
                  {bonus.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                
                {/* Value Header */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-4">
                  <span className="text-neutral-500 font-bold tracking-widest text-sm uppercase">
                    {bonus.label}
                  </span>
                  <div className="mt-2 md:mt-0 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wide">
                      Value: <span className="line-through opacity-70 ml-0.5">{bonus.value}</span> FREE
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-white font-extrabold text-xl md:text-2xl mb-3 leading-tight tracking-wide group-hover:text-amber-100 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-neutral-400 font-medium leading-relaxed">
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
          <div className="inline-flex items-center gap-2 text-neutral-500 text-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Bonuses are instantly unlocked upon registration.
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BonusSection;