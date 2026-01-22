import React from 'react';
import { Settings, TrendingUp, Bot } from 'lucide-react';

const WhyAgenticAI = () => {
  return (
    <div className="w-full bg-slate-50 py-12 px-4 flex justify-center">
      {/* Main Dark Container */}
      <div className="bg-[#050a18] rounded-[2.5rem] p-8 md:p-16 max-w-6xl w-full relative overflow-hidden shadow-2xl">
        
        {/* Background Gradients for subtle depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-8 tracking-tight">
            Why you must get Agentic AI skills RIGHT NOW
          </h2>

          {/* Subtitle Banner */}
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg py-3 px-6 mb-12 backdrop-blur-sm">
            <p className="text-blue-100 font-medium text-center">
              The AI Revolution is Here – Adapt or Be Left Behind.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
            
            <FeatureCard 
              number="1"
              icon={<Settings className="w-10 h-10 text-white" strokeWidth={1.5} />}
              text={
                <>
                  40% of all jobs could be automated by 2035 (World Economic Forum)
                </>
              }
            />

            <FeatureCard 
              number="2"
              icon={<TrendingUp className="w-10 h-10 text-white" strokeWidth={1.5} />}
              text={
                <>
                  Agentic AI-skilled professionals & freelancers are getting 2-3x salary hike & high-paying clients
                </>
              }
            />

            <FeatureCard 
              number="3"
              icon={<Bot className="w-10 h-10 text-white" strokeWidth={1.5} />}
              text={
                <>
                  AI-powered automation services are in HUGE demand—businesses are willing to pay premium for solutions
                </>
              }
            />

          </div>

          {/* CTA Button */}
          <button className="w-full md:w-auto bg-[#D91818] hover:bg-red-700 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-lg shadow-[0_0_20px_rgba(217,24,24,0.4)] transform hover:-translate-y-1 transition-all duration-300">
            Yes, I Want To Master Agentic AI Automation
          </button>

        </div>
      </div>
    </div>
  );
};

// Helper Card Component
const FeatureCard = ({ number, icon, text }) => (
  <div className="bg-[#1e2f65] rounded-xl p-8 relative flex flex-col items-start min-h-[220px] hover:bg-[#253a7a] transition-colors duration-300 border border-blue-800/30 shadow-lg">
    {/* Number Badge */}
    <div className="absolute top-6 right-6 bg-blue-100/10 text-white font-bold w-8 h-8 flex items-center justify-center rounded-md text-sm backdrop-blur-md">
      {number}
    </div>
    
    {/* Icon */}
    <div className="mb-6 p-2 border-2 border-dashed border-blue-400/30 rounded-lg">
      {icon}
    </div>
    
    {/* Text */}
    <p className="text-white font-medium leading-relaxed text-left text-lg">
      {text}
    </p>
  </div>
);

export default WhyAgenticAI;