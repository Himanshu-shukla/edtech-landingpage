import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Zap, ShieldCheck, Target, Minus } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "I'm a beginner. Can I really learn this?",
      icon: <Target className="w-5 h-5" />,
      answer: "Yes. Our Data Analyst & AI Certification starts from zero. We teach Python, SQL, and Excel from scratch before moving to advanced AI topics. For the Agentic Developer track, basic coding knowledge is recommended."
    },
    {
      id: 2,
      question: "How is this different from a ChatGPT course?",
      icon: <Zap className="w-5 h-5" />,
      answer: "ChatGPT is a tool; Agentic AI is a system. Most courses teach you how to *talk* to AI. We teach you how to *build* AI that works for you—automating workflows, analyzing data, and executing tasks without human input."
    },
    {
      id: 3,
      question: "Do you provide job placement support?",
      icon: <ShieldCheck className="w-5 h-5" />,
      answer: "Absolutely. We have a network of 200+ hiring partners. Our career support includes resume optimization, mock interviews, portfolio building, and direct referrals to companies hiring for Data and AI roles."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    // 1. INLINE STYLE: Forces black background immediately, overriding any CSS file
    <section 
      className="relative py-12 md:py-24 px-4 !bg-neutral-950 font-sans overflow-hidden"
      style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}
    >
      
      {/* Green Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Admissions & Support</span>
          </div>
          {/* Forced White Text */}
          <h2 className="text-4xl md:text-5xl font-extrabold !text-white mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="!text-neutral-400 text-lg font-medium">
            Everything you need to know about joining EdTech Informative.
          </p>
        </motion.div>

        {/* FAQ List */}
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
                // 2. CARD STYLING: Force dark backgrounds on both normal and hover states
                className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? '!bg-neutral-900 border-emerald-500 shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)]' 
                    : '!bg-neutral-900/40 border-neutral-800 hover:!bg-neutral-900 hover:border-emerald-500/50'
                }`}
                style={{ backgroundColor: isOpen ? '#171717' : 'rgba(23, 23, 23, 0.4)' }}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)} 
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`transition-colors duration-300 ${isOpen ? 'text-emerald-400' : 'text-emerald-600 group-hover:text-emerald-400'}`}>
                      {item.icon}
                    </div>
                    
                    {/* Question Text: FORCED WHITE via inline style and class */}
                    <span 
                      className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                        isOpen ? '!text-white' : '!text-neutral-300 group-hover:!text-white'
                      }`}
                      style={{ color: isOpen ? '#fff' : '#d4d4d4' }}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Button */}
                  <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-emerald-600 text-white border-emerald-500 rotate-180' 
                      : 'bg-neutral-800 border-neutral-700 text-neutral-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* Answer Text: Forced Light Gray */}
                      <div className="px-6 pb-6 !text-neutral-300 leading-relaxed text-base font-medium">
                        <div className="pt-4 border-t border-neutral-800/50">
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