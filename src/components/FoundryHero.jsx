import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ArrowRight, Star, Clock, Calendar } from 'lucide-react';

const FoundryHero = () => {
  // Your Bot's WhatsApp Link - Pre-filled for the Bootcamp offer
  const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Agentic%20AI%20Masterclass.%20Please%20guide%20me.";

  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 bg-neutral-950 text-white font-sans overflow-hidden flex items-center px-4 md:px-8">
      
      {/* Ambient Grid & Emerald Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase mb-6 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Next Batch: Jan 31 & Feb 01, 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
            Build AI Agents That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Think, Act & Earn.
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Build 5+ deployment-ready AI agents for business automation in just <span className="text-white font-bold">2 Days</span>. 
            No coding required. Automate your work and become irreplaceable.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-bold text-neutral-500">
             <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Rated 4.8/5 by Professionals</span>
             <span className="hidden md:block">•</span>
             <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /> 10+ Hours Live Training</span>
             <span className="hidden md:block">•</span>
             <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400" /> Weekend Batch</span>
          </div>
        </motion.div>

        {/* Pricing / Offer Block */}
        <div className="flex flex-col items-center justify-center mb-10">
           <div className="bg-neutral-900/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
              <div>
                 <span className="block text-neutral-400 text-xs uppercase tracking-widest line-through">Standard Fee: ₹19,999</span>
                 <span className="block text-white text-3xl font-black tracking-tight">₹999 <span className="text-sm font-bold text-emerald-400">+ GST</span></span>
              </div>
              <div className="h-10 w-px bg-neutral-700"></div>
              <div className="text-left">
                 <span className="block text-red-400 text-xs font-bold uppercase animate-pulse">Offer Ends Soon</span>
                 <span className="block text-neutral-300 text-sm font-bold">Secure Your Seat</span>
              </div>
           </div>
        </div>

       {/* Dual CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
          
          {/* Primary Button: WhatsApp Enrollment */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button 
              className="group relative w-full md:w-auto h-16 px-10 rounded-xl !bg-emerald-600 hover:!bg-emerald-500 font-black !text-white transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3"
              style={{ backgroundColor: '#059669', color: '#ffffff' }}
            >
              Enroll Now for ₹999
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform !text-white" />
            </button>
          </a>

          {/* Secondary Button: Curriculum Download */}
          <a href="#curriculum">
            <button 
              className="w-full md:w-auto h-16 px-10 rounded-xl !bg-neutral-900 border !border-neutral-800 hover:!border-emerald-500/50 font-black !text-white transition-all flex items-center justify-center gap-3"
              style={{ backgroundColor: '#171717', color: '#ffffff', borderColor: '#262626' }}
            >
              Download Syllabus
            </button>
          </a>
          
        </div>

        {/* Tech Stack Scroller */}
        <div className="border-t border-neutral-800/50 pt-10">
            <p className="text-center text-neutral-500 text-xs font-bold uppercase tracking-widest mb-6">Build Agents Using</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {['OpenAI', 'LangChain', 'n8n', 'Make.com', 'Vapi', 'Flowise'].map((tech) => (
                   <span key={tech} className="text-lg font-bold text-neutral-400 hover:text-white transition-colors cursor-default">{tech}</span>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FoundryHero;