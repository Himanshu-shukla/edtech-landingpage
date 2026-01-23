import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Check, Sparkles, Award } from 'lucide-react';

const InstructorSection = () => {
  return (
    <section className="relative py-24 px-4 bg-neutral-950 font-sans overflow-hidden">
      
      {/* Ambient Aceternity Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Spotlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Floating Shimmer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 text-white shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] mb-[-24px] z-20 max-w-2xl w-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></span>
          <p className="relative font-bold text-sm md:text-base leading-tight text-center flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300 hidden md:block" />
            <span>Don't Get Replaced By AI. <span className="text-yellow-300 underline underline-offset-4 decoration-yellow-300/50">Grow 10x With AI.</span></span>
          </p>
        </motion.div>

        {/* Main 3D Tilt Card */}
        <TiltCard>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Column: Image with Glow */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl">
                 {/* Replace with actual instructor image */}
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Ankit Maheshwari" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 rounded-xl p-3 flex items-center gap-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-medium">Recognized By</p>
                    <p className="text-sm font-bold text-white">NASSCOM Top 50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 text-left">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                  <span>MEET YOUR COACH</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                    Ankit Maheshwari
                  </span>
                </h3>
                
                <p className="text-amber-400/90 text-sm md:text-base font-medium mb-8 border-l-2 border-amber-500 pl-4 tracking-wide">
                  AI Entrepreneur of the Year 2024 | Serial Tech Founder | Data Science Pioneer
                </p>
              </motion.div>

              {/* Achievements List (Staggered) */}
              <ul className="space-y-4">
                <ListItem delay={0.1}>
                  Led AI & Data Innovations Recognized By <span className="text-amber-400 font-semibold">NASSCOM's Top 50 Emerging IT Companies</span>
                </ListItem>
                
                <ListItem delay={0.2}>
                  Named Among <span className="text-amber-400 font-semibold">India's Top 30 Young Entrepreneurs</span> By BusinessWorld
                </ListItem>
                
                <ListItem delay={0.3}>
                  Founder Of <span className="text-amber-400 font-semibold">1to10x</span>, Sharing Battle-Tested AI Strategies & Career Insights
                </ListItem>
                
                <ListItem delay={0.4}>
                  Expert In <span className="text-amber-400 font-semibold">What Top Companies Seek In AI Professionals</span>
                </ListItem>
              </ul>

            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};

// Sub-component: Animated List Item
const ListItem = ({ children, delay }) => (
  <motion.li 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-800/50 transition-colors duration-300"
  >
    <div className="mt-0.5 flex-shrink-0 bg-blue-500/10 p-1.5 rounded-full border border-blue-500/30">
      <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
    </div>
    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
      {children}
    </p>
  </motion.li>
);

// Sub-component: 3D Mouse Tilt Card Container
const TiltCard = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="w-full bg-neutral-900/80 backdrop-blur-xl rounded-[2.5rem] border border-neutral-800 shadow-2xl overflow-hidden relative"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

// Add this to your useTransform imports if needed:
import { useTransform } from 'framer-motion';

export default InstructorSection;