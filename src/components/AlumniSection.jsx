import React from 'react';

const AlumniSection = () => {
  const brands = [
    // Row 1
    { name: "Bain & Company", width: 140 },
    { name: "Sony", width: 100 },
    { name: "FedEx", width: 100 },
    { name: "Microsoft", width: 120 },
    { name: "Kraft", width: 90 },
    { name: "Bloomberg", width: 130 },
    { name: "Delta", width: 100 },
    { name: "Keyrus", width: 100 },
    // Row 2
    { name: "Uptime AI", width: 110 },
    { name: "NTT DATA", width: 120 },
    { name: "FedEx", width: 100 }, // Duplicate in original image
    { name: "Solytics", width: 110 },
    { name: "S&P Global", width: 120 },
    { name: "Deutsche Bank", width: 140 },
    { name: "Hanu", width: 90 },
    { name: "Capgemini", width: 120 },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-12">
          Our Alumni Work With These Global Brands
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center opacity-90">
          {brands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="w-full flex justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default group"
            >
              {/* NOTE: I am using a placeholder service here to represent the logos.
                Replace 'src' below with your actual logo file paths (e.g., '/logos/sony.svg').
              */}
              <img 
                src={`https://placehold.co/${brand.width * 2}x80/white/1e3a8a?text=${encodeURIComponent(brand.name)}&font=montserrat`}
                alt={`${brand.name} logo`}
                className="max-h-8 md:max-h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AlumniSection;