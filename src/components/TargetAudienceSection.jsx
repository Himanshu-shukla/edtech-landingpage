import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  GraduationCap,
} from "lucide-react";

const TargetAudienceSection = () => {
  const whatsappLink =
    "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20check%20if%20I%20am%20eligible%20for%20the%20Data%20Analytics%20Bootcamp.";

  const audienceList = [
    {
      role: "Non-IT Professionals & Career Switchers",
      description:
        "Those feeling stuck in traditional roles. Learn Python & Data Analytics from scratch to transition into high-paying Tech jobs.",
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
    },
    {
      role: "Aspiring Data Scientists",
      description:
        "Graduates or analysts looking to move up the value chain by mastering Machine Learning and AI Modeling.",
      icon: <Bot className="w-4 h-4 text-blue-400" />,
    },
    {
      role: "Developers & Engineers",
      description:
        "SDEs who want to future-proof their skills by learning to build Autonomous Agentic Systems (the next big shift).",
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
    },
    {
      role: "Business Leaders & Founders",
      description:
        "Visionaries who want to understand how to deploy AI agents to automate their operations and cut costs.",
      icon: <Building2 className="w-4 h-4 text-purple-400" />,
    },
  ];

  const images = [
    {
      label: "Career Pivot",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      label: "Deep Tech",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      colSpan: "",
      rowSpan: "row-span-1",
    },
    {
      label: "Leadership",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      colSpan: "",
      rowSpan: "row-span-1",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-28 px-4 md:px-8 bg-neutral-950 overflow-x-hidden font-sans">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                <span>Who Is This For?</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
                Designed for the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  Ambitious.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {audienceList.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-emerald-500/50 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-white block mb-1">
                      {item.role}
                    </span>
                    <span className="text-neutral-400 text-base leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[200px]"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`${img.colSpan} ${img.rowSpan} relative group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                  <div className="translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA OUTSIDE GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-md relative z-10 group block"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 6, boxShadow: "none" }}
              className="relative w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-2xl font-black py-5 px-6 rounded-2xl shadow-[0_10px_0_rgb(0,100,30),0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_0_rgb(0,100,30),0_30px_60px_rgba(0,255,100,0.25)] transition-all flex items-center justify-center gap-3 overflow-hidden border-t border-green-300/30"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <span className="relative z-10 drop-shadow-md">
                Register For £99
              </span>
              <span className="relative z-10 text-green-900 line-through decoration-red-600 decoration-4 opacity-70 text-lg mx-1">
                £299
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 ml-2" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
