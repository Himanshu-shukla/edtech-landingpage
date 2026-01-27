import React from 'react';
import { motion } from 'framer-motion';
import { Map, BookOpen, ShieldCheck, Users, Gift, Briefcase, Award } from 'lucide-react';

const ExclusiveBonusesSection = () => {
    // WhatsApp Link for the button
    const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20and%20claim%20my%20bonuses.";

    const bonuses = [
        {
            id: 1,
            title: "BONUS 1",
            description: "Roadmap to Becoming a 10X Data Analyst",
            icon: <Map className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
        },
        {
            id: 2,
            title: "BONUS 2",
            description: "E-books on essential Data Science topics",
            icon: <BookOpen className="w-16 h-16 text-purple-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
        },
        {
            id: 3,
            title: "BONUS 3",
            description: "Data Privacy & Security Checklist",
            icon: <ShieldCheck className="w-16 h-16 text-emerald-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
        },
        {
            id: 4,
            title: "BONUS 4",
            description: "Networking & Collaboration Guide",
            icon: <Users className="w-16 h-16 text-yellow-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
        },
        {
            id: 5,
            title: "BONUS 5",
            description: "Step-by-step Project Portfolio Guides",
            icon: <Briefcase className="w-16 h-16 text-pink-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(244,114,182,0.3)]",
        },
        {
            id: 6,
            title: "BONUS 6",
            description: "Free Bootcamp Attendance Certificate",
            icon: <Award className="w-16 h-16 text-orange-400" strokeWidth={1.5} />,
            glow: "shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)]",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative py-20 px-4 font-sans overflow-hidden bg-neutral-950 border-t border-neutral-900">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
                        <Gift className="w-3.5 h-3.5" />
                        Limited Time Offer
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Get Exclusive Bonuses <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            (Worth $2,500)
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium">
                        Available only for Live Bootcamp Attendees.
                    </p>
                </motion.div>

                {/* Bonuses Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
                >
                    {bonuses.map((bonus) => (
                        <motion.div
                            key={bonus.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`relative bg-neutral-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group ${bonus.glow}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                            <h4 className="text-neutral-500 font-black text-sm uppercase tracking-[0.2em] mb-8 group-hover:text-white transition-colors">
                                {bonus.title}
                            </h4>

                            <div className="mb-8 p-6 rounded-full bg-neutral-950 border border-neutral-800 group-hover:scale-110 transition-transform duration-500 shadow-2xl relative z-10">
                                {bonus.icon}
                            </div>

                            <p className="text-white font-bold text-lg md:text-xl leading-snug relative z-10">
                                {bonus.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button Section */}
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

export default ExclusiveBonusesSection;