import React from 'react';
import { Megaphone, Cpu, Rocket } from 'lucide-react';

const CareerWarningSection = () => {
  return (
    <div className="min-h-[80vh] bg-[#EEF2FF] py-16 px-4 md:px-8 font-sans flex flex-col items-center justify-center">
      
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-slate-900 mb-12 tracking-tight">
        Your career is in danger
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Card 1: Breaking News */}
        <InfoCard 
          icon={<Megaphone className="w-16 h-16 text-red-500" strokeWidth={1.5} />}
          title="Breaking News"
        >
          <p className="text-slate-700 leading-relaxed">
            85 million jobs will be replaced by automation by 2025, but 97 million AI-driven jobs are emerging. <span className="font-extrabold text-slate-900">Will you adapt or be left behind?</span>
          </p>
        </InfoCard>

        {/* Card 2: AI Tech */}
        <InfoCard 
          icon={<Cpu className="w-16 h-16 text-indigo-500" strokeWidth={1.5} />}
          title="AI isn't just for tech professionals"
        >
          <p className="text-slate-700 leading-relaxed">
            Smart freelancers, coaches, consultants, and business owners are already <span className="font-extrabold text-slate-900">charging premium rates for AI-powered services.</span>
          </p>
        </InfoCard>

        {/* Card 3: Bootcamp */}
        <InfoCard 
          icon={<Rocket className="w-16 h-16 text-blue-600" strokeWidth={1.5} />}
          title="Join Our Free 2-Day AI Bootcamp"
        >
          <p className="text-slate-700 leading-relaxed">
            to get hands-on experience with AI tools, automation, and career strategies to <span className="font-extrabold text-slate-900">3X your earning potential.</span>
          </p>
        </InfoCard>

      </div>

      {/* CTA Button */}
      <button className="bg-[#D91818] hover:bg-red-700 text-white text-lg md:text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        Yes, I Want To Master Agentic AI Automation
      </button>

    </div>
  );
};

// Reusable Card Component
const InfoCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-300 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 h-full">
      <div className="mb-6 bg-slate-50 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-blue-700 font-bold text-xl mb-4 leading-tight">
        {title}
      </h3>
      <div className="text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

export default CareerWarningSection;