import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Code, Video, Share2, MessageSquare, Terminal, Zap, Network } from 'lucide-react';

const ProgramsSection = () => {
    const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20for%20%C2%A399.";

    const curriculum = [
        {
            day: "Day 1",
            title: "AI Fundamentals & Media",
            time: "10 AM - 6 PM IST",
            modules: [
                { title: "Gen AI Foundations", desc: "Master LLMs and the professional tool stack.", icon: <LayoutTemplate className="w-4 h-4 text-blue-600" /> },
                { title: "No-Code Web Apps", desc: "Build functional apps without writing code.", icon: <Code className="w-4 h-4 text-purple-600" /> },
                { title: "AI Image & Video", desc: "Prompt realistic media and professional video.", icon: <Video className="w-4 h-4 text-pink-600" /> },
                { title: "Marketing Engine", desc: "Generate creative assets for instant campaigns.", icon: <Share2 className="w-4 h-4 text-orange-600" /> }
            ]
        },
        {
            day: "Day 2",
            title: "GPTs & Automation",
            time: "10 AM - 6 PM IST",
            modules: [
                { title: "Build Custom GPTs", desc: "Create bots that mimic your style and workflow.", icon: <MessageSquare className="w-4 h-4 text-green-600" /> },
                { title: "Agentic Workflows", desc: "Deep dive into the next revolution of AI agents.", icon: <Terminal className="w-4 h-4 text-amber-600" /> },
                { title: "No-Code Pipelines", desc: "Build automation using Make.com and Zapier.", icon: <Zap className="w-4 h-4 text-blue-700" /> },
                { title: "n8n & API Mastery", desc: "Advanced level robust autonomous workflows.", icon: <Network className="w-4 h-4 text-red-600" /> }
            ]
        }
    ];

    return (
        <section id="curriculum" className="py-10 md:py-14 bg-neutral-50 relative border-t border-neutral-200">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mb-3">
                        16 Hours of <span className="text-emerald-600">Pure Implementation.</span>
                    </h2>
                    <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        No theory, just building. Construct complex automations with
                        <strong className="text-neutral-900"> n8n, Make.com, and Zapier</strong>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-12">
                    {curriculum.map((day, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3 }}
                            className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-emerald-50 text-emerald-700 px-3 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-emerald-100">
                                    {day.day}
                                </span>
                                <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">{day.time}</span>
                            </div>

                            <h3 className="text-xl font-black text-neutral-900 mb-5">{day.title}</h3>

                            <div className="grid grid-cols-1 gap-4">
                                {day.modules.map((mod, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-100 flex-shrink-0">
                                            {mod.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-neutral-900 font-bold text-sm leading-tight mb-0.5">{mod.title}</h4>
                                            <p className="text-neutral-500 text-xs leading-snug">{mod.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center py-4"
                >
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full max-w-2xl group">
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white py-5 px-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-center gap-2 overflow-hidden"
                        >
                            <span className="text-lg md:text-xl font-black">Register For £99</span>
                            <div className="flex items-center gap-2">
                                <span className="text-green-900 line-through opacity-60 text-sm">£299</span>
                                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black uppercase">
                                    FREE 2-Day Bootcamp
                                </span>
                            </div>
                        </motion.button>
                    </a>

                    <div className="w-full max-w-xs mt-8">
                        <div className="flex gap-1 h-1.5">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className={`flex-1 rounded-full ${i < 12 ? 'bg-red-500' : 'bg-neutral-200'}`} />
                            ))}
                        </div>
                        <p className="text-red-600 text-center font-black text-[10px] mt-2 uppercase tracking-widest animate-pulse">
                            🔥 Batch filling fast
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramsSection;