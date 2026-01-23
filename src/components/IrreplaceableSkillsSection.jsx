import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

const IrreplaceableSkillsSection = () => {
  // Enhanced Data Source with Icons
  const benefitsData = [
    {
      id: 1,
      icon: <Banknote className="w-5 h-5" />,
      title: "Bigger Paychecks & Promotions",
      description: "AI-skilled professionals get salary hikes, promotions, and access to bigger projects while traditional roles stagnate."
    },
    {
      id: 2,
      icon: <Rocket className="w-5 h-5" />,
      title: "Level Up in Your Career",
      description: "Automate mundane tasks, boost your efficiency by 10x, and become the go-to strategic expert in your company."
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Future-Proof Job Security",
      description: "While others worry about automation, you will be the one architecting, building, and managing the AI systems."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Aceternity Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The AI Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Why AI Skills Make You <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Irreplaceable & Highly Paid
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            AI is transforming industries fast. Those who adapt now will secure top roles. Those who don't will be left behind.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative pl-4 md:pl-0">
          
          {/* Vertical Connecting Line (Timeline) */}
          <div className="absolute left-[38px] md:left-[2.1rem] top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent"></div>

          <div className="flex flex-col gap-16 md:gap-20">
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={benefit.id} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group pl-8 md:pl-20"
              >
                
                {/* Timeline Node (Replaces the old Number Circle) */}
                <div className="absolute left-0 md:left-2 top-0 md:top-6 w-12 h-12 md:w-14 md:h-14 bg-neutral-900 border border-indigo-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] z-20 group-hover:border-indigo-400 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300">
                  <span className="text-indigo-400 group-hover:text-cyan-300 transition-colors">
                    {benefit.icon}
                  </span>
                </div>

                {/* The "Blue Pill" Header -> Modernized into a Gradient Label */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2 md:mt-6 flex items-center gap-3">
                  <span className="text-indigo-500 font-black text-sm md:text-base bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                    Step {benefit.id}
                  </span>
                  {benefit.title}
                </h3>

                {/* The Content Card (Glassmorphism) */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-neutral-800 shadow-xl group-hover:border-indigo-500/30 group-hover:bg-neutral-800/80 transition-all duration-300"
                >
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </motion.div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IrreplaceableSkillsSection;