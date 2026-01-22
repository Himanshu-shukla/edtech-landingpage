import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const IndustryGrowthSection = () => {
  return (
    <section className="w-full bg-[#0B1221] py-20 px-4 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 leading-tight max-w-4xl">
          Prepare Yourself For High-Paying Roles in <span className="text-yellow-400">$133 Billion Agentic AI Industry</span>
        </h2>

        {/* The Graph Visual - Recreated with CSS/SVG */}
        <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] bg-slate-900/50 rounded-xl border border-slate-800 p-8 mb-12 shadow-2xl backdrop-blur-sm">
          
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          {/* The Green Curve (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* The Curve Line */}
            <path 
              d="M 50,400 C 200,380 400,300 800,50" 
              className="stroke-green-500 stroke-[4] fill-none drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              vectorEffect="non-scaling-stroke"
            />
            {/* Arrow Head */}
            <polygon points="800,50 780,60 785,75" className="fill-green-500" />
          </svg>

          {/* Graph Data Points (Positioned absolutely) */}
          <div className="relative z-10 w-full h-full text-left">
            
            {/* Point 1: Perception AI */}
            <div className="absolute bottom-[20%] left-[5%] md:left-[10%]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                <h3 className="text-green-500 font-bold text-lg md:text-xl uppercase tracking-wider">Perception AI</h3>
              </div>
              <ul className="text-slate-400 text-xs md:text-sm space-y-1 pl-5 border-l border-slate-700">
                <li>Speech Recognition</li>
                <li>Deep Recsys</li>
                <li>Medical Imaging</li>
              </ul>
            </div>

            {/* Point 2: Generative AI */}
            <div className="absolute bottom-[40%] left-[35%] md:left-[40%]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                <h3 className="text-green-500 font-bold text-lg md:text-xl uppercase tracking-wider">Generative AI</h3>
              </div>
              <ul className="text-slate-400 text-xs md:text-sm space-y-1 pl-5 border-l border-slate-700">
                <li>Digital Marketing</li>
                <li>Content Creation</li>
              </ul>
            </div>

            {/* Point 3: Agentic AI (Highlighted) */}
            <div className="absolute top-[20%] right-[15%] md:right-[20%]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white] animate-pulse"></div>
                <h3 className="text-white font-extrabold text-xl md:text-2xl uppercase tracking-wider text-shadow-glow">Agentic AI</h3>
              </div>
              <ul className="text-slate-300 text-sm md:text-base font-medium space-y-1 pl-5 border-l-2 border-white">
                <li>Coding Assistant</li>
                <li>Customer Service</li>
                <li>Patient Care</li>
              </ul>
            </div>

             {/* Point 4: Physical AI (Top Right) */}
             <div className="absolute top-[5%] right-[2%] opacity-60">
              <h3 className="text-green-600 font-bold text-sm uppercase tracking-wider mb-1">Physical AI</h3>
              <p className="text-slate-500 text-xs">Self-Driving Cars</p>
            </div>

          </div>
        </div>

        {/* Bottom Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center">
          Start With 2-Day 10x Agentic AI Automation Bootcamp
        </h3>

        {/* CTA Button */}
        <button className="bg-[#D91818] hover:bg-red-700 text-white py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(217,24,24,0.5)] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl font-bold uppercase tracking-wide">
          Register For <span className="line-through decoration-black/50 opacity-70 mx-1">$99</span> <span className="text-yellow-300">FREE</span> 2-Day Bootcamp Now
        </button>

      </div>
    </section>
  );
};

export default IndustryGrowthSection;