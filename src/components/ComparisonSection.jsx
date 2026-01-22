import React from 'react';
import { XCircle, Smile } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      bad: "Endless theory, piles of textbooks 📚",
      good: (
        <>
          Hands-on, real-world projects that{" "}
          <span className="font-bold italic text-orange-900">empower your career</span> 🛠️
        </>
      ),
    },
    {
      bad: "Memorizing formulas without context 🧠",
      good: (
        <>
          Simplified tools that boost productivity,{" "}
          <span className="font-bold italic text-orange-900">not just tasks</span> 🚀
        </>
      ),
    },
    {
      bad: "Months of coding before you're ready to work 💻",
      good: (
        <>
          Build advanced analytics{" "}
          <span className="font-bold italic text-orange-900">in minutes, not months</span> ⏱️
        </>
      ),
    },
    {
      bad: "Years spent just to land junior roles 🕰️",
      good: (
        <>
          Become job-ready in 90 days{" "}
          <span className="font-bold italic text-orange-900">with real skills</span> 💼
        </>
      ),
    },
    {
      bad: "Low-paying jobs with no clear growth 📉",
      good: (
        <>
          Direct access to{" "}
          <span className="font-bold italic text-orange-900">six-figure career opportunities</span> 💰
        </>
      ),
    },
    {
      bad: "Limited job support, hoping someone will help 🤷‍♂️",
      good: (
        <>
          Real-time placement support with{" "}
          <span className="font-bold italic text-orange-900">expert guidance</span> 🗺️
        </>
      ),
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-slate-50 font-sans overflow-hidden">
      {/* Background Grid Pattern (Consistent with theme) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-2 leading-tight">
            The Fast Track to High-Paying
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 uppercase tracking-wide">
            Agentic AI Careers
          </h2>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-10">
          
          {/* Table Header */}
          <h3 className="text-center text-lg md:text-xl font-bold text-slate-700 mb-8">
            Traditional Methods vs. Agentic AI-Powered Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative">
            
            {/* Vertical Divider (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            {/* Column Headers */}
            <div className="mb-2 md:mb-4">
              <div className="bg-purple-100 text-purple-700 font-bold text-center py-3 rounded-lg border border-purple-200 shadow-sm">
                Outdated Approach
              </div>
            </div>
            
            <div className="mb-2 md:mb-4">
              <div className="bg-orange-100 text-orange-800 font-bold text-center py-3 rounded-lg border border-orange-200 shadow-sm">
                Agentic AI-Powered Approach
              </div>
            </div>

            {/* Rows Mapping */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={index}>
                
                {/* Left Side (Bad) */}
                <div className="flex items-center gap-3 group">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <div className="flex-1 bg-purple-50 border border-purple-200 text-slate-700 p-4 rounded-lg text-sm md:text-base leading-snug shadow-sm">
                    {row.bad}
                  </div>
                </div>

                {/* Right Side (Good) */}
                <div className="flex items-center gap-3 md:flex-row-reverse group">
                  {/* Note: Icon is on the right for desktop visual balance, or can be left. 
                      Based on image, icon is to the RIGHT of the box. */}
                   <div className="w-8 h-8 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Smile className="w-6 h-6 text-yellow-900" strokeWidth={2.5} />
                   </div>
                  <div className="flex-1 bg-orange-50 border border-orange-200 text-orange-900 p-4 rounded-lg text-sm md:text-base leading-snug shadow-sm">
                    {row.good}
                  </div>
                </div>

              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;