import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FoundryHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-[75vh] bg-white overflow-hidden flex flex-col justify-center font-sans">
      
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full bg-white">
        
        {/* 1. The Mesh Gradients (Aurora Effect) */}
        <div className="absolute top-0 w-full h-full overflow-hidden opacity-40">
            <motion.div 
                animate={{ transform: ["translate(0, 0)", "translate(10%, -10%)", "translate(0, 0)"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 blur-[120px] mix-blend-multiply" 
            />
            <motion.div 
                animate={{ transform: ["translate(0, 0)", "translate(-10%, 10%)", "translate(0, 0)"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-200 blur-[120px] mix-blend-multiply" 
            />
            <motion.div 
                animate={{ transform: ["translate(0, 0)", "translate(5%, -5%)", "translate(0, 0)"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-300 via-emerald-200 to-teal-200 blur-[100px] mix-blend-multiply" 
            />
        </div>

        {/* 2. Professional Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-6 pb-12 md:pt-20 md:pb-24 px-3 md:px-4">
        
        {/* Top Badge: Glassmorphism Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-5 md:mb-8"
        >
          <div className="group relative inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/60 border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md overflow-hidden hover:scale-105 transition-transform duration-300">
            {/* Shimmer effect inside badge */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-rose-600"></span>
            </span>
            <span className="relative text-[10px] md:text-sm font-bold tracking-[0.15em] text-slate-700 uppercase">
               Live Agentic AI Bootcamp
            </span>
          </div>
        </motion.div>

        {/* Headline Section */}
        <div className="mb-4 md:mb-10">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[2.75rem] md:text-8xl font-black tracking-tight leading-[0.95] md:leading-[1.05] text-slate-900 mb-3"
            >
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Autonomous</span> <br className="hidden md:block" />
            <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-20 blur-lg hidden md:block"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 animate-gradient">
                AI Systems
                </span>
            </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-600 font-medium text-sm md:text-2xl max-w-2xl mx-auto leading-relaxed px-2"
            >
                Master <span className="text-slate-900 font-bold underline decoration-purple-400/50 decoration-2 underline-offset-4">Agentic Workflows</span>. Design systems that think, plan, and execute.
            </motion.p>
        </div>

        {/* ----------------- PROFESSIONAL CTA BUTTON ----------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative py-2 md:py-8"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 2 }}
            className="group relative w-full max-w-2xl overflow-hidden rounded-2xl md:rounded-3xl p-[2px] cursor-pointer shadow-[0_20px_50px_-12px_rgba(16,185,129,0.4)]"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-spin-slow opacity-100" style={{backgroundSize: '200% 200%'}}/>
            
            {/* Button Inner Content */}
            <div className="relative h-full bg-gradient-to-b from-emerald-500 to-emerald-700 hover:to-emerald-600 rounded-[14px] md:rounded-[22px] py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-t border-white/20 shadow-inner">
                
                {/* Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50 rounded-[14px] pointer-events-none" />
                
                {/* Text Content */}
                <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 w-full text-white">
                    <span className="text-xl md:text-3xl font-black tracking-tight drop-shadow-md">
                        Join for £99
                    </span>
                    <span className="text-emerald-900/60 line-through decoration-red-500/80 decoration-2 md:decoration-4 text-lg md:text-2xl font-bold mix-blend-overlay">
                        £299
                    </span>
                    
                    {/* Free Tag */}
                    <div className="w-full md:w-auto flex justify-center mt-1 md:mt-0">
                        <span className="bg-[#FFE600] text-emerald-950 px-3 py-0.5 md:px-4 md:py-1 rounded-lg text-sm md:text-lg font-black -rotate-2 shadow-lg border border-yellow-300">
                        FREE 2-Day Bootcamp
                        </span>
                    </div>
                </div>
            </div>
          </motion.button>

          {/* Social Proof / Urgency - Refined */}
          <div className="w-full max-w-sm mt-5 md:mt-8 relative z-10 px-6">
            <div className="flex items-center justify-center gap-1.5 h-1.5 md:h-2 mb-3">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex-1 rounded-full h-full ${i < 10 ? 'bg-gradient-to-r from-rose-500 to-orange-500' : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500">
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </div>
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-wider">
                    84 people are viewing this right now
                </p>
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .animate-spin-slow {
            animation: spin 3s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default FoundryHero;