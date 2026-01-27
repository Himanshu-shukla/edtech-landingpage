import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Scale } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      bad: "Watching endless tutorials without building real projects.",
      good: (
        <>
          Build <span className="text-white font-semibold">Live Enterprise Systems</span> (WhatsApp Bots, CRM Agents) from Day 1.
        </>
      ),
    },
    {
      bad: "Learning outdated tools that will be automated by AI.",
      good: (
        <>
          Master the <span className="text-white font-semibold">Agentic Tech Stack</span> (LangGraph, CrewAI) that controls the automation.
        </>
      ),
    },
    {
      bad: "Generic certificate that recruiters ignore.",
      good: (
        <>
          Earn a <span className="text-white font-semibold">Microsoft-Aligned Certification</span> & a GitHub portfolio that proves your skills.
        </>
      ),
    },
    {
      bad: "Applying to hundreds of jobs with no response.",
      good: (
        <>
          Direct referrals to our <span className="text-white font-semibold">200+ Hiring Partners</span> & internal placement team.
        </>
      ),
    },
    {
      bad: "Isolating self-study with zero feedback.",
      good: (
        <>
          <span className="text-white font-semibold">Live Mentorship</span> & code reviews from Senior Architects.
        </>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
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
            <span>The Choice is Yours</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Stop Learning in the Past. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Build for the Future.
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative bg-neutral-900/40 backdrop-blur-xl rounded-[2.5rem] border border-neutral-800 p-6 md:p-12 shadow-2xl overflow-hidden">
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 text-neutral-500 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <AlertTriangle className="w-4 h-4 text-neutral-600" />
              Standard Online Courses
            </div>
            <div className="flex items-center justify-center gap-3 text-emerald-400 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              EdTech Informative
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
      </div>
    </section>
  );
};

export default ComparisonSection;