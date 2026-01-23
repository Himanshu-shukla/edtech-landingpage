import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Cpu, Rocket, ChevronRight } from 'lucide-react';

const CareerWarningSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 py-20 px-4 md:px-8 font-sans flex flex-col items-center justify-center overflow-hidden">
      
      {/* Aceternity Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-sm font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
            Urgent Career Update
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="max-w-3xl mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Your career is in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">danger.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            The AI revolution is here. The question isn't if you'll be affected, but whether you'll adapt or be left behind.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          
          {/* Card 1: Breaking News */}
          <AceternityCard 
            icon={<Megaphone className="w-8 h-8 text-red-400" />}
            title="The 2025 Prediction"
            glowColor="from-red-500/20 to-orange-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              <span className="text-white font-semibold">85 million jobs</span> will be replaced by automation by 2025, but 97 million AI-driven jobs are emerging. Will you adapt or be left behind?
            </p>
          </AceternityCard>

          {/* Card 2: AI Tech */}
          <AceternityCard 
            icon={<Cpu className="w-8 h-8 text-indigo-400" />}
            title="AI is Universal Now"
            glowColor="from-indigo-500/20 to-purple-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              Smart freelancers, coaches, consultants, and business owners are already <span className="text-white font-semibold">charging premium rates</span> for AI-powered services.
            </p>
          </AceternityCard>

          {/* Card 3: Bootcamp */}
          <AceternityCard 
            icon={<Rocket className="w-8 h-8 text-blue-400" />}
            title="Your Escape Velocity"
            glowColor="from-blue-500/20 to-cyan-500/20"
          >
            <p className="text-neutral-400 leading-relaxed">
              Join our Free 2-Day AI Bootcamp to get hands-on experience with AI tools and career strategies to <span className="text-white font-semibold">3X your earning potential.</span>
            </p>
          </AceternityCard>

        </div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button className="group relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-red-600 to-red-500 px-8 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.7)] active:scale-95">
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
            <span className="relative flex items-center gap-2 text-lg">
              Master Agentic AI Automation
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
};

// Reusable Aceternity-style Card Component
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
      {/* Animated Glow Border */}
      <div className={`absolute -inset-[1px] bg-gradient-to-r ${glowColor} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      {/* Card Content */}
      <div className="relative h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col items-start shadow-xl transition-colors duration-300 group-hover:border-neutral-700">
        
        {/* Icon Container */}
        <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-white font-bold text-xl mb-3 tracking-wide">
          {title}
        </h3>
        <div className="text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerWarningSection;