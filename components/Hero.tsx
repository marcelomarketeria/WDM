
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 py-8 md:px-10 max-w-[1280px] mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Warehouse Inventory" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            src="https://picsum.photos/id/119/1200/800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-3xl flex flex-col gap-6">
          <div className="inline-flex bg-brand-orange text-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] w-fit">
            San Antonio's Premier Liquidator
          </div>
          <h2 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic">
            Get Direct Access to Name-Brand Liquidation
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            Stop paying retail markups. We bring San Antonio business owners and savvy shoppers massive overstock from the nation's biggest home and department retailers.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-brand-orange text-white px-8 py-4 text-base font-black uppercase tracking-widest hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20">
              View Inventory
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-base font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Bulk Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
