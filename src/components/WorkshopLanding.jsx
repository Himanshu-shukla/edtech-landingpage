import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, CheckCircle2, ArrowRight, Play, Zap, Bot, Database } from 'lucide-react';

const WorkshopLanding = () => {
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
    // Background changed to neutral-50 (Light Gray/White)
    <section className="relative py-12 md:py-20 bg-neutral-50 text-neutral-900 font-sans overflow-hidden flex items-center px-4 md:px-8">      
      
      {/* Light Blueprint Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Header Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          {/* Badge: Soft background with dark text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live 2-Day Implementation Bootcamp
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-neutral-900">
            Stop Theory. Start <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">Building Real Agents.</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Most courses show you slides. We build 5+ industry-grade AI agents live. 
            Automate sales, support, and content creation by the time you leave.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Visual & Logistics */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* 3D Floating Video Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-xl aspect-video cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10"></div>
              <img 
                src="https://static.wixstatic.com/media/3cd83b_272809dcc1e14cd78dd6a235eaf3a4ed~mv2.gif" 
                alt="Building AI Agent Workflow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-emerald-600 ml-1 fill-emerald-600" />
                </div>
              </div>

              <div className="absolute top-4 left-4 z-20 bg-emerald-600 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase text-white flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Live Build Session
              </div>
            </motion.div>

            {/* Logistics Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <InfoCard icon={<Database className="w-5 h-5 text-amber-600" />} label="Platform" value="n8n, Make, Vapi" />
              <InfoCard icon={<Bot className="w-5 h-5 text-blue-600" />} label="No-Code" value="Zero Coding Needed" />
              <InfoCard icon={<Globe className="w-5 h-5 text-indigo-600" />} label="Language" value="English (Live)" />
              <InfoCard icon={<Zap className="w-5 h-5 text-purple-600" />} label="Outcome" value="5 Ready Agents" />
            </motion.div>
          </div>

          {/* Right Column: Benefits & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-2xl shadow-neutral-200/50 flex flex-col justify-between h-full"
            >
              <div className="space-y-6 mb-8">
                <BenefitItem variants={itemVariants}>
                  <span className="text-neutral-900 font-bold">LinkedIn Content Agent:</span> Build an agent that researches, writes, and auto-posts viral content.
                </BenefitItem>

                <BenefitItem variants={itemVariants}>
                  <span className="text-neutral-900 font-bold">WhatsApp Sales Bot:</span> Create a 24/7 employee that qualifies leads and closes deals using RAG.
                </BenefitItem>
                
                <BenefitItem variants={itemVariants}>
                  <span className="text-neutral-900 font-bold">AI Voice Caller:</span> Deploy Vapi agents that handle customer calls like a human.
                </BenefitItem>

                <BenefitItem variants={itemVariants} border={false}>
                  <span className="text-neutral-900 font-bold">Agency Launchpad:</span> Get the pricing, proposal templates, and SOPs to sell these agents for ₹50k+.
                </BenefitItem>
              </div>

              <motion.div variants={itemVariants} className="mt-auto">
                <a href="https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Agentic%20AI%20Masterclass." target="_blank" rel="noreferrer">
                  <button className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-8 shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-700">
                    <span className="relative flex items-center gap-2 font-bold text-white text-lg md:text-xl">
                      <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      Enroll for ₹999
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </a>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-4 group hover:border-emerald-300 transition-colors duration-300 shadow-sm">
    <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest mb-0.5">{label}</p>
      <div className="text-neutral-800 font-bold text-sm md:text-base leading-tight">{value}</div>
    </div>
  </div>
);

const BenefitItem = ({ children, variants, border = true }) => (
  <motion.div variants={variants} className="flex items-start gap-4">
    <div className="mt-1 flex-shrink-0">
      <div className="bg-emerald-100 p-1.5 rounded-full border border-emerald-200">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" strokeWidth={3} />
      </div>
    </div>
    <div className={`text-neutral-600 text-base md:text-lg leading-relaxed ${border ? 'border-b border-neutral-100 pb-6' : ''} w-full transition-colors duration-300 hover:text-neutral-900`}>
      {children}
    </div>
  </motion.div>
);

export default WorkshopLanding;