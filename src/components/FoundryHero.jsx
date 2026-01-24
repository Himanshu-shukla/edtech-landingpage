import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ArrowRight, Play, Cpu, Globe, ShieldCheck } from 'lucide-react';

const FoundryHero = () => {
  return (
    <section className="relative min-h-screen bg-neutral-950 text-white font-sans overflow-hidden flex items-center pt-24 pb-16 px-4 md:px-8">
      {/* Ambient Grid & Emerald Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

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
            Global Agentic AI Foundry
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            The Standard for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Autonomous Systems.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            We build for enterprises. We teach for the elite. From saving <span className="text-white">$10M+ for big enterprises</span> to architecting the 2026 AI job market.
          </p>
        </motion.div>

        {/* Dual CTA */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
          <button className="group relative h-16 px-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-black text-white transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3">
            Deploy for Enterprise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="h-16 px-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 font-black text-white transition-all flex items-center justify-center gap-3">
            Join the Architect Foundry
          </button>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <MetricCard label="Tickets Resolved" value="1B+" icon={<Globe className="w-4 h-4" />} />
          <MetricCard label="Cost Savings" value="$15M+" icon={<ShieldCheck className="w-4 h-4" />} />
          <MetricCard label="Alumni Placement" value="98%" icon={<Cpu className="w-4 h-4" />} />
          <MetricCard label="Domain Coverage" value="All" icon={<Sparkles className="w-4 h-4" />} />
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ label, value, icon }) => (
  <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl text-center flex flex-col items-center gap-2">
    <div className="text-emerald-500">{icon}</div>
    <div className="text-2xl font-black text-white">{value}</div>
    <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">{label}</div>
  </div>
);

export default FoundryHero;