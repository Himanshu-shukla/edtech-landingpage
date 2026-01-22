import React from 'react';
import { Map, Library, Users, FileText } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      id: 1,
      label: "BONUS 1",
      text: "Roadmap to Becoming a 10X Agentic AI Specialist",
      icon: <Map className="w-32 h-32 text-cyan-400" strokeWidth={1} />,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 2,
      label: "BONUS 2",
      text: "Comprehensive resource library on essential Agentic AI topics",
      icon: <Library className="w-32 h-32 text-purple-400" strokeWidth={1} />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      label: "BONUS 3",
      text: "Access to our private community of Agentic AI pioneers",
      icon: <Users className="w-32 h-32 text-emerald-400" strokeWidth={1} />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 4,
      label: "BONUS 4",
      text: "Case studies from industry experts",
      icon: <FileText className="w-32 h-32 text-yellow-400" strokeWidth={1} />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Optional Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
          Unlock These Exclusive Bonuses
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="bg-[#0B1221] rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              
              {/* Background Glow Effect */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${bonus.gradient} rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity`}></div>

              {/* Bonus Label */}
              <div className="relative z-10 mb-6">
                <span className="text-white font-bold tracking-widest text-sm md:text-base uppercase bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  {bonus.label}
                </span>
              </div>

              {/* Icon / Illustration Placeholder */}
              <div className="relative z-10 mb-8 transform group-hover:scale-105 transition-transform duration-500">
                {bonus.icon}
              </div>

              {/* Description Text */}
              <p className="relative z-10 text-yellow-400 font-bold text-lg md:text-xl leading-relaxed max-w-sm">
                {bonus.text}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BonusSection;