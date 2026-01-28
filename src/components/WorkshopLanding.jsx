import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, CheckCircle2, ArrowRight, Play, Zap, Bot, Database } from 'lucide-react';

const WorkshopLanding = () => {
  return (
    <section className="relative pb-16 md:pb-20 bg-neutral-50 text-neutral-900 font-sans overflow-hidden px-4 md:px-8">
      
      {/* Top-attached badge strip */}
      <div className="relative z-20 flex justify-center pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 text-sm font-semibold shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live 2-Day Implementation Bootcamp
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Stop Theory.  
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              Start building Real Agents.
            </span>
          </h1>

          <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Most courses show slides. We build 5+ industry-grade AI agents live —
            sales, support, content, and automation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-xl aspect-video">
              <img
                src="https://static.wixstatic.com/media/3cd83b_272809dcc1e14cd78dd6a235eaf3a4ed~mv2.gif"
                alt="Building AI Agent Workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-emerald-600 ml-1 fill-emerald-600" />
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard icon={<Database className="w-5 h-5 text-amber-600" />} label="Platform" value="n8n, Make, Vapi" />
              <InfoCard icon={<Bot className="w-5 h-5 text-blue-600" />} label="No-Code" value="Zero Coding Needed" />
              <InfoCard icon={<Globe className="w-5 h-5 text-indigo-600" />} label="Language" value="English (Live)" />
              <InfoCard icon={<Zap className="w-5 h-5 text-purple-600" />} label="Outcome" value="5 Ready Agents" />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-xl flex flex-col gap-6">
              <BenefitItem>
                <strong>LinkedIn Content Agent:</strong> Auto-research, write & post.
              </BenefitItem>
              <BenefitItem>
                <strong>WhatsApp Sales Bot:</strong> Qualifies & closes leads.
              </BenefitItem>
              <BenefitItem>
                <strong>AI Voice Caller:</strong> Vapi-powered human-like calls.
              </BenefitItem>
              <BenefitItem border={false}>
                <strong>Agency Blueprint:</strong> Sell agents for ₹50k+.
              </BenefitItem>

              <a href="https://wa.me/919810249170" target="_blank" rel="noreferrer">
                <button className="w-full h-16 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                  <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  Enroll for ₹999
                  <ArrowRight className="w-6 h-6" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-4 shadow-sm">
    <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">{label}</p>
      <div className="text-neutral-800 font-bold">{value}</div>
    </div>
  </div>
);

const BenefitItem = ({ children, border = true }) => (
  <div className={`flex gap-4 ${border ? 'border-b border-neutral-100 pb-5' : ''}`}>
    <div className="bg-emerald-100 p-1.5 rounded-full border border-emerald-200 mt-1">
      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    </div>
    <div className="text-neutral-600 text-base">{children}</div>
  </div>
);

export default WorkshopLanding;
