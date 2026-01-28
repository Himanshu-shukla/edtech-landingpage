import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Calendar } from 'lucide-react';

const FoundryHero = () => {
  return (
    <section className="relative pb-20 bg-white text-neutral-900 font-sans overflow-hidden flex flex-col items-center px-4 md:px-8">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966908_1px,transparent_1px),linear-gradient(to_bottom,#05966908_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-16">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-sm md:text-base font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            2 DAY LIVE AGENTIC AI BOOTCAMP
          </div>
        </motion.div>

        {/* Attention Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-block"
        >
          <div className="px-6 py-2 rounded-lg bg-red-50 border border-red-100 text-red-600 font-bold text-sm md:text-base tracking-wide">
            Attention: Engineers, Analysts, Founders, Professionals & Career Switchers
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-4 text-neutral-900"
        >
          Build Autonomous AI Systems <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            That Think, Decide & Act For You
          </span>
        </motion.h1>

        {/* Secondary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-neutral-800 tracking-tight mb-8"
        >
          Master{"  "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
            Agentic AI Workflows
          </span>{" "}
          In Just 6 Months
        </motion.h2>

        {/* Sub Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Learn how to design, orchestrate, and deploy intelligent AI agents that automate decision-making, execute complex tasks, and scale businesses — using real-world projects, modern tools, and production-grade architectures.
        </motion.p>

      </div>
    </section>
  );
};

export default FoundryHero;
