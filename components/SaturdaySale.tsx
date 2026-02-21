
import React from 'react';

const SaturdaySale: React.FC = () => {
  return (
    <section className="px-4 md:px-10 py-12 max-w-[1280px] mx-auto" id="sale">
      <div className="sale-banner-gradient rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col gap-4 text-center md:text-left">
          <div className="inline-flex self-center md:self-start bg-white text-primary px-4 py-1 font-black uppercase text-sm tracking-widest italic animate-pulse">
            Weekly Event
          </div>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">Special Saturday Sale</h3>
          <div className="flex items-center justify-center md:justify-start gap-4 text-xl font-bold">
            <span className="material-symbols-outlined">schedule</span>
            <span>10 AM – 2 PM ONLY</span>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="bg-white px-8 py-6 rounded-xl flex flex-col items-center shadow-2xl border-b-8 border-brand-orange">
            <span className="text-sm font-black uppercase tracking-widest text-slate-400">Extra Savings</span>
            <span className="text-5xl font-black italic text-brand-orange">UP TO 50% OFF</span>
            <span className="text-xs font-bold uppercase text-primary">Warehouse-Wide</span>
          </div>
          <p className="text-white/90 text-sm font-medium">Doors open exactly at 10:00 AM. Arrive early!</p>
        </div>
      </div>
    </section>
  );
};

export default SaturdaySale;
