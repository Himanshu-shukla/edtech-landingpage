import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Bot, Briefcase } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Meera Joshi",
      role: "Tech Consultant",
      initials: "MJ",
      type: "Bootcamp Graduate",
      text: "The practical case studies showed me exactly what clients are willing to pay premium prices for. I closed my first ₹50K automation project just 2 weeks after the workshop. Game-changing content!"
    },
    {
      id: 2,
      name: "Arjun Desai",
      role: "Entrepreneur",
      initials: "AD",
      type: "Business Owner",
      text: "I went from zero AI knowledge to automating my entire lead qualification process. The templates and scripts provided are pure gold. It feels like I hired 3 employees over the weekend."
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Digital Marketing Consultant",
      initials: "PS",
      type: "Freelancer",
      text: "I built my first ₹75,000 project within 3 weeks of attending this masterclass. The step-by-step approach to building the 'LinkedIn Content Agent' made everything click for me."
    },
    {
      id: 4,
      name: "Rahul Kumar",
      role: "Software Developer",
      initials: "RK",
      type: "Bootcamp Graduate",
      text: "From struggling with basic automations to closing a ₹1.2L voice agent project. This masterclass completely changed my business trajectory. The n8n blueprints alone were worth the price."
    },
    {
      id: 5,
      name: "Anita Patel",
      role: "Small Business Owner",
      initials: "AP",
      type: "Business Owner",
      text: "The demos alone were worth 10x the price. I finally understood how to package my skills professionally. I've automated my invoice processing and saved 15 hours a week."
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Freelance Developer",
      initials: "VS",
      type: "Freelancer",
      text: "Within a month, I landed my first ₹1.8L automation contract. The agency blueprint taught me how to pitch value, not just hours. If you want to start an AI agency, this is it."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="reviews" className="relative py-12 md:py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Student Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Real Results. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Real Revenue.
            </span>
          </h2>
          <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
            See how professionals are using Agentic AI to save time and build profitable one-person agencies.
          </p>
        </motion.div>

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
              <div className={`absolute top-6 right-6 px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-bold uppercase tracking-widest border border-neutral-700 ${review.type === "Business Owner" ? "text-cyan-400" : "text-emerald-400"}`}>
                {review.type}
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-[1px] shadow-lg">
                  <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.initials}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">{review.name}</h3>
                  <p className="text-sm font-medium text-emerald-400/80">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />)}
              </div>

              <hr className="border-neutral-800/60" />

              <div className="text-neutral-300 leading-relaxed text-sm md:text-base relative z-10 font-normal tracking-wide italic">"{review.text}"</div>

              <div className="flex justify-end opacity-20 group-hover:opacity-100 transition-opacity">
                {review.type === "Business Owner" ? <Bot className="w-5 h-5 text-cyan-400" /> : <Briefcase className="w-5 h-5 text-emerald-400" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;