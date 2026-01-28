import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Bot, Briefcase } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Oliver Bennett",
      role: "Automation Consultant",
      initials: "OB",
      type: "Bootcamp Graduate",
      rating: 4.5,
      text: "The client case studies were extremely practical. I secured a £4,500 automation project within three weeks. Some parts were intense, but the value delivered was outstanding."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "SME Business Owner",
      initials: "SW",
      type: "Business Owner",
      rating: 5,
      text: "I automated our lead follow-ups and invoice processing in under a month. It honestly feels like hiring an extra operations manager. Easily one of the best investments I’ve made."
    },
    {
      id: 3,
      name: "Daniel Foster",
      role: "Digital Marketing Consultant",
      initials: "DF",
      type: "Freelancer",
      rating: 4,
      text: "Very hands-on and practical. I needed to rewatch a few sessions, but I’ve since built a LinkedIn outreach agent that clients are paying for monthly."
    },
    {
      id: 4,
      name: "Aisha Khan",
      role: "Software Engineer",
      initials: "AK",
      type: "Bootcamp Graduate",
      rating: 5,
      text: "From basic workflows to pitching a £9,000 AI agent solution — this bootcamp completely changed how I approach consulting. The n8n frameworks alone are gold."
    },
    {
      id: 5,
      name: "James Thornton",
      role: "Operations Manager",
      initials: "JT",
      type: "Business Owner",
      rating: 4.5,
      text: "The automation demos were brilliant. It took some effort to adapt them to my industry, but I’m now saving 12–15 hours a week across operations."
    },
    {
      id: 6,
      name: "Emily Carter",
      role: "Freelance Developer",
      initials: "EC",
      type: "Freelancer",
      rating: 5,
      text: "Within a month, I signed my first £14,000 automation contract. The biggest takeaway was learning how to sell outcomes instead of hours."
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
        ))}
        {halfStar && (
          <Star
            className="w-4 h-4 text-emerald-500"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-neutral-300" />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="relative py-12 md:py-24 px-4 bg-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold mb-8">
            <ShieldCheck className="w-5 h-5" />
            <span>Verified UK Participant Feedback</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight">
            What UK Professionals Say About Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              2-Day Live Agentic AI Bootcamp
            </span>
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="relative break-inside-avoid bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-5 hover:border-emerald-300 hover:shadow-xl"
            >
              <div className="absolute top-6 right-6 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-100 text-emerald-700">
                {review.type}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-[1px]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-emerald-700">
                    {review.initials}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{review.name}</h3>
                  <p className="text-sm font-semibold text-emerald-600">{review.role}</p>
                </div>
              </div>

              {renderStars(review.rating)}

              <p className="text-neutral-600 italic leading-relaxed">
                “{review.text}”
              </p>

              <div className="flex justify-end opacity-20">
                {review.type === "Business Owner" ? (
                  <Bot className="w-5 h-5 text-cyan-600" />
                ) : (
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
