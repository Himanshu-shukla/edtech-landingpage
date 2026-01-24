import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ArrowRight, Zap, Sparkles, BarChart3, Globe } from 'lucide-react';

const IndustryGrowthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay, type: "spring" }
    })
  };

  return (
    <section className="relative w-full bg-neutral-950 py-24 px-4 font-sans overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse: 80% 50% at 50% 0%,#000 70%,transparent 100%)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wider uppercase mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>2026 Market Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
            The $139B Shift: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              From Chat to Autonomy
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            While basic GenAI matures, Agentic AI is scaling at a <span className="text-white">40.5% CAGR</span>. The industry is moving from "talking to AI" to "AI doing the work."
          </p>
        </motion.div>

        {/* The Animated Graph Container */}
        <div ref={ref} className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-900/40 backdrop-blur-xl rounded-[2rem] border border-neutral-800 p-4 md:p-8 mb-16 shadow-[0_0_80px_-20px_rgba(16,185,129,0.1)] overflow-hidden">
          
          {/* SVG Growth Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path 
              d="M 50,370 C 250,360 450,320 600,180 S 850,50 950,30" 
              fill="none" 
              stroke="url(#line-gradient)" 
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#glow)"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>

          {/* HTML Overlay for Data Points */}
          <div className="absolute inset-0 w-full h-full text-left font-sans">
            
            {/* Phase 1: Perception */}
            <GraphNode 
              top="75%" left="10%" delay={0.4} isInView={isInView}
              title="Perception (2010s)" color="bg-emerald-900"
              items={["Image Recognition", "Speech-to-Text"]}
            />

            {/* Phase 2: Generative */}
            <GraphNode 
              top="55%" left="35%" delay={0.7} isInView={isInView}
              title="Generative (2023)" color="bg-emerald-600"
              items={["Content Creation", "LLM Chat"]}
            />

            {/* Phase 3: Agentic (Current Peak) */}
            <motion.div 
              custom={1.1} variants={nodeVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="absolute top-[22%] left-[62%] w-72"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 shadow-[0_0_20px_#22d3ee]"></span>
                </span>
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight flex items-center gap-2">
                  Agentic AI <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400" />
                </h3>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/80 to-transparent p-4 rounded-xl border border-white/5 backdrop-blur-md">
                <ul className="text-neutral-200 font-semibold space-y-2 text-sm md:text-base">
                  <li className="flex items-center gap-2 italic">🚀 $9B+ Market (2026)</li>
                  <li className="flex items-center gap-2">• Multi-Agent Orchestration</li>
                  <li className="flex items-center gap-2">• Autonomous Reasoning</li>
                  <li className="flex items-center gap-2">• Enterprise Scale</li>
                </ul>
              </div>
            </motion.div>

             {/* Phase 4: Embodied / Physical AI */}
             <motion.div 
              custom={1.5} variants={nodeVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="absolute top-[4%] left-[88%] opacity-30 w-36"
            >
              <h3 className="text-neutral-500 font-bold text-xs tracking-widest uppercase mb-1 flex items-center gap-1">
                <Globe className="w-3 h-3" /> Embodied AI
              </h3>
              <p className="text-neutral-600 text-[10px] leading-tight pl-3 border-l border-neutral-700">Robotics & <br/>Spatial Intelligence</p>
            </motion.div>

          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-neutral-500 text-sm font-bold uppercase tracking-widest">
             <span className="flex items-center gap-2"><CheckCircleIcon /> 40% Adoption by Dec 2026</span>
             <span className="hidden md:block">•</span>
             <span className="flex items-center gap-2"><CheckCircleIcon /> $10M+ Enterprise Savings</span>
          </div>

          <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-10 font-black text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.8)]">
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent: 25%,rgba(255,255,255,0.2) 50%,transparent 75%,transparent 100%)] bg-[length:250% 250%,100% 100%] animate-[shimmer_2s_infinite]"></span>
            <span className="relative flex items-center gap-3 text-lg md:text-xl">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Secure My Agentic AI Future
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

const GraphNode = ({ top, left, delay, isInView, title, items, color }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
    transition={{ duration: 0.6, delay: delay, type: "spring" }}
    className="absolute w-44 md:w-52"
    style={{ top, left }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color} shadow-lg shadow-emerald-900/40`}></div>
      <h3 className="text-neutral-400 font-bold text-xs md:text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <ul className="text-neutral-500 text-xs space-y-1 pl-4 border-l border-neutral-800 font-medium">
      {items.map((item, idx) => (
        <li key={idx}>• {item}</li>
      ))}
    </ul>
  </motion.div>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default IndustryGrowthSection;