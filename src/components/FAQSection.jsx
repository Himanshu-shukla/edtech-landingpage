import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "What if I have zero technical background?",
      answer: "Our bootcamp is specifically designed for non-technical professionals. We start from absolute basics and use plain language – no coding experience required. We focus on practical applications rather than technical theory."
    },
    {
      id: 2,
      question: "What if I've tried learning AI before and failed?",
      answer: "This program is different because we focus on outcome-based learning. Instead of boring theory, you'll be building real agents from Day 1 using no-code tools. We provide step-by-step templates that make success inevitable."
    },
    {
      id: 3,
      question: "What if AI is moving too fast for me to catch up?",
      answer: "That is exactly why you need this bootcamp. We filter out the noise and teach you only the 'Evergreen Principles' of Agentic AI that remain relevant even as tools change. You'll learn how to adapt, not just memorize."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Still Have Doubts?
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about the Agentic AI Bootcamp.
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
                    ? 'bg-neutral-900 border-indigo-500/50 shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]' 
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300"
                >
                  <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 ${
                    isOpen ? 'text-indigo-400' : 'text-white group-hover:text-neutral-200'
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Rotating Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-400' 
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
                      <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
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