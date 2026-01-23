import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      bad: "Endless theory, piles of textbooks",
      good: (
        <>
          Hands-on, real-world projects that{" "}
          <span className="text-white font-semibold">empower your career</span>
        </>
      ),
    },
    {
      bad: "Memorizing formulas without context",
      good: (
        <>
          Simplified tools that boost productivity,{" "}
          <span className="text-white font-semibold">not just tasks</span>
        </>
      ),
    },
    {
      bad: "Months of coding before you're ready to work",
      good: (
        <>
          Build advanced analytics{" "}
          <span className="text-white font-semibold">in minutes, not months</span>
        </>
      ),
    },
    {
      bad: "Years spent just to land junior roles",
      good: (
        <>
          Become job-ready in 90 days{" "}
          <span className="text-white font-semibold">with real skills</span>
        </>
      ),
    },
    {
      bad: "Low-paying jobs with no clear growth",
      good: (
        <>
          Direct access to{" "}
          <span className="text-white font-semibold">six-figure career opportunities</span>
        </>
      ),
    },
    {
      bad: "Limited job support, hoping someone will help",
      good: (
        <>
          Real-time placement support with{" "}
          <span className="text-white font-semibold">expert guidance</span>
        </>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Aceternity Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>The Career Accelerator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            The Fast Track to High-Paying <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
              Agentic AI Careers
            </span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 md:p-12 shadow-2xl">
          
          {/* Central Glowing Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent -translate-x-1/2"></div>

          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10">
            <div className="flex items-center justify-center gap-2 text-neutral-500 font-bold text-lg">
              <AlertTriangle className="w-5 h-5 text-neutral-500" />
              The Outdated Approach
            </div>
            <div className="flex items-center justify-center gap-2 text-orange-400 font-bold text-lg">
              <Sparkles className="w-5 h-5 text-orange-400" />
              The Agentic AI Way
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-6">
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 group"
              >
                {/* Left Side (Bad) */}
                <div className="flex items-start gap-4 p-4 rounded-xl transition-colors duration-300 md:group-hover:bg-neutral-900/50">
                  <XCircle className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                    {row.bad}
                  </p>
                </div>

                {/* Right Side (Good) */}
                <div className="relative flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.1)] transition-all duration-300 md:group-hover:border-orange-500/40 md:group-hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] hidden md:block"></div>
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
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