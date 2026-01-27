import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Mic, Share2, ArrowRight, Calendar, Code, LayoutTemplate, Video, Zap, Network, Terminal, Search } from 'lucide-react';

const ProgramsSection = () => {
    // Defined the missing whatsappLink variable
    const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20for%20%C2%A399.";

    // Updated Agenda based on Generative AI Mastermind content
    const curriculum = [
        {
            day: "Day 1",
            title: "Generative AI Fundamentals & Media",
            time: "10 AM - 6 PM IST • 20+ Tools",
            modules: [
                {
                    title: "Gen AI Foundations & Tools Stack",
                    desc: "Explore Large Language Models (LLMs) and onboard into the Generative AI Mastermind.",
                    icon: <LayoutTemplate className="w-5 h-5 text-blue-400" />
                },
                {
                    title: "No-Code Web App Build",
                    desc: "Create a functional web-based application without writing a single line of code.",
                    icon: <Code className="w-5 h-5 text-purple-400" />
                },
                {
                    title: "AI Image & Video Creation",
                    desc: "Hands-on: Prompt realistic images and convert them into professional videos.",
                    icon: <Video className="w-5 h-5 text-pink-400" />
                },
                {
                    title: "Marketing Content Engine",
                    desc: "Generate short-form and long-form creative assets instantly for campaigns.",
                    icon: <Share2 className="w-5 h-5 text-orange-400" />
                }
            ]
        },
        {
            day: "Day 2",
            title: "Custom GPTs & Advanced Automation",
            time: "10 AM - 6 PM IST • Agentic Workflows",
            modules: [
                {
                    title: "Build Custom GPTs",
                    desc: "Create a Writing Bot that mimics your style. Integrate AI deep into your workflows.",
                    icon: <MessageSquare className="w-5 h-5 text-green-400" />
                },
                {
                    title: "Future of AI & Agents",
                    desc: "Deep dive into Agentic Tools and what's coming next in the AI revolution.",
                    icon: <Terminal className="w-5 h-5 text-yellow-400" />
                },
                {
                    title: "Make.com & Zapier Automation",
                    desc: "Connect multiple apps, set triggers, and build no-code automation pipelines.",
                    icon: <Zap className="w-5 h-5 text-blue-500" />
                },
                {
                    title: "n8n & ChatGPT API Integration",
                    desc: "Advanced Level: Build robust workflows using n8n and raw API integrations.",
                    icon: <Network className="w-5 h-5 text-red-400" />
                }
            ]
        }
    ];

    return (
        <section id="curriculum" className="py-12 md:py-20 bg-neutral-950 relative border-t border-neutral-900/50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        16 Hours of <br />
                        <span className="text-emerald-500">Pure Implementation.</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        From creating realistic video content to building complex automations with
                        <strong> n8n, Make.com, and Zapier</strong>. No theory, just building.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
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

                {/* BOTTOM: Pricing & Countdown CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center relative py-8"
                >
                    {/* Ambient Glow for Visibility */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

                    {/* Main Interactive Button */}
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full max-w-3xl relative z-10 group">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98, y: 6, boxShadow: "none" }}
                            className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-3xl font-black py-8 px-6 rounded-3xl shadow-[0_12px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_0_rgb(0,100,30),0_30px_60px_rgba(0,255,100,0.25)] transition-all flex flex-col md:flex-row items-center justify-center gap-3 overflow-hidden border-t border-green-300/30"
                        >
                            {/* Shine Effect on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />

                            <span className="relative z-10 drop-shadow-md">Register For £99</span>
                            <span className="relative z-10 text-green-900 line-through decoration-red-600 decoration-4 opacity-70 text-2xl mx-2">£299</span>
                            <span className="relative z-10 bg-yellow-400 text-black px-3 py-1 rounded-lg text-lg md:text-xl font-extrabold -rotate-2 shadow-sm border-2 border-black/10">
                                FREE 2-Day Bootcamp
                            </span>
                        </motion.button>
                    </a>

                    {/* Animated Progress Bar */}
                    <div className="w-full max-w-lg mt-14 relative z-10">
                        <div className="flex gap-1.5 h-3">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    whileInView={{ opacity: 1, scaleY: 1 }}
                                    transition={{ delay: i * 0.03, type: "spring" }}
                                    viewport={{ once: true }}
                                    className={`flex-1 rounded-full ${i < 17
                                        ? 'bg-gradient-to-t from-red-700 to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                        : 'bg-neutral-800'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-red-400 text-center font-bold text-xs md:text-sm mt-4 uppercase tracking-widest animate-pulse">
                            🔥 High Demand: Batch filling fast
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ProgramsSection;