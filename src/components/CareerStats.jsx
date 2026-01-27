import React from 'react';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';

const CareerStats = () => {
  return (
    <section className="py-12 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-emerald-500 mb-2">
                <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">16,000+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Professionals Trained</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">30+ Hrs</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Saved Per Week</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">₹2L+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Potential Client Value</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Award className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">100%</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Refund Guarantee</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerStats;