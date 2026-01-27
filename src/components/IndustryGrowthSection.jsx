import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Sparkles, BarChart3 } from 'lucide-react';

const IndustryGrowthSection = () => {
  const ref = useRef(null);
  // Relaxed margin to ensure it triggers easily on mobile
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
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
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
            The $139B Opportunity: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              The Rise of Agentic AI
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Demand for Data Scientists and AI Architects is outpacing supply by 10x.  
            Salary data shows AI specialists earning 40% more than traditional developers.
          </p>
        </motion.div>

        {/* Graph Container */}
        <div ref={ref} className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-900/40 backdrop-blur-xl rounded-[2rem] border border-neutral-800 p-4 md:p-8 mb-16 shadow-[0_0_80px_-20px_rgba(16,185,129,0.1)] overflow-hidden">
          
          {/* SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="growth-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
              </linearGradient>
              
              <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <motion.path 
              d="M 50,370 C 250,360 450,320 600,180 S 850,50 950,30" 
              fill="none" 
              stroke="url(#growth-gradient)" 
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow-filter)"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} 
            />
          </svg>

          {/* Text/Data Overlay Layer */}
          <div className="absolute inset-0 w-full h-full text-left font-sans z-10">
            
            <GraphNode 
              top="75%" 
              left="8%" 
              delay={0.4} 
              isInView={isInView} 
              title="The Past (2015)" 
              color="bg-emerald-900" 
              items={["Manual Coding", "Basic Dashboards"]} 
            />
            
            <GraphNode 
              top="55%" 
              left="35%" 
              delay={0.7} 
              isInView={isInView} 
              title="The Present (2024)" 
              color="bg-emerald-600" 
              items={["Copilots & Chat", "GenAI Wrappers"]} 
            />

            <motion.div 
              custom={1.1} 
              variants={nodeVariants} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[18%] left-[55%] md:left-[60%] w-64 md:w-72"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 shadow-[0_0_20px_#22d3ee]"></span>
                </span>
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight flex items-center gap-2">
                  The Future <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400" />
                </h3>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/50 p-5 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-2xl">
                <ul className="text-neutral-200 font-semibold space-y-2 text-sm md:text-base">
                  <li className="flex items-center gap-2 italic text-cyan-300">🚀 High Ticket Salary</li>
                  <li className="flex items-center gap-2">• Autonomous Agents</li>
                  <li className="flex items-center gap-2">• Decision Intelligence</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-10 font-black text-white transition-all duration-300 hover:scale-[1.03]">
            <span className="relative flex items-center gap-3 text-lg md:text-xl">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Join the Top 1% of Talent
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for graph nodes
const GraphNode = ({ top, left, delay, isInView, title, items, color }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
    transition={{ duration: 0.6, delay: delay, type: "spring" }}
    className="absolute w-40 md:w-52"
    style={{ top, left }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color} shadow-lg shadow-emerald-900/40`}></div>
      <h3 className="text-neutral-400 font-bold text-xs md:text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <ul className="text-neutral-500 text-xs space-y-1 pl-4 border-l border-neutral-800 font-medium">
      {items.map((item, idx) => <li key={idx}>• {item}</li>)}
    </ul>
  </motion.div>
);

export default IndustryGrowthSection;