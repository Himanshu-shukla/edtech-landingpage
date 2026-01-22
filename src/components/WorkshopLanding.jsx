import React from 'react';
import { Calendar, Clock, Globe, Languages, CheckCircle2 } from 'lucide-react';

const WorkshopLanding = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Subtle Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/50 via-white/20 to-blue-50/50 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-blue-900 font-bold text-lg md:text-xl mb-4 tracking-wide uppercase">
            Future-Proof Your Career Turn AI Skills Into Income: Freelance, Automate and Scale Your Own Business.
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Launch a Six-Figure AI Side Hustle <br className="hidden md:block" />
            in 4 Months — Without a Tech Background
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Get hands-on training, real client-ready skills, and unlock income with zero fluff and zero code confusion.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
          
          {/* Left Column: Image & Logistics */}
          <div className="flex flex-col gap-6">
            {/* Speaker Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-900 aspect-video relative group">
              <img 
                src="/api/placeholder/600/400" 
                alt="Speaker presenting at workshop" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Logistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard 
                icon={<Calendar className="w-6 h-6 text-blue-600" />}
                label="Date"
                value="12th-13th July"
              />
              <InfoCard 
                icon={<Clock className="w-6 h-6 text-blue-600" />}
                label="Time"
                value={<div>11 AM EDT<br/>4 PM BST</div>}
              />
              <InfoCard 
                icon={<Globe className="w-6 h-6 text-blue-600" />}
                label="Platform"
                value="Zoom"
              />
              <InfoCard 
                icon={<Languages className="w-6 h-6 text-blue-600" />}
                label="Language"
                value="English"
              />
            </div>
          </div>

          {/* Right Column: Benefits & CTA */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0B1221] rounded-2xl p-8 shadow-2xl border border-slate-800 text-white">
              <div className="space-y-8">
                
                <BenefitItem>
                  Accelerate Your AI Career Path <span className="text-yellow-400 font-bold">6X Faster Using Cutting-Edge Agentic Tools</span>
                </BenefitItem>

                <BenefitItem>
                  Develop Practical <span className="text-yellow-400 font-bold">Agentic AI Skills</span> That Are In Extreme Demand
                </BenefitItem>

                <BenefitItem>
                  Get Personalized Guidance To <span className="text-yellow-400 font-bold">Become Job-Ready For SIX-FIGURE Agentic AI Roles</span>
                </BenefitItem>

                <BenefitItem>
                  Build An <span className="text-yellow-400 font-bold">Interview-Winning Portfolio</span> Of Autonomous AI Agents
                </BenefitItem>

              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#D91818] hover:bg-red-700 text-white text-xl font-bold py-6 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Yes, I Want To Master Agentic AI Automation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component for Info Cards (Date, Time, etc)
const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
    <div className="bg-blue-50 p-2 rounded-lg">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</p>
      <div className="text-slate-900 font-bold leading-tight">{value}</div>
    </div>
  </div>
);

// Helper Component for Benefit List Items
const BenefitItem = ({ children }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 flex-shrink-0">
      <div className="bg-blue-600/20 p-1 rounded-full">
        <CheckCircle2 className="w-6 h-6 text-blue-400 fill-blue-900/50" />
      </div>
    </div>
    <p className="text-slate-200 text-lg leading-relaxed border-b border-slate-800/50 pb-4 w-full">
      {children}
    </p>
  </div>
);

export default WorkshopLanding;