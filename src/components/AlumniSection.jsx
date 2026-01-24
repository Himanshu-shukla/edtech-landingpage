import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, CheckCircle } from 'lucide-react';

const AlumniSection = () => {
  // Strategic Enterprise Roster
  const row1 = [
    { name: "Zomato" }, // High-impact partner for Nugget systems
    { name: "Google Cloud" },
    { name: "Bain & Co." },
    { name: "Sony" },
    { name: "Microsoft" },
    { name: "Accenture" },
    { name: "Bloomberg" },
    { name: "Keyrus" },
  ];

  const row2 = [
    { name: "Deutsche Bank" },
    { name: "S&P Global" },
    { name: "Goldman Sachs" },
    { name: "Capgemini" },
    { name: "NTT DATA" },
    { name: "AWS" },
    { name: "Salesforce" },
    { name: "Deloitte" },
  ];

  return (
    <section className="relative py-24 bg-neutral-950 font-sans overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[150px] bg-emerald-500/5 blur-[100px] rounded-[100%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
            <ShieldCheck className="w-3 h-3" />
            <span>Enterprise Verified Ecosystem</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
            Trusted by the architects of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">
              global AI transformation.
            </span>
          </h2>
          <p className="mt-6 text-neutral-500 text-lg font-medium max-w-2xl mx-auto">
            Edtech Informative frameworks power autonomous workflows for the world's most demanding enterprises.
          </p>
        </motion.div>

        {/* Marquee Container with Masking */}
        <div className="relative flex flex-col gap-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          
          {/* Row 1 - Scrolling Left */}
          <MarqueeRow items={row1} direction="left" />

          {/* Row 2 - Scrolling Right */}
          <MarqueeRow items={row2} direction="right" />

        </div>

        {/* Global Statistics/Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-neutral-900 pt-10"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-emerald-500" />
            <span className="text-neutral-400 font-bold text-sm tracking-widest uppercase">
              Global Alumni Network: <span className="text-white">50+ Countries</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-neutral-400 font-bold text-sm tracking-widest uppercase">
              Project Success: <span className="text-white">99.8% Reliability</span>
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

// Reusable Marquee Row Component
const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="flex w-full overflow-hidden select-none">
      <div 
        className={`flex w-max items-center justify-around gap-24 px-12 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {/* Doubled items for seamless infinite loop */}
        {[...items, ...items].map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`} 
            className="flex flex-col items-center justify-center gap-2 group cursor-default"
          >
            <span className="text-2xl md:text-4xl font-black text-neutral-800 transition-all duration-300 group-hover:text-neutral-400 tracking-tighter uppercase whitespace-nowrap">
              {brand.name}
            </span>
            {/* Subtle glow under brand name on hover */}
            <div className="w-full h-[2px] bg-emerald-500/0 group-hover:bg-emerald-500/40 transition-all duration-500 blur-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;