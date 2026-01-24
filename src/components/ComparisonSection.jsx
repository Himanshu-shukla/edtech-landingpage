import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Bot } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      bad: "Surface-level prompting & generic ChatGPT templates.",
      good: (
        <>
          Master <span className="text-white font-semibold">Production-Grade Orchestration</span> with LangGraph & CrewAI.
        </>
      ),
    },
    {
      bad: "Building 'toys' that fail in real business edge-cases.",
      good: (
        <>
          Deploy <span className="text-white font-semibold">Autonomous Business Logic</span> that scales without hallucinations.
        </>
      ),
    },
    {
      bad: "Months spent learning coding languages in a vacuum.",
      good: (
        <>
          Build <span className="text-white font-semibold">Enterprise AI Agents</span> in days using our modular code snippets.
        </>
      ),
    },
    {
      bad: "Stagnant career paths in commoditized 'AI user' roles.",
      good: (
        <>
          Pivot to <span className="text-white font-semibold">Six-Figure Architect roles</span> in the $139B Agentic Market.
        </>
      ),
    },
    {
      bad: "Manual support workflows drowning in human overhead.",
      good: (
        <>
          Reclaim <span className="text-white font-semibold">80% of operational bandwidth</span> with multi-agent swarms.
        </>
      ),
    },
    {
      bad: "Theoretic knowledge without industry deployment proof.",
      good: (
        <>
          Learn the <span className="text-white font-semibold">Battle-Tested Frameworks</span> we use for major enterprises.
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
        
        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>The Agentic Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Stop Prompting. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Start Orchestrating.
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative bg-neutral-900/40 backdrop-blur-xl rounded-[2.5rem] border border-neutral-800 p-6 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Central Glowing Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent -translate-x-1/2"></div>

          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 text-neutral-500 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <AlertTriangle className="w-4 h-4 text-neutral-600" />
              Traditional Approach
            </div>
            <div className="flex items-center justify-center gap-3 text-emerald-400 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              The Agentic AI Way
            </div>
          </div>

          {/* Rows */}
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
                  <XCircle className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-1" />
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium">
                    {row.bad}
                  </p>
                </div>

                {/* Right Side (Agentic) */}
                <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)] transition-all duration-300 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.2)]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block"></div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-200 text-sm md:text-base leading-relaxed font-semibold">
                    {row.good}
                  </p>
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