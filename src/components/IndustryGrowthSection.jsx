import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { TrendingUp, ArrowRight, Zap, Sparkles } from 'lucide-react';

const IndustryGrowthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
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
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Explosive Market Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            The Next Gold Rush: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              $133 Billion Agentic AI Market
            </span>
          </h2>
        </motion.div>

        {/* The Animated Graph Container */}
        <div ref={ref} className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-900/60 backdrop-blur-xl rounded-2xl border border-neutral-800 p-4 md:p-8 mb-16 shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] overflow-hidden">
          
          {/* SVG Growth Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#047857" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid Lines Overlay */}
            <g stroke="#ffffff0a" strokeWidth="1">
              <line x1="0" y1="100" x2="1000" y2="100" />
              <line x1="0" y1="200" x2="1000" y2="200" />
              <line x1="0" y1="300" x2="1000" y2="300" />
            </g>

            <motion.path 
              d="M 50,350 C 250,340 400,280 650,150 S 900,50 950,30" 
              fill="none" 
              stroke="url(#line-gradient)" 
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>

          {/* HTML Overlay for Data Points */}
          <div className="absolute inset-0 w-full h-full text-left font-sans">
            
            {/* Point 1: Perception AI */}
            <GraphNode 
              top="70%" left="15%" delay={0.5} isInView={isInView}
              title="Perception AI" color="bg-emerald-700"
              items={["Speech Recognition", "Deep Recsys", "Medical Imaging"]}
            />

            {/* Point 2: Generative AI */}
            <GraphNode 
              top="45%" left="40%" delay={0.8} isInView={isInView}
              title="Generative AI" color="bg-emerald-500"
              items={["Digital Marketing", "Content Creation", "Basic Chatbots"]}
            />

            {/* Point 3: Agentic AI (Highlight) */}
            <motion.div 
              custom={1.2} variants={nodeVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="absolute top-[20%] left-[65%] w-64"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 shadow-[0_0_15px_#22d3ee]"></span>
                </span>
                <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-wide flex items-center gap-2">
                  Agentic AI <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                </h3>
              </div>
              <ul className="text-neutral-300 font-medium space-y-1 pl-6 border-l-2 border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-transparent p-2 rounded-r-lg">
                <li>• Autonomous Agents</li>
                <li>• Complex Workflow Solving</li>
                <li>• Enterprise Integration</li>
              </ul>
            </motion.div>

             {/* Point 4: Physical AI (Faded Future) */}
             <motion.div 
              custom={1.6} variants={nodeVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
              className="absolute top-[5%] left-[85%] opacity-40 w-32"
            >
              <h3 className="text-neutral-500 font-bold text-sm tracking-widest uppercase mb-1">Physical AI</h3>
              <p className="text-neutral-600 text-xs pl-3 border-l border-neutral-700">Robotics & AVs</p>
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
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-8 text-center">
            Master the tech behind the <span className="text-white border-b-2 border-emerald-500">Gold Rush</span>.
          </h3>

          <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)]">
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
            <span className="relative flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Claim Your <span className="line-through opacity-70 ml-1 decoration-red-500">$99</span> <span className="text-yellow-300 ml-1">FREE</span> Bootcamp Spot
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for standard graph nodes
const GraphNode = ({ top, left, delay, isInView, title, items, color }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
      className="absolute w-40 md:w-48"
      style={{ top, left }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${color} shadow-md`}></div>
        <h3 className="text-neutral-400 font-bold text-sm md:text-base uppercase tracking-wider">{title}</h3>
      </div>
      <ul className="text-neutral-500 text-xs md:text-sm space-y-1 pl-4 border-l border-neutral-800">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default IndustryGrowthSection;