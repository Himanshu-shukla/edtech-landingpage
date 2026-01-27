import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Mic, Share2, ArrowRight, Calendar, Code, LayoutTemplate } from 'lucide-react';

const ProgramsSection = () => {
  // Exact 2-Day Agenda from your content
  const curriculum = [
    {
      day: "Day 1",
      title: "Core Foundations & First Builds",
      time: "5+ Hours Live • Templates Included",
      modules: [
        {
          title: "Agentic AI Fundamentals",
          desc: "Understand workflows, memory, tools, and decision-making logic.",
          icon: <LayoutTemplate className="w-5 h-5 text-blue-400" />
        },
        {
          title: "LinkedIn Content Agent (Live Build)",
          desc: "Research → Write → Post. Automate your personal brand entirely.",
          icon: <Share2 className="w-5 h-5 text-blue-400" />
        },
        {
          title: "WhatsApp Sales Bot (Live Build)",
          desc: "A RAG-based agent that answers FAQs and closes leads 24/7.",
          icon: <MessageSquare className="w-5 h-5 text-green-400" />
        },
        {
          title: "Smart Email Manager",
          desc: "Draft replies and organize emails automatically.",
          icon: <CheckCircle2 className="w-5 h-5 text-purple-400" />
        }
      ]
    },
    {
      day: "Day 2",
      title: "Advanced Scale & Monetization",
      time: "5+ Hours Live • Agency Roadmap",
      modules: [
        {
          title: "AI Voice Caller (Live Build)",
          desc: "Build a Vapi agent that talks like a human to handle support calls.",
          icon: <Mic className="w-5 h-5 text-red-400" />
        },
        {
          title: "Multi-Agent Marketing System",
          desc: "Orchestrate a team of agents (Researcher + Writer + Editor).",
          icon: <Share2 className="w-5 h-5 text-orange-400" />
        },
        {
          title: "Build Your First AI App",
          desc: "Concept to Launch. Package your automation as a product.",
          icon: <Code className="w-5 h-5 text-yellow-400" />
        },
        {
          title: "Agency Launchpad Blueprint",
          desc: "Pricing, Proposals & SOPs to sign your first £2,000 client.",
          icon: <Calendar className="w-5 h-5 text-emerald-400" />
        }
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-12 md:py-20 bg-neutral-950 relative border-t border-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Two Days. <br />
            <span className="text-emerald-500">Five Real Agents.</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Forget theory. In this bootcamp, you will look over my shoulder and build these 
            exact systems from scratch. You leave with working software, not just notes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {curriculum.map((day, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-emerald-900/30 text-emerald-400 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-emerald-500/20">
                  {day.day}
                </span>
                <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{day.time}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-8">{day.title}</h3>

              <div className="space-y-6">
                {day.modules.map((mod, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 p-2 bg-neutral-800 rounded-lg border border-neutral-700 h-fit">
                      {mod.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-1">{mod.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;