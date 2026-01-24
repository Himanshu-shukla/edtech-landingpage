import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Cpu, GitBranch, Bot, Terminal, Zap, ShieldCheck } from 'lucide-react';

const CurriculumSection = () => {
  // Updated Data Source: Focused on Agency-Grade Agentic Workflows
  const curriculumData = [
    {
      dayLabel: "PHASE 01",
      icon: <Terminal className="w-4 h-4" />,
      title: "Agentic Architecture & Reasoning",
      imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Cognitive Architecture:",
          text: " Master the shift from fixed prompts to autonomous reasoning, planning, and tool-use."
        },
        {
          id: 2,
          highlight: "Agent Frameworks:",
          text: " Hands-on with LangGraph, CrewAI, and MCP to build agents that solve non-linear tasks."
        },
        {
          id: 3,
          highlight: "Project 1:",
          text: " Build an Autonomous Research Agent that executes multi-step web searches and synthesizes reports."
        },
        {
          id: 4,
          highlight: "Enterprise Logic:",
          text: " Integrate custom business SOPs into agent memory for zero-hallucination execution."
        }
      ]
    },
    {
      dayLabel: "PHASE 02",
      icon: <GitBranch className="w-4 h-4" />,
      title: "Multi-Agent Swarms & Deployment",
      imageSrc: "https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?q=80&w=1200&auto=format&fit=crop",
      items: [
        {
          id: 1,
          highlight: "Swarm Intelligence:",
          text: " Architect hierarchical agent teams (Manager + Workers) to handle complex enterprise support."
        },
        {
          id: 2,
          highlight: "Human-in-the-loop:",
          text: " Design seamless handoff points between AI agents and human teams for critical approvals."
        },
        {
          id: 3,
          highlight: "Project 2:",
          text: " Deploy an Omnichannel 'Nugget-Style' Ticketing Agent that triages, analyzes images, and initiates refunds."
        },
        {
          id: 4,
          highlight: "Monetization:",
          text: " The $10k+ Agency Roadmap: How to package Agentic Workflows for high-ticket corporate clients."
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
    <section className="relative min-h-screen py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Effects - Emerald focus for 2026 Tech vibe */}
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
            <span>2026 Masterclass Syllabus</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            The Roadmap to <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Agentic Mastery
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            From basic LLM prompting to building production-ready autonomous systems for the enterprise.
          </p>
        </motion.div>

        {/* side-by-side Grid */}
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
        <img 
          src={content.imageSrc} 
          alt={content.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100"
        />
        
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg z-20">
          <span className={`${accentColor}`}>
            {content.icon}
          </span>
          <span className="text-white font-black text-xs tracking-widest uppercase">
            {content.dayLabel}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent z-10"></div>
      </div>

      <div className="p-8 md:p-12 flex-grow flex flex-col relative z-20 -mt-10">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-10 leading-tight">
          {content.title}
        </h3>

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
                <span className="font-extrabold text-white mr-1">
                  {item.highlight}
                </span>
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