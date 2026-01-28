import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';
import { TrendingUp, BarChart3 } from 'lucide-react';

const IndustryGrowthSection = () => {
  const whatsappLink =
    "https://wa.me/919810249170?text=Hi%2C%20I%20want%20to%20register%20for%20the%20FREE%20Data%20Analytics%20Bootcamp.";

  const data = [
    { year: '2019', value: 23, color: '#dc2626', label: '$23B' },
    { year: '2026 (Proj)', value: 133, color: '#059669', label: '$133B' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 p-2 border border-neutral-200 rounded-lg shadow-lg">
          <p className="text-xs font-bold text-neutral-800">{label}</p>
          <p
            className="text-xs font-medium"
            style={{ color: payload[0].payload.color }}
          >
            Value:{' '}
            <span className="text-neutral-900 font-black">
              ${payload[0].value}B
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative pb-14 md:pb-16 px-4 font-sans bg-neutral-50 text-neutral-900 overflow-hidden border-t border-neutral-200">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-8 md:pt-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black tracking-widest uppercase mb-3">
            <BarChart3 className="w-3 h-3" />
            <span>Market Intelligence</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight tracking-tight text-neutral-900">
            Switch to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
              $133 Billion
            </span>{' '}
            Data Industry
          </h2>
        </motion.div>

        {/* Chart Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-neutral-200 rounded-[1.5rem] p-5 md:p-8 shadow-xl mb-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4 border-b border-neutral-100 pb-2">
            <h3 className="text-sm md:text-base font-bold text-neutral-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Industry Growth Projection
            </h3>
            <span className="text-[10px] font-black text-neutral-400 uppercase">
              CAGR: ~25%
            </span>
          </div>

          <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#737373', fontSize: 11, fontWeight: 'bold' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 1 ? '#10b981' : '#ef4444'}
                    />
                  ))}
                  <LabelList
                    dataKey="label"
                    position="top"
                    fill="#404040"
                    fontWeight="900"
                    fontSize={14}
                    offset={8}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-2.5 bg-emerald-50 border border-emerald-100 rounded-lg inline-block">
            <p className="text-emerald-800 font-bold text-xs md:text-sm">
              🚀 Industry growing <span className="underline decoration-2">6X faster</span> than average
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative py-3"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-md relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-b from-[#00d647] to-[#009933] text-white text-lg md:text-xl font-black py-4 px-6 rounded-2xl shadow-lg flex flex-col items-center gap-1 border-t border-green-300/30"
            >
              <div className="flex items-center gap-2">
                <span>Register Now for £99</span>
                <span className="text-green-900 line-through decoration-red-600 opacity-60 text-sm">
                  £299
                </span>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-black uppercase">
                FREE 2-Day Bootcamp Included
              </span>
            </motion.button>
          </a>

          <div className="w-full max-w-xs mt-4">
            <div className="flex gap-1 h-1.5">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full ${
                    i < 12 ? 'bg-red-500' : 'bg-neutral-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-red-600 text-center font-black text-[10px] mt-2 uppercase tracking-widest animate-pulse">
              🔥 Batch filling fast
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryGrowthSection;
