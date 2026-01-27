import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, Terminal, Calendar, Code, Network } from 'lucide-react';

const CurriculumSection = () => {
  // Exact 2-Day Agenda from your content + Added Tool Highlights
  const curriculumData = [
    {
      dayLabel: "DAY 01",
      icon: <Terminal className="w-4 h-4" />,
      title: "Generative AI Fundamentals & Content Creation",
      time: "10 AM - 6 PM IST",
      // Changed image to something relevant to AI generation/coding
      imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Generative AI Foundations:",
          text: " Master the Gen AI Tools Stack & explore Large Language Models (LLMs). Onboard into the AI Mastermind."
        },
        {
          id: 2,
          highlight: "Web Apps Without Code:",
          text: " Build functional web-based applications without writing a single line of code."
        },
        {
          id: 3,
          highlight: "AI for Image & Video:",
          text: " Hands-on project: Prompting for realistic images & converting them to professional videos."
        },
        {
          id: 4,
          highlight: "Marketing Content Engine:",
          text: " Generate short-form and long-form creative assets instantly for marketing campaigns."
        }
      ]
    },
    {
      dayLabel: "DAY 02",
      icon: <Network className="w-4 h-4" />,
      title: "Custom GPTs & Advanced Automation",
      time: "10 AM - 6 PM IST",
      // Changed image to represent automation/workflows
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Build Custom GPTs:",
          text: " Create your own Writing Bot that mimics your style perfectly. Master Agentic Tools & Workflows."
        },
        {
          id: 2,
          highlight: "Future of AI:",
          text: " Deep dive into what's coming next in the AI revolution and how to stay ahead."
        },
        {
          id: 3,
          highlight: "Make.com & Zapier Mastery:",
          text: " Introduction to No-Code automation. Connect multiple apps and trigger complex actions automatically."
        },
        {
          id: 4,
          highlight: "n8n & API Integration:",
          text: " Integrate ChatGPT API with n8n workflows for enterprise-grade autonomous systems."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-12 md:py-20 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Bot className="w-4 h-4" />
            <span>2-Day Live Bootcamp Agenda</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Master Generative AI & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              No-Code Automation.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            16+ Hours of Intensive Training. From Custom GPTs to Make.com & n8n Workflows.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch"
        >
          {curriculumData.map((day, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <CurriculumCard content={day} index={index} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const CurriculumCard = ({ content, index }) => {
  const isDayOne = index === 0;
  const accentColor = isDayOne ? "text-emerald-400" : "text-cyan-400";
  const accentBg = isDayOne ? "bg-emerald-500" : "bg-cyan-500";
  const hoverBorder = isDayOne ? "group-hover:border-emerald-500/50" : "group-hover:border-cyan-500/50";

  return (
    <div className={`group bg-neutral-900/40 backdrop-blur-xl w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden border border-neutral-800 flex flex-col transition-all duration-500 ${hoverBorder}`}>
      <div className="relative h-72 w-full overflow-hidden">
        <img src={content.imageSrc} alt={content.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100" />
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg z-20">
          <span className={`${accentColor}`}>{content.icon}</span>
          <span className="text-white font-black text-xs tracking-widest uppercase">{content.dayLabel}</span>
        </div>
        <div className="absolute top-6 right-6 bg-emerald-900/80 border border-emerald-500/30 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-20">
          {content.time}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent z-10"></div>
      </div>

      <div className="p-8 md:p-12 flex-grow flex flex-col relative z-20 -mt-10">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight">{content.title}</h3>
        <ul className="space-y-8 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-neutral-800 via-neutral-700 to-transparent" />
          {content.items.map((item) => (
            <li key={item.id} className="relative flex items-start gap-6">
              <div className="flex-shrink-0 mt-1 relative z-10">
                <div className={`w-6 h-6 rounded-full border-[2px] border-neutral-950 ${accentBg} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed flex-1">
                <span className="font-extrabold text-white mr-1">{item.highlight}</span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurriculumSection;