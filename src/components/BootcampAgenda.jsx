import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, Flame, Video, MessageCircle } from 'lucide-react';

const BootcampAgenda = () => {
    // WhatsApp Link for the CTA
    const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20for%20%C2%A399.";

    return (
        <section className="relative py-12 px-4 bg-neutral-50 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Grid Container: Instructor vs Agenda */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

                    {/* LEFT: Instructor & Logistics */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        {/* Image Container */}
                        <div className="relative group rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
                                alt="Instructor"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 z-20">

                                <h3 className="text-white text-2xl font-black mt-2">Yashdeep Rana</h3>
                                <p className="text-neutral-200 text-sm">Founder, EdTech Informative</p>
                            </div>
                        </div>

                        {/* Logistics Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
                                <Calendar className="w-6 h-6 text-emerald-600 mb-2" />
                                <span className="text-neutral-900 font-bold text-sm">07 - 08 Feb 2026</span>
                                <span className="text-neutral-500 text-xs uppercase">Date</span>
                            </div>
                            <div className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
                                <Clock className="w-6 h-6 text-emerald-600 mb-2" />
                                <span className="text-neutral-900 font-bold text-sm">11 AM GMT</span>
                                <span className="text-neutral-500 text-xs uppercase">Time</span>
                            </div>
                            <div className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
                                <Video className="w-6 h-6 text-emerald-600 mb-2" />
                                <span className="text-neutral-900 font-bold text-sm">100% Practical</span>
                                <span className="text-neutral-500 text-xs uppercase">Training</span>
                            </div>
                            <div className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
                                <MessageCircle className="w-6 h-6 text-emerald-600 mb-2" />
                                <span className="text-neutral-900 font-bold text-sm">Real-Time QA</span>
                                <span className="text-neutral-500 text-xs uppercase">Support</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Agenda Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-neutral-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl group"
                    >
                        {/* Animated Purple Accent Top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-full shadow-md"></div>

                        <div className="text-center mb-10 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-3 tracking-tight">
                                100% Practical Agenda
                            </h3>
                            <p className="text-purple-700 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                                (LIVE 2-Day Bootcamp)
                            </p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {[
                                "Gain Step-By-Step Data Career Blueprint 6X Faster Using AI",
                                "Develop Easy & Practical Agentic AI Skills (Perfect For Beginners)",
                                "Get Assistance & Support to become Job-Ready for a SIX FIGURE Career",
                                "Learn To Build an Interview-Winning Portfolio"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                                    className="flex gap-5 items-start p-4 rounded-2xl border border-transparent hover:border-purple-200 transition-all duration-300 cursor-default"
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <div className="bg-purple-50 border border-purple-100 rounded-full p-1.5 shadow-sm group-hover:bg-purple-100 transition-all">
                                            <CheckCircle2 className="w-5 h-5 text-purple-600" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <p className="text-neutral-700 font-medium text-base md:text-lg leading-snug group-hover:text-neutral-900 transition-colors">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background Decor */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-50 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>

                </div>

                {/* BOTTOM: Pricing & Countdown CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center relative py-8"
                >
                    {/* Main Interactive Button */}
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full max-w-3xl relative z-10 group">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98, y: 6, boxShadow: "none" }}
                            className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-3xl font-black py-8 px-6 rounded-3xl shadow-[0_12px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_0_rgb(0,100,30),0_30px_60px_rgba(0,255,100,0.2)] transition-all flex flex-col md:flex-row items-center justify-center gap-3 overflow-hidden border-t border-green-300/30"
                        >
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
                                        ? 'bg-gradient-to-t from-red-600 to-red-500 shadow-sm'
                                        : 'bg-neutral-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-red-600 text-center font-bold text-xs md:text-sm mt-4 uppercase tracking-widest animate-pulse">
                            🔥 High Demand: Batch filling fast
                        </p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default BootcampAgenda;