import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, Languages, Sparkles, CheckCircle2, ArrowRight, Play, Zap, Bot, Cpu } from 'lucide-react';

const WorkshopLanding = () => {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen bg-neutral-950 text-white font-sans overflow-hidden flex items-center pt-24 pb-16 px-4 md:px-8">
      
      {/* Ambient Space Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Header Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium mb-6 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Learn AI. Deploy Agents. Scale Business.
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Master & Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Agentic AI Workflows</span> <br className="hidden md:block" />
            For Modern Enterprises.
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between AI theory and real-world execution. We don't just teach AI—we build the agents that power 10x more efficient workflows.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Visual & Logistics (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* 3D Floating Video Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl aspect-video cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-10"></div>
              {/* Updated placeholder image to something more "Agentic/Tech" focused */}
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" 
                alt="Agentic AI Workflow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
              />
              
              {/* Play Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              {/* Live Badge */}
              <div className="absolute top-4 left-4 z-20 bg-emerald-600 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Agentic AI Workshop
              </div>
            </motion.div>

            {/* Logistics Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <InfoCard icon={<Zap className="w-5 h-5 text-yellow-400" />} label="Focus" value="Workflow Automation" />
              <InfoCard icon={<Bot className="w-5 h-5 text-blue-400" />} label="Specialization" value="AI Agentic Systems" />
              <InfoCard icon={<Globe className="w-5 h-5 text-indigo-400" />} label="Access" value="Hybrid Learning" />
              <InfoCard icon={<Cpu className="w-5 h-5 text-purple-400" />} label="Outcome" value="Client-Ready Deployments" />
            </motion.div>
          </div>

          {/* Right Column: Benefits & CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-neutral-800 shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full"
            >
              <div className="space-y-6 mb-8">
                <BenefitItem variants={itemVariants}>
                  <span className="text-white font-semibold">Comprehensive AI Training:</span> Go from Zero to building custom LLM wrappers and autonomous agents.
                </BenefitItem>

                <BenefitItem variants={itemVariants}>
                  <span className="text-white font-semibold">Agentic Workflow Implementation:</span> We build the tools that handle ticketing, emails, and support for your business.
                </BenefitItem>

                <BenefitItem variants={itemVariants}>
                  <span className="text-white font-semibold">Enterprise-Grade SOPs:</span> Learn the exact "Nugget" style frameworks used to save companies millions.
                </BenefitItem>

                <BenefitItem variants={itemVariants} border={false}>
                  <span className="text-white font-semibold">Consulting & Deployment:</span> Get direct access to our agency arm to integrate AI into your existing stack.
                </BenefitItem>
              </div>

              {/* Primary CTA Button */}
              <motion.div variants={itemVariants} className="mt-auto">
                <button className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02]">
                  <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
                  <span className="relative flex items-center gap-2 font-bold text-white text-lg md:text-xl">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                    Start Your AI Evolution
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <p className="text-center text-xs text-neutral-500 mt-4 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Courses & Enterprise Agency Solutions.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component: Floating Info Cards (Glassmorphism)
const InfoCard = ({ icon, label, value }) => (
  <div className="bg-neutral-900/60 backdrop-blur-sm p-4 rounded-xl border border-neutral-800/80 flex items-center gap-4 group hover:border-neutral-700 transition-colors duration-300">
    <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-0.5">{label}</p>
      <div className="text-neutral-200 font-medium text-sm md:text-base leading-tight">{value}</div>
    </div>
  </div>
);

// Sub-component: Animated List Items
const BenefitItem = ({ children, variants, border = true }) => (
  <motion.div variants={variants} className="flex items-start gap-4">
    <div className="mt-1 flex-shrink-0">
      <div className="bg-emerald-500/10 p-1.5 rounded-full border border-emerald-500/20">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
      </div>
    </div>
    <div className={`text-neutral-400 text-base md:text-lg leading-relaxed ${border ? 'border-b border-neutral-800 pb-6' : ''} w-full transition-colors duration-300 hover:text-neutral-300`}>
      {children}
    </div>
  </motion.div>
);

export default WorkshopLanding;