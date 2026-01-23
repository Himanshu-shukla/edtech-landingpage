import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CheckCircle2, Sparkles, Cpu, GitBranch } from 'lucide-react';

const CurriculumSection = () => {
  // Enhanced JSON Data Source
  const curriculumData = [
    {
      dayLabel: "DAY 01",
      icon: <Cpu className="w-4 h-4" />,
      title: "Agentic AI Foundation & Core Tools",
      imageSrc: "https://1to10x.ai/wp-content/uploads/2025/03/Group-1000007610-3-1-1.png",
      items: [
        {
          id: 1,
          highlight: "Learn",
          text: " how to build a successful agentic AI career 6X faster using cutting-edge autonomous systems."
        },
        {
          id: 2,
          highlight: "Develop Skills",
          text: " for building autonomous decision-making systems that actual businesses need right now."
        },
        {
          id: 3,
          highlight: "Project 1:",
          text: " Create an Enterprise-Level Autonomous Agent for Business Intelligence and Workflow Automation."
        },
        {
          id: 4,
          highlight: "Project 2:",
          text: " Build Web-Interacting Agents using LLMs to scrape and analyze data from job boards."
        }
      ]
    },
    {
      dayLabel: "DAY 02",
      icon: <GitBranch className="w-4 h-4" />,
      title: "Advanced Multi-Agent Systems & Scaling",
      imageSrc: "https://1to10x.ai/wp-content/uploads/2025/03/Group-1000007612-1-1-1.png",
      items: [
        {
          id: 1,
          highlight: "Master",
          text: " multi-agent orchestration to handle complex, multi-step workflows without human intervention."
        },
        {
          id: 2,
          highlight: "Automate Outreach",
          text: " by building agents that can research leads, draft emails, and schedule meetings automatically."
        },
        {
          id: 3,
          highlight: "Project 3:",
          text: " Develop a 'Sales & Support' Swarm that handles customer inquiries and closes deals 24/7."
        },
        {
          id: 4,
          highlight: "Monetization:",
          text: " The exact roadmap to packaging your new skills into a $10k/month offer for high-ticket clients."
        }
      ]
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Ambient Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Masterclass Agenda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Two Days of Intense <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Agentic AI Transformation
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            From zero to building complex autonomous agents. Here is the exact roadmap we will follow.
          </p>
        </motion.div>

        {/* Side-by-Side Grid */}
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

// Reusable Aceternity-Style Card Component
const CurriculumCard = ({ content, index }) => {
  // Determine gradient colors based on the day
  const isDayOne = index === 0;
  const gradientBorder = isDayOne ? "group-hover:border-indigo-500/50" : "group-hover:border-emerald-500/50";
  const iconBg = isDayOne ? "bg-indigo-500" : "bg-emerald-500";
  const textHighlight = isDayOne ? "text-indigo-400" : "text-emerald-400";

  return (
    <div className={`group bg-neutral-900/40 backdrop-blur-xl w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden border border-neutral-800 flex flex-col transition-all duration-500 ${gradientBorder}`}>
      
      {/* Image Header Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={content.imageSrc} 
          alt={content.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        
        {/* Floating Day Badge */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg z-20">
          <span className={`${textHighlight}`}>
            {content.icon}
          </span>
          <span className="text-white font-extrabold text-xs tracking-widest">
            {content.dayLabel}
          </span>
        </div>

        {/* Deep Gradient Overlays for Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10"></div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10 flex-grow flex flex-col relative z-20 -mt-10">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-8 leading-tight">
          {content.title}
        </h3>

        <ul className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {content.items.map((item, idx) => (
            <li key={item.id} className="relative flex items-start gap-5">
              
              {/* Timeline Dot / Bullet */}
              <div className="flex-shrink-0 mt-1 relative z-10">
                <div className={`w-6 h-6 rounded-full border-[2px] border-neutral-900 ${iconBg} shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center`}>
                  <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>

              {/* Text Content */}
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed flex-1">
                <span className="font-bold text-white tracking-wide">
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