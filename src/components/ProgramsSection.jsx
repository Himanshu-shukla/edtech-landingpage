import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Code,
  Video,
  Share2,
  MessageSquare,
  Terminal,
  Zap,
  Network,
  Clock,
  CheckCircle2
} from 'lucide-react';

const ProgramsSection = () => {
  const whatsappLink =
    "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20for%20%C2%A399.";

  const curriculum = [
    {
      day: "Day 01",
      theme: "Generative AI & Media Mastery",
      subtext: "Focusing on content, assets, and no-code app building.",
      modules: [
        {
          title: "Gen AI Foundations",
          desc: "Master the LLM tool stack (ChatGPT, Claude, Gemini) and professional prompting.",
          icon: <LayoutTemplate className="w-5 h-5 text-blue-600" />,
        },
        {
          title: "No-Code Web Apps",
          desc: "Build and deploy a functional web application from scratch without writing code.",
          icon: <Code className="w-5 h-5 text-purple-600" />,
        },
        {
          title: "AI Image & Video",
          desc: "Generate high-end marketing images and convert them into cinematic video.",
          icon: <Video className="w-5 h-5 text-pink-600" />,
        },
        {
          title: "Marketing Engine",
          desc: "Create a system that generates a month's worth of social content in minutes.",
          icon: <Share2 className="w-5 h-5 text-orange-600" />,
        },
      ],
    },
    {
      day: "Day 02",
      theme: "Advanced Agents & Automations",
      subtext: "Transitioning from manual tools to autonomous systems.",
      modules: [
        {
          title: "Build Custom GPTs",
          desc: "Develop specialized AI agents that mimic your business logic and tone.",
          icon: <MessageSquare className="w-5 h-5 text-green-600" />,
        },
        {
          title: "Agentic Workflows",
          desc: "AI agents that browse, decide, and execute multi-step tasks autonomously.",
          icon: <Terminal className="w-5 h-5 text-amber-600" />,
        },
        {
          title: "No-Code Pipelines",
          desc: "Use Make.com & Zapier to connect 1000+ apps into one system.",
          icon: <Zap className="w-5 h-5 text-blue-700" />,
        },
        {
          title: "n8n & API Mastery",
          desc: "Connect AI directly to business data via APIs for autonomous execution.",
          icon: <Network className="w-5 h-5 text-red-600" />,
        },
      ],
    },
  ];

  return (
    <section
      id="curriculum"
      className="relative pb-14 md:pb-16 px-4 bg-white font-sans overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8 md:pt-10">

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
            The 16-Hour{" "}
            <span className="text-emerald-600">Implementation Roadmap</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow a step-by-step path from AI beginner to automation architect.
            No theory — only{" "}
            <span className="text-neutral-900 font-bold">execution</span>.
          </p>
        </div>

        {/* Journey */}
        <div className="space-y-10">
          {curriculum.map((day, dIndex) => (
            <div key={dIndex}>
              {/* Timeline */}
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-emerald-600 text-white px-4 py-1.5 rounded-full font-black text-xs tracking-widest shadow-sm">
                  {day.day}
                </div>
                <div className="h-px flex-1 bg-neutral-200" />
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase">
                  <Clock className="w-3.5 h-3.5" /> 10:00 – 18:00
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-neutral-900">
                  {day.theme}
                </h3>
                <p className="text-neutral-500 text-sm mt-1">
                  {day.subtext}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.modules.map((mod, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-200 hover:shadow-xl transition-all"
                  >
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      {mod.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {mod.title}
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed font-medium">
                        {mod.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-7 bg-neutral-900 rounded-[2.5rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
          <p className="text-white text-base md:text-lg font-bold flex items-center justify-center gap-3 relative z-10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            Deploy 5+ Production Agents & Build Your AI Portfolio
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-6 md:mt-8 flex flex-col items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-sm"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-600 text-white py-4 px-8 rounded-2xl font-black text-lg shadow-lg hover:bg-emerald-700 transition-all"
            >
              Join the Batch — £99
              <div className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest mt-1">
                Limited: 15 Seats Remaining
              </div>
            </motion.button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
