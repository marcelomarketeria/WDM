
import React from 'react';

const HowToBuy: React.FC = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-slate-100 rounded-3xl max-w-[1280px] mx-auto my-12" id="formats">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-black uppercase italic mb-4">How To Buy</h3>
        <p className="text-slate-500 font-medium">From single items to full truckloads, we serve all buyers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 flex flex-col gap-6 border border-slate-200 hover:shadow-xl transition-shadow group">
          <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">local_shipping</span>
          <div>
            <h4 className="text-xl font-black uppercase italic mb-2">By The Trailer</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Best for volume resellers and retailers. Manifested and unmanifested truckloads straight from the source.</p>
          </div>
          <button className="mt-auto text-primary font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:text-brand-orange">Learn More <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
        
        <div className="bg-white p-8 flex flex-col gap-6 border-2 border-primary shadow-lg relative overflow-hidden group">
          <div className="absolute -right-8 -top-8 bg-brand-orange text-white text-[10px] font-black py-10 px-10 rotate-45">POPULAR</div>
          <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">inventory_2</span>
          <div>
            <h4 className="text-xl font-black uppercase italic mb-2">By The Pallet</h4>
            <p className="text-sm text-slate-500 leading-relaxed">The sweet spot for local eBay, Poshmark, and Facebook Marketplace sellers. Sorted by category or brand.</p>
          </div>
          <button className="mt-auto text-primary font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:text-brand-orange">Current Pallet List <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>

        <div className="bg-white p-8 flex flex-col gap-6 border border-slate-200 hover:shadow-xl transition-shadow group">
          <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">shopping_cart</span>
          <div>
            <h4 className="text-xl font-black uppercase italic mb-2">Individual Units</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Perfect for homeowners and bargain hunters. Walk in and shop our retail floor for massive savings on single items.</p>
          </div>
          <button className="mt-auto text-primary font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:text-brand-orange">Warehouse Directions <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
