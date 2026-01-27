import React from 'react';
import { motion } from 'framer-motion';
import { Network, Terminal, ShieldCheck, Cpu } from 'lucide-react';

const IrreplaceableSkillsSection = () => {
  const benefitsData = [
    {
      id: 1,
      icon: <Network className="w-5 h-5" />,
      title: "Master the Tools",
      description: "Stop watching from the sidelines. Get hands-on mastery of the Agentic Stack: n8n, Make.com, Vapi, and OpenAI. You will leave with working agents on your own laptop."
    },
    {
      id: 2,
      icon: <Terminal className="w-5 h-5" />,
      title: "Automate Your Work",
      description: "Identify the high-value tasks in your job that eat up your time. Build custom agents to handle them, freeing you up for strategic work and making you the top performer."
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Launch Your Agency",
      description: "Take the 'Scale Blueprint' home. Use our pricing models, proposal templates, and delivery SOPs to start closing ₹50k+ automation projects within 30 days."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>Your 2-Day Transformation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            From "AI Curious" to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              AI Consultant.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            This isn't just a course; it's a career pivot. Here is the exact trajectory you will follow during and after the bootcamp.
          </p>
        </motion.div>

        <div className="relative pl-4 md:pl-0">
          <div className="absolute left-[38px] md:left-[2.1rem] top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-teal-500/50 to-transparent"></div>
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
                <div className="absolute left-0 md:left-2 top-0 md:top-6 w-12 h-12 md:w-14 md:h-14 bg-neutral-900 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] z-20 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300">
                  <span className="text-emerald-400 group-hover:text-cyan-300 transition-colors">{benefit.icon}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2 md:mt-6 flex items-center gap-3">
                  <span className="text-emerald-500 font-black text-xs md:text-sm bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20 uppercase tracking-tighter">Step 0{benefit.id}</span>
                  {benefit.title}
                </h3>
                <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-neutral-800 shadow-xl group-hover:border-emerald-500/30 group-hover:bg-neutral-800/80 transition-all duration-300">
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed">{benefit.description}</p>
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