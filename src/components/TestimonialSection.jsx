import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, Sparkles, Bot, Zap, ShieldCheck } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "Operations Director, Logistics Co.",
      initials: "AM",
      type: "Agency Client",
      text: "The Agentic AI workflow integrated by the team was a game-changer. We automated 70% of our supply chain ticketing, saving us nearly $15k monthly in overhead. They didn't just give us a tool; they gave us a digital workforce."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "SDE-2 → AI Solutions Architect",
      initials: "SJ",
      type: "Course Alumni",
      text: "I was stuck in a standard dev role. This bootcamp taught me how to build autonomous agents, not just prompts. Three weeks after finishing, I landed a Senior AI Architect role with a 65% salary hike. The 'Agentic' framework is the future."
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "Founder, e-Commerce Brand",
      initials: "VM",
      type: "Agency Client",
      text: "Our customer support was drowning in emails. The team deployed a custom AI Email Bot that handles refunds and tracking with 95% accuracy. It feels like we hired 5 people overnight, but for a fraction of the cost."
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Freelance Automation Expert",
      initials: "ER",
      type: "Course Alumni",
      text: "I used to charge $50/hr for basic coding. Now I sell 'Workflow Transformation' packages starting at $5k using the Agentic AI stack I learned here. My clients are blown away by the ROI of autonomous agents."
    },
    {
      id: 5,
      name: "David Chen",
      role: "Head of Support, Fintech Startup",
      initials: "DC",
      type: "Agency Client",
      text: "Implementing the Image Analyzer for KYC verification has cut our processing time from 4 hours to 40 seconds. The accuracy is terrifyingly good. If you aren't using their agentic solutions, you're falling behind."
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Product Manager",
      initials: "PS",
      type: "Course Alumni",
      text: "The most practical AI course I've ever taken. We moved past the 'ChatGPT hype' and actually built an autonomous research agent for our product roadmap. It’s now a core part of our weekly sprint planning."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Real Efficiency. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Real Agentic Impact.
            </span>
          </h2>
          <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
            Whether it's training individuals for $100k+ roles or deploying agents that save companies millions—we deliver.
          </p>
        </motion.div>

        {/* Masonry Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((review) => (
            <motion.div 
              key={review.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="break-inside-avoid relative bg-neutral-900/40 backdrop-blur-md rounded-2xl p-8 border border-neutral-800 shadow-xl flex flex-col gap-5 group transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)]"
            >
              {/* Type Badge */}
              <div className="absolute top-6 right-6 px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-500 border border-neutral-700">
                {review.type}
              </div>

              {/* User Header */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-[1px] shadow-lg">
                  <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.initials}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/80">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              <hr className="border-neutral-800/60" />

              {/* Review Text */}
              <div className="text-neutral-300 leading-relaxed text-sm md:text-base relative z-10 font-normal tracking-wide italic">
                "{review.text}"
              </div>

              {/* Bottom Icon */}
              <div className="flex justify-end opacity-20 group-hover:opacity-100 transition-opacity">
                {review.type === "Agency Client" ? <Bot className="w-5 h-5 text-emerald-400" /> : <Zap className="w-5 h-5 text-yellow-400" />}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;