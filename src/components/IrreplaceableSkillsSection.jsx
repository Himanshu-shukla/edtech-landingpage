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
    // Background changed to neutral-50 for a clean light look
<section className="relative pt-6 pb-24 px-4 bg-neutral-50 font-sans overflow-hidden border-t border-neutral-100">
      
      {/* Light Mode Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
      
      {/* Background Glow: Adjusted emerald opacity for light theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge: Soft emerald background with dark green text */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold mb-6 shadow-sm">
            <Cpu className="w-4 h-4" />
            <span>Your 2-Day Transformation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 leading-tight tracking-tight">
            From "AI Curious" to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              AI Consultant.
            </span>
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            This isn't just a course; it's a career pivot. Here is the exact trajectory you will follow during and after the bootcamp.
          </p>
        </motion.div>

        <div className="relative pl-4 md:pl-0">
          {/* Timeline Line: Light gray for light mode */}
          <div className="absolute left-[38px] md:left-[2.1rem] top-8 bottom-8 w-px bg-neutral-200"></div>
          
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
                {/* Step Circle: White with soft emerald shadow */}
                <div className="absolute left-0 md:left-2 top-0 md:top-6 w-12 h-12 md:w-14 md:h-14 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:border-emerald-400 group-hover:shadow-emerald-100 transition-all duration-300">
                  <span className="text-emerald-600 group-hover:text-cyan-600 transition-colors">{benefit.icon}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4 mt-2 md:mt-6 flex items-center gap-3">
                  <span className="text-emerald-700 font-black text-xs md:text-sm bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 uppercase tracking-tighter shadow-sm">Step 0{benefit.id}</span>
                  {benefit.title}
                </h3>
                
                {/* Content Card: Pure white with classic shadow */}
                <motion.div whileHover={{ y: -5 }} className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm group-hover:border-emerald-200 group-hover:shadow-xl transition-all duration-300">
                  <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-medium">{benefit.description}</p>
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