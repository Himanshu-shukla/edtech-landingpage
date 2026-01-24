import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, ShieldCheck, Cpu } from 'lucide-react';

const VideoShowcase = () => {
  return (
    <section className="relative py-24 px-4 bg-neutral-950 overflow-hidden font-sans">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black tracking-[0.2em] uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Deployment Spotlight</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
            Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WhatsApp Orchestration</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
            Watch how Edtech Informative automates complex student queries and workflow logic in real-time.
          </p>
        </motion.div>

        {/* 3D Container (Aceternity Style) */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-5xl aspect-video rounded-[2.5rem] bg-neutral-900 border border-neutral-800 shadow-[0_0_100px_-20px_rgba(16,185,129,0.2)] overflow-hidden"
        >
          {/* Top Bezel Overlay */}
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-neutral-800/50 to-transparent z-20 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            <span className="ml-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              Live Flow: WhatsApp_Auto_Logic.gif
            </span>
          </div>

          {/* The GIF Element (Replacing Video) */}
          <img 
            src="../src/assets/whatsapp.gif" 
            alt="WhatsApp Automation Demo"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          />

          {/* Scanline / Digital Overlay for Realism */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10" />

          {/* Inner Glow Border */}
          <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-white/5 pointer-events-none z-30" />
          
          {/* Bottom Controls / Info Bar */}
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-20 flex justify-between items-end">
             <div className="flex gap-4">
                <MetricSmall label="Latency" value="240ms" />
                <MetricSmall label="Resolution" value="99.4%" />
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                Production Ready
             </div>
          </div>
        </motion.div>

        {/* Feature Highlights beneath GIF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
          <Feature icon={<Cpu />} title="Reasoning Loops" text="Agents analyze context before responding." />
          <Feature icon={<Play />} title="HITL Ready" text="Seamless handoff to human experts." />
          <Feature icon={<ShieldCheck />} title="Zero Leakage" text="Secure, end-to-end data encryption." />
        </div>

      </div>
    </section>
  );
};

const MetricSmall = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">{label}</span>
    <span className="text-white font-black text-sm">{value}</span>
  </div>
);

const Feature = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 p-6 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-colors">
    <div className="text-emerald-500">{icon}</div>
    <div>
      <h4 className="text-white font-black text-sm uppercase tracking-wider mb-2">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default VideoShowcase;