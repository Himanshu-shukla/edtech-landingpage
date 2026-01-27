import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Scale, ArrowRight } from 'lucide-react';

const ComparisonSection = () => {
  // Define WhatsApp Link
  const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20bootcamp%20after%20seeing%20the%20comparison.";

  const comparisonData = [
    {
      bad: "Just Theory & Slides: You watch the instructor talk for 2 hours about 'AI concepts'.",
      good: (
        <>
          <span className="text-white font-semibold">100% Hands-On Build:</span> You open your laptop and build 5+ real agents along with us, step-by-step.
        </>
      ),
    },
    {
      bad: "The Upsell Trap: A teaser session that teaches nothing and pushes a ₹20k course.",
      good: (
        <>
          <span className="text-white font-semibold">Complete Certification:</span> A full 2-day bootcamp. You leave with working skills, ready to take clients immediately.
        </>
      ),
    },
    {
      bad: "Basic Prompting: Teaching you how to use ChatGPT (which you already know).",
      good: (
        <>
          <span className="text-white font-semibold">Advanced Agentic Stack:</span> Master n8n, Vapi, and RAG pipelines to build autonomous systems, not just chatbots.
        </>
      ),
    },
    {
      bad: "No Business Plan: You learn a skill but have no idea how to monetize it.",
      good: (
        <>
          <span className="text-white font-semibold">Agency In A Box:</span> Includes proposal templates, pricing guides, and a roadmap to your first ₹50k client.
        </>
      ),
    },
    {
      bad: "Zero Support: If you get stuck, you're on your own.",
      good: (
        <>
          <span className="text-white font-semibold">Lifetime Community:</span> Get access to our alumni network for debugging help and job opportunities.
        </>
      ),
    },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 bg-neutral-950 font-sans overflow-hidden">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span>The Reality Check</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Not All "Masterclasses" <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Are Created Equal.
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative bg-neutral-900/40 backdrop-blur-xl rounded-[2.5rem] border border-neutral-800 p-6 md:p-12 shadow-2xl overflow-hidden mb-16">
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 text-neutral-500 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <AlertTriangle className="w-4 h-4 text-neutral-600" />
              Typical ₹99 Webinars
            </div>
            <div className="flex items-center justify-center gap-3 text-emerald-400 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Agentic AI Bootcamp
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 group"
              >
                {/* Left Side (Outdated) */}
                <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group-hover:bg-neutral-950/40">
                  <XCircle className="w-5 h-5 text-red-900/50 flex-shrink-0 mt-1" />
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium">{row.bad}</p>
                </div>

                {/* Right Side (Agentic) */}
                <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)] transition-all duration-300 group-hover:border-emerald-500/40">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block"></div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-200 text-sm md:text-base leading-relaxed font-semibold">{row.good}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
        >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Make The Right Choice For Your Career
            </h3>
            
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full max-w-2xl relative z-10 group">
                <motion.button
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98, y: 6, boxShadow: "none" }}
                    className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-2xl font-black py-6 px-6 rounded-2xl shadow-[0_10px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_0_rgb(0,100,30),0_30px_60px_rgba(0,255,100,0.25)] transition-all flex items-center justify-center gap-3 overflow-hidden border-t border-green-300/30"
                >
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    <span className="relative z-10 drop-shadow-md">Join The Top 1%</span>
                    <ArrowRight className="relative z-10 w-6 h-6 ml-2" />
                </motion.button>
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonSection;