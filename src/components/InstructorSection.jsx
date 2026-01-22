import React from 'react';
import { Check } from 'lucide-react';

const InstructorSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-50 font-sans relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Red Banner */}
        <div className="bg-[#D91818] text-white text-center py-3 px-8 rounded-t-xl md:rounded-full shadow-lg mb-[-20px] relative z-20 max-w-2xl w-full mx-auto transform hover:-translate-y-1 transition-transform cursor-pointer">
          <p className="font-bold text-sm md:text-base leading-tight">
            Don't Get Replaced By AI, Grow 10x With AI
            <br className="md:hidden"/> <span className="underline decoration-white/50 underline-offset-2">Register Into AI Transformation Bootcamp For FREE!</span>
          </p>
        </div>

        {/* Main Dark Card */}
        <div className="w-full bg-gradient-to-br from-[#050a18] to-[#1e2f65] rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-900/30 relative">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="p-8 md:p-12 lg:p-16">
            
            {/* Section Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12 tracking-tight">
              Who You'll Be Learning From
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
              
              {/* Left Column: Image */}
              <div className="flex-shrink-0 relative group">
                <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800">
                   {/* Replace with actual instructor image */}
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Ankit Maheshwari" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                {/* Subtle shadow beneath image */}
                <div className="absolute -bottom-6 left-4 right-4 h-4 bg-black/40 blur-xl rounded-full"></div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 text-left">
                
                <h4 className="text-blue-300 font-bold tracking-widest text-sm uppercase mb-2">
                  MEET YOUR COACH
                </h4>
                
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase italic tracking-tighter">
                  ANKIT MAHESHWARI
                </h3>
                
                <p className="text-slate-300 text-xs md:text-sm font-medium mb-8 border-l-2 border-yellow-500 pl-3">
                  AI Entrepreneur of the Year 2024 | Serial Tech Founder | Data Science Pioneer
                </p>

                {/* Achievements List */}
                <ul className="space-y-4">
                  <ListItem>
                    Led AI & Data Innovations Recognized By <span className="text-yellow-400 font-bold">NASSCOM's Top 50 Emerging IT Companies</span>
                  </ListItem>
                  
                  <ListItem>
                    Named Among <span className="text-yellow-400 font-bold">India's Top 30 Young Entrepreneurs</span> By BusinessWorld
                  </ListItem>
                  
                  <ListItem>
                    Founder Of <span className="text-yellow-400 font-bold">1to10x</span>, Sharing Battle-Tested AI Strategies & Career Insights
                  </ListItem>
                  
                  <ListItem>
                    Expert In <span className="text-yellow-400 font-bold">What Top Companies Seek In AI Professionals</span>
                  </ListItem>
                </ul>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

// Helper Component for List Items
const ListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0">
      <Check className="w-5 h-5 text-white" strokeWidth={3} />
    </div>
    <p className="text-slate-200 text-sm md:text-base leading-snug">
      {children}
    </p>
  </li>
);

export default InstructorSection;