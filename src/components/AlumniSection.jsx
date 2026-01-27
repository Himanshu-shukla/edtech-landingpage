import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Building2 } from 'lucide-react';

const AlumniSection = () => {
  const row1 = [
    { name: "Zomato" }, { name: "Swiggy" }, { name: "Cred" }, 
    { name: "Razorpay" }, { name: "Zerodha" }, { name: "Flipkart" },
    { name: "Myntra" }, { name: "Paytm" }
  ];

  const row2 = [
    { name: "TCS" }, { name: "Infosys" }, { name: "Wipro" }, 
    { name: "Accenture" }, { name: "Deloitte" }, { name: "HDFC Bank" }, 
    { name: "ICICI" }, { name: "Reliance" }
  ];

  return (
    <section className="relative py-24 bg-neutral-950 font-sans overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
            <Building2 className="w-3 h-3" />
            <span>Trusted Ecosystem</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Join 16,000+ professionals from <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">
              India's top companies.
            </span>
          </h2>
          <p className="mt-6 text-neutral-500 text-lg font-medium max-w-2xl mx-auto">
            Our students are automating workflows and leading AI initiatives at these industry giants.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 pt-10"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-emerald-500" />
            <span className="text-neutral-400 font-bold text-sm tracking-widest uppercase">
              Community: <span className="text-white">16,000+ Alumni</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-neutral-400 font-bold text-sm tracking-widest uppercase">
              Rating: <span className="text-white">4.8/5 Average</span>
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="flex w-full overflow-hidden select-none">
      <div 
        className={`flex w-max items-center justify-around gap-24 px-12 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {[...items, ...items].map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="flex flex-col items-center justify-center gap-2 group cursor-default">
            <span className="text-3xl md:text-4xl font-black text-neutral-800 transition-all duration-300 group-hover:text-emerald-500/50 tracking-tighter uppercase whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;