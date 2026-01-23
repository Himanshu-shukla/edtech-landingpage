import React from 'react';
import { motion } from 'framer-motion';

const AlumniSection = () => {
  // Splitting into two rows for the dual-directional scroll effect
  const row1 = [
    { name: "Bain & Company", width: 140 },
    { name: "Sony", width: 100 },
    { name: "FedEx", width: 100 },
    { name: "Microsoft", width: 120 },
    { name: "Kraft", width: 90 },
    { name: "Bloomberg", width: 130 },
    { name: "Delta", width: 100 },
    { name: "Keyrus", width: 100 },
  ];

  const row2 = [
    { name: "Uptime AI", width: 110 },
    { name: "NTT DATA", width: 120 },
    { name: "Solytics", width: 110 },
    { name: "S&P Global", width: 120 },
    { name: "Deutsche Bank", width: 140 },
    { name: "Hanu", width: 90 },
    { name: "Capgemini", width: 120 },
    { name: "Goldman Sachs", width: 130 },
  ];

  return (
    <section className="relative py-24 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-indigo-500/10 blur-[80px] rounded-[100%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neutral-500 font-medium tracking-widest text-sm uppercase mb-3 block">
            Where Our Alumni Land
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Trusted by global <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">industry leaders.</span>
          </h2>
        </motion.div>

        {/* Marquee Container with Gradient Mask */}
        <div className="relative flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          
          {/* Row 1 - Scrolling Left */}
          <MarqueeRow items={row1} direction="left" />

          {/* Row 2 - Scrolling Right */}
          <MarqueeRow items={row2} direction="right" />

        </div>
        
      </div>
    </section>
  );
};

// Reusable Marquee Row Component
const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <div 
        className={`flex w-max items-center justify-around gap-16 px-8 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {/* We map twice to create the seamless infinite loop */}
        {[...items, ...items].map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`} 
            className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {/* Note: Updated placeholder colors for dark mode */}
            <img 
              src={`https://placehold.co/${brand.width * 2}x80/0a0a0a/ffffff?text=${encodeURIComponent(brand.name)}&font=montserrat`}
              alt={`${brand.name} logo`}
              className="max-h-8 md:max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;