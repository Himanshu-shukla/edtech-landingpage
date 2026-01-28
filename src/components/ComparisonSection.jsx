import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Scale, ArrowRight, X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import RegistrationModal from './RegistrationModal';

// --- Main Comparison Section ---
const ComparisonSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonData = [
    {
      bad: "Just Theory & Slides: You watch the instructor talk for 2 hours about 'AI concepts'.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">100% Hands-On Build:</span> You build 5+ real agents step-by-step.
        </>
      ),
    },
    {
      bad: "The Upsell Trap: A teaser session that pushes a ₹20k course.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Complete Skill:</span> You leave with working skills, ready to take clients immediately.
        </>
      ),
    },
    {
      bad: "Basic Prompting: Teaching you how to use ChatGPT (which you already know).",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Advanced Stack:</span> Master n8n, Vapi, and RAG pipelines for autonomous systems.
        </>
      ),
    },
    {
      bad: "No Business Plan: You learn a skill but have no idea how to monetize it.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Agency Blueprint:</span> Includes proposal templates and a ₹50k client roadmap.
        </>
      ),
    },
    {
      bad: "Zero Support: If you get stuck, you're on your own.",
      good: (
        <>
          <span className="text-neutral-900 font-bold">Lifetime Access:</span> alumni network for debugging and job opportunities.
        </>
      ),
    },
  ];

  return (
    <section className="relative pb-12 md:pb-16 px-4 bg-white font-sans overflow-hidden border-t border-neutral-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-[10px] font-black tracking-widest uppercase mb-4">
            <Scale className="w-3 h-3 text-emerald-600" />
            <span>The Reality Check</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-2 leading-tight">
            Not All Masterclasses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              Are Created Equal.
            </span>
          </h2>
        </motion.div>

        <div className="relative bg-white rounded-[1.5rem] border border-neutral-200 p-4 md:p-8 shadow-xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-8">
            <div className="flex items-center justify-center gap-2 text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.15em] p-2.5 bg-red-50/50 rounded-xl border border-red-100">
              <AlertTriangle className="w-4 h-4" />
              Typical Webinars
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-700 font-black text-[10px] md:text-xs uppercase tracking-[0.15em] p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <Sparkles className="w-4 h-4" />
              Agentic AI Bootcamp
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 group"
              >
                <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50/50 border border-neutral-100">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-500 text-xs md:text-sm font-medium">{row.bad}</p>
                </div>

                <div className="relative flex items-start gap-3 p-4 rounded-xl bg-emerald-50/30 border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-800 text-xs md:text-sm font-medium">{row.good}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
        >
            <h3 className="text-xl font-black text-neutral-800 mb-4 text-center">
                Secure your career today
            </h3>
            
            <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full max-w-md bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-lg font-black py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 overflow-hidden border-t border-green-300/30 cursor-pointer"
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Enroll Now</span>
                <ArrowRight className="relative z-10 w-5 h-5" />
            </motion.button>
        </motion.div>
      </div>

      {/* SDE-3 Modal Logic */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ComparisonSection;