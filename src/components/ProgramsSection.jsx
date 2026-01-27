import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Mic, Share2, ArrowRight } from 'lucide-react';

const ProgramsSection = () => {
  // Updated to reflect the "Live Builds" from the sample content
  const agents = [
    {
      id: 1,
      title: "LinkedIn Content Agent",
      subtitle: "Day 1 • Live Build",
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      description: "Automate your personal brand. Build an agent that researches trending topics, writes viral hooks, structures posts, and auto-publishes to LinkedIn.",
      skills: ["Research Automation", "Copywriting AI", "LinkedIn API", "Scheduling Logic"],
      outcome: "Consistent online presence on autopilot."
    },
    {
      id: 2,
      title: "WhatsApp Sales Bot",
      subtitle: "Day 1 • RAG Based",
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      description: "Build a 24/7 sales employee. This agent answers customer queries using your business data (RAG), qualifies leads, and closes deals on WhatsApp.",
      skills: ["RAG Implementation", "WhatsApp Business API", "Lead Qualification", "Context Memory"],
      outcome: "Instant customer replies & higher sales."
    },
    {
      id: 3,
      title: "AI Voice Caller",
      subtitle: "Day 2 • Advanced",
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      description: "The future of support. Create a voice agent that can hold natural human-like conversations, take messages, and summarize calls instantly.",
      skills: ["Voice Synthesis (Vapi)", "Speech-to-Text", "Conversation Design", "CRM Integration"],
      outcome: "Replace manual cold calling & support teams."
    }
  ];

  return (
    <section id="curriculum" className="py-12 md:py-20 bg-neutral-950 relative border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Don't Just Learn. <br />
            <span className="text-emerald-500">Build 3 Real Agents Live.</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Forget theory. In this bootcamp, you will look over my shoulder and build these 
            three exact systems from scratch. You leave with working software, not just notes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((program) => (
            <motion.div 
              key={program.id}
              whileHover={{ y: -10 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group"
            >
              <div className="bg-neutral-950 w-16 h-16 rounded-xl flex items-center justify-center border border-neutral-800 mb-6 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>

              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
                {program.subtitle}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{program.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-b border-neutral-800 pb-8">
                {program.description}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {program.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-neutral-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-xs text-neutral-500 mb-4 font-mono">
                  Outcome: <span className="text-white font-bold">{program.outcome}</span>
                </div>
                <button className="w-full py-4 rounded-xl bg-neutral-100 text-neutral-950 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                  See Full Syllabus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;