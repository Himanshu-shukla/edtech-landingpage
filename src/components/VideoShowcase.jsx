import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, ShieldCheck, Code, CheckCircle } from 'lucide-react';
// Ensure the video file exists at this path or update it
import whatsappVideo from '../assets/Video_Generation_for_WhatsApp_Chat.mp4';

const VideoShowcase = () => {
  return (
    <section className="relative py-8 md:py-12 !bg-neutral-950 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black tracking-[0.2em] uppercase mb-6">
            <Code className="w-3.5 h-3.5" />
            <span>Capstone Project Spotlight</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
            Build Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Agentic Systems.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
            Don't just watch tutorials. In our Agentic AI program, you will build and deploy full-stack automations like this WhatsApp Orchestrator.
          </p>
        </motion.div>
        
        

        <motion.div 
          initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-5xl aspect-video rounded-[2.5rem] bg-neutral-900 border border-neutral-800 shadow-[0_0_100px_-20px_rgba(16,185,129,0.2)] overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-neutral-800/50 to-transparent z-20 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            <span className="ml-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              Student_Project_Demo.mp4
            </span>
          </div>

          <video 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            autoPlay 
            loop 
            muted 
            playsInline
            key={whatsappVideo} 
          >
            <source src={whatsappVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-white/5 pointer-events-none z-30" />
          
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-20 flex justify-between items-end">
             <div className="flex gap-4">
                <MetricSmall label="Tech Stack" value="Python + OpenAI" />
                <MetricSmall label="Build Time" value="2 Weeks" />
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                Verified Project
             </div>
          </div>
        </motion.div>
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

export default VideoShowcase;