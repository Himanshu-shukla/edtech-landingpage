import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ArrowRight, TrendingUp, ShieldCheck, Terminal } from 'lucide-react';

const FoundryHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-neutral-950 text-white font-sans overflow-hidden flex items-center pt-32 pb-16 px-4 md:px-8">
      {/* Ambient Grid & Emerald Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase mb-6 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Admissions Open: Batch of 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Build the Future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Data & Agentic AI.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Stop watching the revolution. Lead it. <br/>
            Master <span className="text-white">Python, Data Science, and Autonomous Agents</span> with 
            live mentorship and real industry projects.
          </p>
        </motion.div>

       {/* Dual CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
          
          {/* Primary Button: Forced Emerald Background & White Text */}
          <button 
            className="group relative h-16 px-10 rounded-xl !bg-emerald-600 hover:!bg-emerald-500 font-black !text-white transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3"
            style={{ backgroundColor: '#059669', color: '#ffffff' }}
          >
            Explore Career Tracks
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform !text-white" />
          </button>

          {/* Secondary Button: Forced Dark Background & White Text */}
          <button 
            className="h-16 px-10 rounded-xl !bg-neutral-900 border !border-neutral-800 hover:!border-emerald-500/50 font-black !text-white transition-all flex items-center justify-center gap-3"
            style={{ backgroundColor: '#171717', color: '#ffffff', borderColor: '#262626' }}
          >
            Talk to an Advisor
          </button>
          
        </div>

        {/* Brand/Tech Scroller (Optional Visual Flair) */}
        <div className="border-t border-neutral-800/50 pt-10">
            <p className="text-center text-neutral-500 text-xs font-bold uppercase tracking-widest mb-6">Technologies you will master</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {['Python', 'TensorFlow', 'PowerBI', 'Tableau', 'OpenAI', 'SQL'].map((tech) => (
                   <span key={tech} className="text-lg font-bold text-neutral-400">{tech}</span>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FoundryHero;