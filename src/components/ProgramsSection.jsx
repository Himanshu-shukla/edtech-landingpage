import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Code, Video, Share2, MessageSquare, Terminal, Zap, Network, Clock, CheckCircle2 } from 'lucide-react';

const ProgramsSection = () => {
    const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20for%20%C2%A399.";

    const curriculum = [
        {
            day: "Day 01",
            theme: "Generative AI & Media Mastery",
            subtext: "Focusing on content, assets, and no-code app building.",
            modules: [
                { title: "Gen AI Foundations", desc: "Master the LLM tool stack (ChatGPT, Claude, Gemini) and professional prompting.", icon: <LayoutTemplate className="w-5 h-5 text-blue-600" /> },
                { title: "No-Code Web Apps", desc: "Build and deploy a functional web application from scratch without writing code.", icon: <Code className="w-5 h-5 text-purple-600" /> },
                { title: "AI Image & Video", desc: "Hands-on: Generate high-end marketing images and convert them into cinematic video.", icon: <Video className="w-5 h-5 text-pink-600" /> },
                { title: "Marketing Engine", desc: "Create a system that generates a month's worth of social content in minutes.", icon: <Share2 className="w-5 h-5 text-orange-600" /> }
            ]
        },
        {
            day: "Day 02",
            theme: "Advanced Agents & Automations",
            subtext: "Transitioning from manual tools to autonomous systems.",
            modules: [
                { title: "Build Custom GPTs", desc: "Develop specialized AI agents that mimic your specific business logic and tone.", icon: <MessageSquare className="w-5 h-5 text-green-600" /> },
                { title: "Agentic Workflows", desc: "Learn how AI 'Agents' can now browse the web and complete multi-step tasks for you.", icon: <Terminal className="w-5 h-5 text-amber-600" /> },
                { title: "No-Code Pipelines", desc: "Master Make.com and Zapier to connect 1000+ apps into a single automation.", icon: <Zap className="w-5 h-5 text-blue-700" /> },
                { title: "n8n & API Mastery", desc: "Advanced: Connect AI directly to your business data via APIs for autonomous operation.", icon: <Network className="w-5 h-5 text-red-600" /> }
            ]
        }
    ];

    return (
        <section id="curriculum" className="relative py-16 md:py-24 bg-white font-sans overflow-hidden border-t border-neutral-100">
            
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
                        The 16-Hour <span className="text-emerald-600">Implementation Roadmap</span>
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Follow our step-by-step path from AI beginner to automation architect. 
                        No theory, just <span className="text-neutral-900 font-bold">direct execution</span>.
                    </p>
                </div>

                {/* Vertical Journey View */}
                <div className="space-y-10">
                    {curriculum.map((day, dIndex) => (
                        <div key={dIndex} className="relative">
                            
                            {/* Visual Timeline Connector */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-600 text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-100">
                                    {day.day}
                                </div>
                                <div className="h-px flex-1 bg-neutral-200"></div>
                                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase">
                                    <Clock className="w-3.5 h-3.5" /> 10:00 - 18:00
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">{day.theme}</h3>
                                <p className="text-neutral-500 text-sm mt-1">{day.subtext}</p>
                            </div>

                            {/* Dense Module Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {day.modules.map((mod, mIndex) => (
                                    <motion.div
                                        key={mIndex}
                                        whileHover={{ y: -5 }}
                                        className="flex gap-4 p-5 bg-white rounded-2xl border border-neutral-200 transition-all hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 group"
                                    >
                                        <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 h-fit group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                                            {mod.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-neutral-900 font-bold text-base mb-1">{mod.title}</h4>
                                            <p className="text-neutral-500 text-xs leading-relaxed font-medium">{mod.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outcome Summary */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 bg-neutral-900 rounded-[2.5rem] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
                    <p className="text-white text-lg md:text-xl font-bold flex items-center justify-center gap-3 relative z-10">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" /> 
                        Deploy 5+ Production Agents & Build Your AI Portfolio
                    </p>
                </motion.div>

                {/* Direct Registration */}
                <div className="mt-10 flex flex-col items-center">
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full max-w-sm group">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-emerald-600 text-white py-5 px-8 rounded-2xl font-black text-xl flex flex-col items-center shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all"
                        >
                            <span>Join the Batch — £99</span>
                            <span className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest mt-1">Limited: 15 Seats Remaining</span>
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;