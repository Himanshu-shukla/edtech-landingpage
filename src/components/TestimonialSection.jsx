import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, Sparkles } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Chen",
      role: "Marketing Analyst",
      initials: "SC",
      text: "From SQL newbie to data querying pro in 48 hours—thanks to the Data Analyst Bootcamp! I never thought I'd be so excited about data analysis. The hands-on approach to tackling real business cases made the learning experience incredibly engaging. Huge shoutout to the instructors!"
    },
    {
      id: 2,
      name: "James Wheeler",
      role: "Financial Advisor",
      initials: "JW",
      text: "Just completed the intensive bootcamp, and I'm thoroughly impressed! The course expertly balanced theory with practical application, which is crucial in the finance sector. Learning to use AI agents for web scraping financial data was an unexpected highlight—it's opened up new possibilities for market research.\n\nKudos to the team for a well-structured and insightful program!"
    },
    {
      id: 3,
      name: "Thomas O'Brien",
      role: "Product Manager",
      initials: "TO",
      text: "Just wrapped up the mind-blowing AI Analytics Bootcamp! This 2-day intensive course was exactly what I needed to kickstart my journey. The session on using GPT for Google Sheets was a game-changer—I can already see how it'll streamline our reporting processes. Big shout out to Ankit and his team!"
    },
    {
      id: 4,
      name: "Rudy Rolland",
      role: "Energy Technician",
      initials: "RR",
      text: "I recently attended to improve my data analysis skills for our solar energy projects. The sessions on analyzing weather patterns for energy production were directly applicable to my work. I found the programming parts challenging, but the hands-on exercises were very helpful!"
    },
    {
      id: 5,
      name: "Jake Thompson",
      role: "Cafe Owner",
      initials: "JT",
      text: "Attended the course. Pretty intense 2 days! As a small cafe owner, I was looking for ways to understand my sales data better. The module on visualization helped me create a dashboard to track peak hours and inventory. Highly recommended for small business owners."
    },
    {
      id: 6,
      name: "Devanshu Thakkar",
      role: "Data Analyst",
      initials: "DT",
      text: "I had an amazing experience with the team. The educators are well expertise and well known in the industry. Learn all the core concepts and some tricks to reach out to the problem solutions. Highly recommend this for anyone looking to upskill."
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            AI Skills = Bigger Paychecks. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Hear From Previous Attendees
            </span>
          </h2>
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
              className="break-inside-avoid relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800 shadow-xl flex flex-col gap-5 group transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]"
            >
              {/* Background Quote Icon (Watermark) */}
              <MessageSquareQuote className="absolute top-6 right-6 w-12 h-12 text-neutral-800/50 transition-colors duration-300 group-hover:text-indigo-500/10" />

              {/* User Header */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar with Gradient */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] shadow-lg">
                  <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.initials}
                  </div>
                </div>
                
                {/* Name & Role */}
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-400/80">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Divider Line */}
              <hr className="border-neutral-800/60" />

              {/* Review Text */}
              <div className="text-neutral-300 leading-relaxed text-sm md:text-base whitespace-pre-line relative z-10 font-medium tracking-wide">
                {review.text}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;