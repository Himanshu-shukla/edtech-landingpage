import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Calendar } from 'lucide-react';

const FoundryHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-[70vh] bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden flex flex-col justify-center">
      {/* --- Background Layers (Unchanged) --- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-40 w-96 h-48 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-violet-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, -80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 800, opacity: 0 }}
            animate={{ y: [null, -100], opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="absolute inset-0 [perspective:1000px]">
        <motion.div
          animate={{ rotateX: [0, 2, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#fff_70%,transparent_100%)] [transform-style:preserve-3d]"
          style={{ transformOrigin: 'center top' }}
        />
      </div>

      <motion.div
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"
      />

      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        style={{ top: 0 }}
      />
      {/* --- End Background Layers --- */}

      {/* Content Container - Tightened padding for mobile */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-6 pb-12 md:pt-20 md:pb-24 px-3 md:px-4">
        
        {/* Top Badge - Reduced margins */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-4 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-8 md:py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[10px] md:text-base font-black tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-600"></span>
            </span>
            2 DAY LIVE AGENTIC AI BOOTCAMP
          </div>
        </motion.div>

        {/* Attention Pill - Reduced scale and margins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4 md:mb-8 inline-block max-w-[90%]"
        >
          <div className="px-3 py-1.5 md:px-6 md:py-2 rounded-lg bg-red-50 border border-red-100 text-red-600 font-bold text-xs md:text-base tracking-wide backdrop-blur-sm truncate">
            Attention: Engineers, Analysts, Founders & Pros
          </div>
        </motion.div>

        {/* Main Headline - Responsive Text Sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.0] md:leading-[1.1] mb-2 md:mb-4 text-neutral-900"
        >
          Build Autonomous AI Systems <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-gradient block mt-1 md:mt-0">
            That Think & Act
          </span>
        </motion.h1>

        {/* Secondary Headline - Drastically smaller on mobile to save space */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-5xl font-black text-neutral-800 tracking-tight mb-4 md:mb-8"
        >
          Master{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
            Agentic AI Workflows
          </span>{" "}
          In 2 Days
        </motion.h2>

        {/* Sub Description - Hidden on very small screens if needed, otherwise tight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 text-sm md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-6 md:mb-12 px-2"
        >
          Design, orchestrate, and deploy intelligent AI agents that automate decision-making <span className="hidden md:inline">, execute complex tasks, and scale businesses</span>.
        </motion.p>

        {/* ---------------- NEW CTA BUTTON SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative py-2 md:py-6"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 6 }}
            className="relative w-full max-w-3xl bg-gradient-to-b from-[#00d647] to-[#009933] text-white py-4 md:py-7 px-4 md:px-6 rounded-2xl md:rounded-3xl shadow-[0_6px_0_rgb(0,100,30),0_15px_30px_rgba(0,0,0,0.15)] md:shadow-[0_12px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.15)] transition-all flex flex-col md:flex-row items-center justify-center overflow-hidden border-t border-green-300/30 cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {/* CTA Text Layout - Optimized for Mobile Density */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 relative z-10 w-full">
                <span className="text-lg md:text-3xl font-black drop-shadow-md whitespace-nowrap">Register For £99</span>
                <span className="text-green-900 line-through decoration-red-600 decoration-2 md:decoration-4 opacity-70 text-base md:text-2xl font-bold">£299</span>
                <div className="w-full md:w-auto flex justify-center mt-1 md:mt-0">
                  <span className="bg-yellow-400 text-black px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg text-sm md:text-xl font-extrabold -rotate-1 md:-rotate-2 shadow-sm border-2 border-black/10">
                      FREE 2-Day Bootcamp
                  </span>
                </div>
            </div>
          </motion.button>

          {/* Progress Bar Component */}
          <div className="w-full max-w-lg mt-4 md:mt-8 relative z-10 px-4">
            <div className="flex gap-1.5 h-2 md:h-3">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: i * 0.03, type: "spring" }}
                  className={`flex-1 rounded-full ${i < 17 ? 'bg-gradient-to-t from-red-600 to-red-500 shadow-sm' : 'bg-neutral-200'}`}
                />
              ))}
            </div>
            <p className="text-red-600 text-center font-bold text-[10px] md:text-sm mt-2 md:mt-3 uppercase tracking-widest animate-pulse">
              🔥 High Demand: Batch filling fast
            </p>
          </div>
        </motion.div>
        {/* ---------------- END NEW CTA BUTTON SECTION ---------------- */}

      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default FoundryHero;