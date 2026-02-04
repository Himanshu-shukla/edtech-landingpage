import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cpu, Globe, Zap, Code, Shield } from 'lucide-react';

const FoundryHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-[90vh] bg-slate-50 overflow-hidden flex flex-col justify-center font-sans">
      
      {/* ==============================================
          BACKGROUND LAYER: THE "HEAVY" ANIMATION
      =============================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none perspective-[2000px]">
        
        {/* 1. Aurora Gradients (Retained & Softened) */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-300 blur-[120px] rounded-full mix-blend-multiply animate-blob" />
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-300 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-300 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-4000" />
        </div>

        {/* 2. THE VORTEX: Rotating Wireframe Cylinder Pattern */}
        {/* This creates the "Nugget" style 3D structure filling the empty space */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1200px] md:h-[1200px] opacity-[0.08] z-0">
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative"
             >
                {/* Concentric Dashed Rings */}
                {[...Array(6)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 rounded-full border border-slate-900/40"
                        style={{
                            width: `${30 + (i * 12)}%`,
                            height: `${30 + (i * 12)}%`,
                            transform: `translate(-50%, -50%) rotateX(60deg) rotateY(${i * 10}deg)`,
                            borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                        }}
                    />
                ))}
                 {/* Cross Lines */}
                <div className="absolute top-0 left-1/2 w-px h-full bg-slate-900/20 -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-900/20 -translate-y-1/2" />
             </motion.div>
        </div>

        {/* 3. Floating "Agent" Cards (Desktop Only) - Fills the sides */}
        <div className="hidden md:block absolute inset-0 max-w-7xl mx-auto z-0">
            {/* Left Card - Logic */}
            <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[2%] lg:left-[5%] p-4 bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl w-48">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Brain size={18} /></div>
                    <div className="text-xs font-bold text-slate-700">Reasoning Engine</div>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-blue-500" />
                    </div>
                    <div className="h-1.5 w-2/3 bg-slate-200 rounded-full" />
                </div>
            </motion.div>

            {/* Right Card - Execution */}
            <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[2%] lg:right-[5%] p-4 bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl w-48">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Zap size={18} /></div>
                    <div className="text-xs font-bold text-slate-700">Action: Deploy</div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>Status:</span>
                    <span className="text-emerald-600 font-bold">EXECUTING</span>
                </div>
            </motion.div>

            {/* Bottom Left - Code */}
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] left-[10%] p-3 bg-slate-900/5 backdrop-blur-sm rounded-xl rotate-[-6deg]">
                <Code size={24} className="text-slate-700 opacity-50" />
            </motion.div>

            {/* Top Right - Security */}
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[15%] right-[15%] p-3 bg-slate-900/5 backdrop-blur-sm rounded-xl rotate-[12deg]">
                <Shield size={24} className="text-slate-700 opacity-50" />
            </motion.div>
        </div>
      </div>

      {/* ==============================================
          FOREGROUND CONTENT
      =============================================== */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-6 pb-12 md:pt-20 md:pb-24 px-3 md:px-4">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-5 md:mb-8"
        >
          <div className="group relative inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/80 border border-white/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] backdrop-blur-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-rose-600"></span>
            </span>
            <span className="relative text-[10px] md:text-sm font-bold tracking-[0.15em] text-slate-800 uppercase">
               Live Agentic AI Bootcamp
            </span>
          </div>
        </motion.div>

        {/* Headline Section */}
        <div className="mb-4 md:mb-10 relative">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[2.75rem] md:text-8xl font-black tracking-tight leading-[0.95] md:leading-[1.05] text-slate-900 mb-4"
            >
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Autonomous</span> <br className="hidden md:block" />
            <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-30 blur-xl hidden md:block"></span>
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

        {/* CTA Button */}
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
            className="group relative w-full max-w-2xl overflow-hidden rounded-2xl md:rounded-3xl p-[2px] cursor-pointer shadow-[0_20px_50px_-12px_rgba(16,185,129,0.4)] z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-spin-slow opacity-100" style={{backgroundSize: '200% 200%'}}/>
            
            <div className="relative h-full bg-gradient-to-b from-emerald-500 to-emerald-700 hover:to-emerald-600 rounded-[14px] md:rounded-[22px] py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-t border-white/20 shadow-inner">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50 rounded-[14px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 w-full text-white">
                    <span className="text-xl md:text-3xl font-black tracking-tight drop-shadow-md">
                        Join for £99
                    </span>
                    <span className="text-emerald-900/60 line-through decoration-red-500/80 decoration-2 md:decoration-4 text-lg md:text-2xl font-bold mix-blend-overlay">
                        £299
                    </span>
                    <div className="w-full md:w-auto flex justify-center mt-1 md:mt-0">
                        <span className="bg-[#FFE600] text-emerald-950 px-3 py-0.5 md:px-4 md:py-1 rounded-lg text-sm md:text-lg font-black -rotate-2 shadow-lg border border-yellow-300">
                        FREE 2-Day Bootcamp
                        </span>
                    </div>
                </div>
            </div>
          </motion.button>

          {/* Social Proof */}
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
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
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