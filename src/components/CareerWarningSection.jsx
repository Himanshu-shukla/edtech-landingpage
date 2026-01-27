import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, Zap, ChevronRight, Clock } from 'lucide-react';

const CareerWarningSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative py-12 md:py-20 bg-neutral-950 px-4 md:px-8 font-sans flex flex-col items-center justify-center overflow-hidden">      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-500/20 bg-neutral-900 text-red-400 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
            Reality Check
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mb-16 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            The "AI User" Era is Over. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Become an Architect.</span>
          </h2>
          <p className="text-lg md:text-2xl text-neutral-400 font-medium max-w-3xl mx-auto">
            Using ChatGPT makes you average. Building Agents that replace manual work makes you <span className="text-white">irreplaceable and highly paid.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          
          <AceternityCard 
            icon={<ShieldAlert className="w-8 h-8 text-red-400" />}
            title="The ₹99 Webinar Trap"
            glowColor="from-red-500/20 to-orange-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              Most webinars are just 2-hour upsell pitches with zero actionable skills. We break the cycle by making you <span className="text-white font-semibold">build & deploy live agents</span> in class.
            </p>
          </AceternityCard>

          <AceternityCard 
            icon={<Clock className="w-8 h-8 text-emerald-400" />}
            title="Drowning in Manual Ops"
            glowColor="from-emerald-500/20 to-teal-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              Stop spending 40+ hours/week on repetitive emails, data entry, and social posts. Build agents that reliably <span className="text-white font-semibold">save you 30 hours/week</span> immediately.
            </p>
          </AceternityCard>

          <AceternityCard 
            icon={<TrendingUp className="w-8 h-8 text-yellow-400" />}
            title="No Monetization Plan"
            glowColor="from-yellow-500/20 to-orange-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              Knowing AI isn't enough; selling it is key. We give you the exact <span className="text-white font-semibold">Agency Blueprint</span> to package and sell automation services for ₹50k - ₹2L.
            </p>
          </AceternityCard>

        </div>

        <motion.div variants={itemVariants}>
          <a href="https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20secure%20my%20career%20with%20Agentic%20AI." target="_blank" rel="noreferrer">
            <button className="group relative inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-10 font-black text-white transition-all duration-300 hover:scale-[1.03]">
              <span className="relative flex items-center gap-3 text-lg md:text-xl">
                Secure Your Career Today
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
              </span>
            </button>
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

const AceternityCard = ({ icon, title, children, glowColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${glowColor} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 flex flex-col items-start shadow-xl transition-all duration-300 group-hover:border-emerald-500/30">
        <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-white font-black text-xl mb-4 tracking-tight uppercase">{title}</h3>
        <div className="text-sm md:text-base leading-relaxed font-medium">{children}</div>
      </div>
    </motion.div>
  );
};

export default CareerWarningSection;