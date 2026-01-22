import React from 'react';

const IrreplaceableSkillsSection = () => {
  // JSON Data Source
  const benefitsData = [
    {
      id: 1,
      title: "Bigger Paychecks & Promotions",
      description: "AI-Skilled Professionals Get Salary Hikes, Promotions, And Access To Bigger Projects."
    },
    {
      id: 2,
      title: "Use AI to Level Up in Your Career",
      description: "Automate Tasks, Boost Efficiency, And Become The Go-To Expert In Your Company."
    },
    // You can easily add more items here
    {
      id: 3,
      title: "Future-Proof Your Job Security",
      description: "While others worry about automation, you will be the one building and managing the AI systems."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#EEF2FF] font-sans flex flex-col items-center overflow-x-hidden">
      
      {/* Main Headlines */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Why AI Skills Make You <span className="text-[#4355ff]">Irreplaceable & Increase</span> Your Income
        </h2>
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          AI Is Transforming Industries Fast. The Ones Who Learn AI Now Will Secure Better Jobs, Higher Pay, And More Career Opportunities. The Ones Who Don't Will Fall Behind.
        </p>
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col gap-10 w-full max-w-4xl pl-4 md:pl-0">
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className="relative group">
            
            {/* The Blue Pill Header (Overlapping the Card) */}
            <div className="relative z-20 inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-600 rounded-full p-1.5 pr-8 shadow-xl transform md:-translate-x-8 translate-x-[-10px] translate-y-6">
              
              {/* Number Circle */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
                <span className="text-slate-900 font-bold text-xl">{benefit.id}</span>
              </div>
              
              {/* Header Text */}
              <span className="ml-4 text-white font-extrabold text-lg md:text-xl tracking-wide">
                {benefit.title}
              </span>
            </div>

            {/* The White Content Card */}
            <div className="bg-white rounded-2xl p-8 pt-12 md:pl-16 md:pt-10 shadow-lg border border-slate-200/60 relative z-10 w-full hover:shadow-xl transition-all duration-300 hover:border-blue-200">
              <p className="text-slate-900 font-semibold text-lg md:text-xl leading-relaxed mt-2 md:mt-0">
                {benefit.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default IrreplaceableSkillsSection;