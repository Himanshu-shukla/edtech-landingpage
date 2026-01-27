import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { TrendingUp, BarChart3 } from 'lucide-react';

const IndustryGrowthSection = () => {
  // WhatsApp Link
  const whatsappLink = "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20FREE%20Data%20Analytics%20Bootcamp.";

  const data = [
    {
      year: '2019',
      value: 23,
      color: '#ef4444', // Red-500
      label: '$23B',
    },
    {
      year: '2026 (Projected)',
      value: 133,
      color: '#10b981', // Emerald-500
      label: '$133B',
    },
  ];

  // Custom Dark Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-900/90 backdrop-blur-md p-4 border border-neutral-700 rounded-xl shadow-2xl">
          <p className="text-sm font-bold text-white mb-1">{label}</p>
          <p className="text-sm font-medium" style={{ color: payload[0].payload.color }}>
            Market Value: <span className="text-white text-lg font-black">${payload[0].value} Billion</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative py-20 px-4 font-sans bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Prepare For High-Paying Roles in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              $133 Billion Data Industry
            </span>
          </h2>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-[2.5rem] p-6 md:p-12 shadow-[0_0_50px_-10px_rgba(16,185,129,0.1)] mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Global Data Analytics Market Growth
            </h3>
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">CAGR: ~25%</span>
          </div>

          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#a3a3a3', fontSize: 14, fontWeight: 'bold' }} 
                  axisLine={false} 
                  tickLine={false}
                  dy={10}
                />
                <YAxis 
                  tick={{ fill: '#525252', fontSize: 12 }} 
                  axisLine={false} 
                  tickLine={false} 
                  label={{ value: 'Market Value (Billion USD)', angle: -90, position: 'insideLeft', fill: '#525252', style: { textAnchor: 'middle' } }} 
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                
                <Bar dataKey="value" radius={[10, 10, 0, 0]} animationDuration={2000}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 1 ? "url(#colorGreen)" : "url(#colorRed)"} 
                      stroke={index === 1 ? "#34d399" : "transparent"}
                      strokeWidth={index === 1 ? 2 : 0}
                    />
                  ))}
                  <LabelList 
                    dataKey="label" 
                    position="top" 
                    fill="#fff" 
                    fontWeight="900" 
                    fontSize={18} 
                    offset={10}
                    formatter={(val) => val}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 p-4 bg-emerald-900/20 border border-emerald-500/20 rounded-xl inline-block">
             <p className="text-emerald-100 font-medium text-sm md:text-base">
                🚀 The industry is growing <strong>6X faster</strong> than average. This is the best time to switch.
             </p>
          </div>
        </motion.div>

        {/* BOTTOM: Pricing & Countdown CTA */}
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

export default IndustryGrowthSection;