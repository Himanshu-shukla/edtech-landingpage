import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Zap, ShieldCheck, Target } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "Is this bootcamp for developers only?",
      icon: <Target className="w-4 h-4 text-emerald-400" />,
      answer: "No. We cater to two tracks: Business Leaders who need to orchestrate 'Agentic Workforces' to cut costs (like Enterprises), and Tech Professionals who want to master LangGraph, CrewAI, and MCP servers. We bridge the gap between business logic and autonomous execution."
    },
    {
      id: 2,
      question: "How is this different from a ChatGPT or GenAI course?",
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
      answer: "Generative AI is about 'content'; Agentic AI is about 'action.' In this bootcamp, you don't just learn to prompt—you learn to build autonomous systems that can reason, plan, use tools, and solve multi-step enterprise workflows without human micromanagement."
    },
    {
      id: 3,
      question: "What is the real-world ROI for my career or business?",
      icon: <ShieldCheck className="w-4 h-4 text-blue-400" />,
      answer: "For professionals, demand for 'AI Orchestrators' has surged by 40% in 2026, with a 50% supply gap. For businesses, agentic automation typically reclaims 20-120 hours per employee annually. You’re learning to build the high-margin systems that companies are currently hiring for at $100k+ salaries."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Ambient Glow - Updated to Emerald to match the 2026 tech palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Architecture & Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="text-neutral-400 text-lg font-medium">
            Everything you need to know about joining the Agentic Era.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-neutral-900 border-emerald-500/30 shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]' 
                    : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-colors duration-300 ${isOpen ? 'text-emerald-400' : 'text-neutral-500'}`}>
                      {item.icon}
                    </div>
                    <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                      isOpen ? 'text-emerald-400' : 'text-white group-hover:text-neutral-200'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
                        : 'bg-neutral-800 border-neutral-700 text-neutral-400 group-hover:bg-neutral-700'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer Content with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base font-medium">
                        <div className="pt-2 border-t border-neutral-800/50">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;