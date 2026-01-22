import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const FAQSection = () => {
  // JSON Data Source
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

  // State to track which accordion item is open (defaulting to the first one)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 bg-white font-sans border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-slate-900 mb-12">
          Still Have Doubts?
        </h2>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className="w-full">
                
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-300 ${
                    isOpen ? 'bg-[#1e2f65]' : 'bg-[#1e2f65] hover:bg-[#2a4185]'
                  }`}
                >
                  <span className="text-white font-bold text-lg md:text-xl pr-8">
                    {item.question}
                  </span>
                  
                  {/* Icon Toggle */}
                  <div className="flex-shrink-0 text-white">
                    {isOpen ? (
                      <MinusCircle className="w-6 h-6 md:w-7 md:h-7 fill-white text-[#1e2f65]" />
                    ) : (
                      <PlusCircle className="w-6 h-6 md:w-7 md:h-7 fill-white text-[#1e2f65]" />
                    )}
                  </div>
                </button>

                {/* Answer Content (Animated Height) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50 ${
                    isOpen ? 'max-h-96 opacity-100 border border-t-0 border-slate-200' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 text-slate-700 leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;