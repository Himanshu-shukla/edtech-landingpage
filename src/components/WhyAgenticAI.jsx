import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Bot, Rocket, ArrowRight } from 'lucide-react';

const WhyAgenticAI = () => {
  return (
<section className="relative w-full bg-neutral-950 py-12 md:py-24 px-4 flex justify-center overflow-hidden font-sans">      
      {/* Ambient Space Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2.5rem] p-8 md:p-16 max-w-6xl w-full shadow-2xl"
      >
        <div className="flex flex-col items-center">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wide uppercase mb-6">
              <Rocket className="w-4 h-4" />
              <span>Future-Proof Your Career</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight leading-tight max-w-3xl">
              Why the industry demands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Agentic Orchestrators.</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
            
            <SpotlightCard 
              delay={0.1}
              number="01"
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              text={
                <>
                  <span className="text-white font-bold">Beyond Chatbots:</span> The market is flooded with basic AI wrappers. Real value lies in <span className="text-white font-bold">Autonomous Agents</span> that can reason, plan, and execute complex business tasks without human help.
                </>
              }
            />

            <SpotlightCard 
              delay={0.2}
              number="02"
              icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
              text={
                <>
                  <span className="text-white font-bold">Data Driven Decisions:</span> AI without data is hallucination. We teach you the <span className="text-white font-bold">Data Science & Analytics</span> foundation required to feed agents the right information.
                </>
              }
            />

            <SpotlightCard 
              delay={0.3}
              number="03"
              icon={<Bot className="w-8 h-8 text-emerald-400" />}
              text={
                <>
                  <span className="text-white font-bold">Career Arbitrage:</span> "Prompt Engineers" are being fired. <span className="text-white font-bold">Agentic Developers</span> are being hired at 30-50% salary premiums to build the enterprise workforce of tomorrow.
                </>
              }
            />

          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
              <span className="relative flex items-center gap-2 font-bold text-white text-lg md:text-xl">
                Start Your Transformation
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

// Sub-component: Spotlight Card
const SpotlightCard = ({ icon, text, number, delay }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-start min-h-[260px] p-8 overflow-hidden bg-neutral-900 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.1), transparent 40%)`,
        }}
      />
      <span className="absolute top-6 right-6 font-black text-4xl text-neutral-800/80 select-none">{number}</span>
      <div className="relative z-10 mb-6 p-3 bg-neutral-800/50 rounded-xl border border-neutral-700/50 group-hover:bg-neutral-800 transition-colors duration-300">
        {icon}
      </div>
      <p className="relative z-10 text-neutral-400 leading-relaxed text-base md:text-lg">{text}</p>
    </motion.div>
  );
};

export default WhyAgenticAI;