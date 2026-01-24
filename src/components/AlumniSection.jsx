import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe } from 'lucide-react';

const AlumniSection = () => {
  // 2026 Updated Enterprise Roster
  const row1 = [
    { name: "Zomato", width: 140 }, // Direct partner reference
    { name: "Google Cloud", width: 120 },
    { name: "Bain & Co.", width: 130 },
    { name: "Sony", width: 100 },
    { name: "Microsoft", width: 120 },
    { name: "Accenture", width: 130 },
    { name: "Bloomberg", width: 130 },
    { name: "Keyrus", width: 110 },
  ];

  const row2 = [
    { name: "Deutsche Bank", width: 140 },
    { name: "S&P Global", width: 130 },
    { name: "Goldman Sachs", width: 140 },
    { name: "Capgemini", width: 120 },
    { name: "NTT DATA", width: 120 },
    { name: "AWS", width: 100 },
    { name: "Salesforce", width: 130 },
    { name: "Deloitte", width: 120 },
  ];

  return (
    <section className="relative py-24 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Ambient Glows - High-tier Emerald palette */}
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
            Our frameworks power autonomous workflows for the world's most demanding enterprises and innovative startups.
          </p>
        </motion.div>

        {/* Marquee Container with Gradient Mask */}
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
    <div className="flex w-full overflow-hidden">
      <div 
        className={`flex w-max items-center justify-around gap-20 px-10 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {[...items, ...items].map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`} 
            className="flex flex-col items-center justify-center gap-2 group transition-all duration-500"
          >
            <img 
              src={`https://placehold.co/${brand.width * 2}x80/0a0a0a/ffffff?text=${encodeURIComponent(brand.name)}&font=montserrat`}
              alt={`${brand.name} logo`}
              className="max-h-8 md:max-h-9 w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
            {/* Subtle glow under logo on hover */}
            <div className="w-full h-[1px] bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-all duration-500 blur-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;