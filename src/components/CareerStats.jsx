import React from 'react';
import { Users, Building2, Briefcase, Star } from 'lucide-react';

const CareerStats = () => {
  return (
    <section className="py-12 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="text-emerald-500 mb-2">
                <Star className="w-6 h-6 fill-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-white">4.1/5</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Trustpilot Score</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">200+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Hiring Partners</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">150+</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Hours of Live Training</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-l border-neutral-800">
             <div className="text-emerald-500 mb-2">
                <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-white">100%</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Job Assistance</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerStats;