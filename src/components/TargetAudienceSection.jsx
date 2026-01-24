import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, ArrowRight, Sparkles, Zap, Building2 } from 'lucide-react';

const TargetAudienceSection = () => {
  const audienceList = [
    {
      role: "Strategic Business Leaders",
      description: "Founders & Ops heads ready to deploy autonomous agents and reclaim 40+ hours of team bandwidth weekly.",
      icon: <Building2 className="w-4 h-4 text-emerald-400" />
    },
    {
      role: "Forward-Thinking Developers",
      description: "Engineers looking to move beyond basic CRUD apps to building self-reasoning agentic architectures.",
      icon: <Bot className="w-4 h-4 text-blue-400" />
    },
    {
      role: "High-Ticket AI Consultants",
      description: "Freelancers aiming to stop selling hours and start selling high-value, production-ready AI code snippets.",
      icon: <Zap className="w-4 h-4 text-yellow-400" />
    },
    {
      role: "Career Pivoters (SDE 2/3)",
      description: "Professionals targeting 6-figure roles in the emerging AI Solution Architect and Agentic Engineering job market.",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />
    }
  ];

  // Updated images with more professional, high-tech context
  const images = [
    { label: "Enterprise Automation", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop", colSpan: "md:col-span-2", height: "h-64" },
    { label: "Agent Architecture", src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", colSpan: "md:col-span-1", height: "h-48" },
    { label: "Elite Upskilling", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop", colSpan: "md:col-span-1", height: "h-48" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-neutral-950 overflow-hidden font-sans">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>Engineered for Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Is Your Business <br className="hidden md:block" /> Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Autonomy?</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {audienceList.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-emerald-500/50 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-lg text-white block mb-1">
                    {item.role}
                  </span>
                  <span className="text-neutral-400 text-base leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Shimmer CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="group relative inline-flex h-16 w-full md:w-auto items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02]">
              <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
              <div className="relative flex flex-col items-center justify-center">
                <span className="flex items-center gap-2 font-bold text-white text-lg md:text-xl">
                  Explore Agentic Solutions <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs md:text-sm font-medium text-emerald-100/80 mt-1">
                  Courses & Enterprise Deployment
                </span>
              </div>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
        >
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${img.colSpan} ${img.height} relative group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl`}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                <div className="translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    {img.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;