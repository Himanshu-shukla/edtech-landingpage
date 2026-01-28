import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const ExclusiveBonusesSection = () => {
  const whatsappLink =
    "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20and%20claim%20my%20bonuses.";

  const bonuses = [
    {
      id: 1,
      title: "BONUS 1",
      description: "Roadmap to Becoming a 10X Data Analyst",
      img: "https://static.vecteezy.com/system/resources/previews/053/143/940/non_2x/roadmap-icon-logo-sign-set-outline-vector.jpg",
      glow: "hover:shadow-cyan-100",
    },
    {
      id: 2,
      title: "BONUS 2",
      description: "E-books on essential Data Science topics",
      img: "https://img.freepik.com/free-vector/ebooks-collection-library-archive-e-reading-literature-male-cartoon-character-loading-books-ereader-man-putting-novels-covers-bookshelf_335657-3447.jpg",
      glow: "hover:shadow-purple-100",
    },
    {
      id: 3,
      title: "BONUS 3",
      description: "Data Privacy & Security Checklist",
      img: "https://media.istockphoto.com/id/953520974/vector/tick-mark-approved-icon-shield-vector-on-white-background.jpg?s=612x612&w=0&k=20&c=lalLRIXMNvWP6JuqHjoz_h0q-iQXSgOgI5pztVZ6SN8=",
      glow: "hover:shadow-emerald-100",
    },
    {
      id: 4,
      title: "BONUS 4",
      description: "Networking & Collaboration Guide",
      img: "https://cdn.vectorstock.com/i/1000v/69/15/team-collaboration-logo-vector-25686915.jpg",
      glow: "hover:shadow-amber-100",
    },
    {
      id: 5,
      title: "BONUS 5",
      description: "Step-by-step Project Portfolio Guides",
      img: "https://static.vecteezy.com/system/resources/thumbnails/020/815/881/small/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg",
      glow: "hover:shadow-pink-100",
    },
    {
      id: 6,
      title: "BONUS 6",
      description: "Free Bootcamp Attendance Certificate",
      img: "https://img.freepik.com/premium-vector/badge-icon-vector-image-can-be-used-shooting_120816-40993.jpg?semt=ais_user_personalization&w=740&q=80",
      glow: "hover:shadow-orange-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
  id="reviews"
  className="relative pb-8 md:pb-6 px-4 bg-white font-sans overflow-hidden"
>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Gift className="w-3.5 h-3.5" />
            Limited Time Offer
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
            Get Exclusive Bonuses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              (Worth $2,500)
            </span>
          </h2>

          <p className="text-neutral-500 text-lg md:text-xl font-medium">
            Available only for Live Bootcamp Attendees.
          </p>
        </motion.div>

        {/* Bonuses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8"
        >
          {bonuses.map((bonus) => (
            <motion.div
              key={bonus.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-neutral-200 hover:border-neutral-300 transition-all duration-300 group shadow-sm hover:shadow-2xl ${bonus.glow}`}
            >
              <h4 className="text-neutral-400 font-black text-sm uppercase tracking-[0.2em] mb-4 group-hover:text-neutral-900 transition-colors">
                {bonus.title}
              </h4>

              {/* IMAGE ICON */}
              <div className="mb-4 p-6 rounded-full bg-neutral-50 border border-neutral-100 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <img
                  src={bonus.img}
                  alt={bonus.description}
                  className="w-20 h-20 object-contain rounded-full"
                  loading="lazy"
                />
              </div>

              <p className="text-neutral-800 font-bold text-lg md:text-xl leading-snug">
                {bonus.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative py-8"
        >
          <div className="absolute inset-0 bg-emerald-50 blur-[80px] rounded-full pointer-events-none" />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-3xl relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 6 }}
              className="w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-xl md:text-3xl font-black py-8 rounded-3xl shadow-[0_12px_0_rgb(0,100,30)]"
            >
              Register For £99 <span className="line-through mx-2 opacity-70">£299</span>
              <span className="ml-2 bg-yellow-400 text-black px-3 py-1 rounded-lg">
                FREE 2-Day Bootcamp
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveBonusesSection;
