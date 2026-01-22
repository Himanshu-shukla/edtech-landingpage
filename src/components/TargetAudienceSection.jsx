import React from 'react';
import { Check } from 'lucide-react';

const TargetAudienceSection = () => {
  const audienceList = [
    {
      role: "Freelancers",
      description: "Who Want To Sell AI Automation Services & Make Money Online"
    },
    {
      role: "Employees",
      description: "Looking To Add AI Skills & Get Higher-Paying Jobs"
    },
    {
      role: "Business Owners",
      description: "Who Want To Automate Tasks & Save Time/Money"
    },
    {
      role: "Career Changers",
      description: "Who Want To Start An AI-Powered Income Stream"
    }
  ];

  const images = [
    { label: "FREELANCERS", src: "https://1to10x.ai/wp-content/uploads/2025/03/Group-1000007655-1.png" },
    { label: "EMPLOYEES", src: "/api/placeholder/400/300" },
    { label: "BUSINESS OWNERS", src: "/api/placeholder/400/300" },
    { label: "CAREER CHANGERS", src: "/api/placeholder/400/300" }
  ];

  return (
    <section className="relative w-full py-16 px-4 md:px-8 bg-slate-50 overflow-hidden font-sans">
      
      {/* Background Grid Pattern (Consistent with other sections) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50/80 via-white/50 to-blue-50/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who is This Bootcamp For?
          </h2>

          <div className="space-y-6">
            {audienceList.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Custom Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center shadow-md">
                    <Check className="w-5 h-5 text-white stroke-[3]" />
                  </div>
                </div>
                
                {/* Text */}
                <p className="text-slate-700 text-lg leading-snug">
                  <span className="font-extrabold text-slate-900 block md:inline md:mr-1">
                    {item.role}
                  </span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full md:w-auto bg-[#D91818] hover:bg-red-700 text-white py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 mt-4 text-center">
            <span className="block text-lg md:text-xl font-bold">
              Yes, I Want To Future-Proof My Career
            </span>
            <span className="block text-xs md:text-sm font-medium opacity-90 mt-1">
              Register Into AI Transformation Bootcamp For FREE!
            </span>
          </button>
        </div>

        {/* Right Column: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Label */}
              <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                <span className="text-white font-bold text-sm md:text-base tracking-wider uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;