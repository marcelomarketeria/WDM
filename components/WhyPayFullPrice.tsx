
import React from 'react';

const WhyPayFullPrice: React.FC = () => {
  return (
    <section className="px-4 md:px-10 py-20 bg-white max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-black uppercase tracking-tight leading-none italic border-l-4 border-brand-orange pl-6">
            Why Pay Full Price?
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 flex items-center justify-center rounded text-brand-orange">
                <span className="material-symbols-outlined font-bold">trending_up</span>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-1">Retail Inflation</h4>
                <p className="text-slate-500">Traditional retailers mark up prices by 100-300% to cover expensive malls and advertising. You pay for their overhead.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 flex items-center justify-center rounded text-primary">
                <span className="material-symbols-outlined font-bold">sync_alt</span>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-1">The Liquidation Advantage</h4>
                <p className="text-slate-500">We buy overstock, shelf pulls, and customer returns by the truckload and pass the direct savings to you in San Antonio.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary p-10 rounded-xl text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">receipt_long</span>
          </div>
          <h4 className="text-4xl font-black italic uppercase mb-6">Direct Savings</h4>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Retail Store Price</span>
              <span className="line-through text-white/60">$1,299.00</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Our Warehouse Price</span>
              <span className="font-black text-2xl text-brand-orange">$449.00</span>
            </div>
            <div className="pt-4 font-bold text-brand-orange uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined">verified</span> Total Savings: 65% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPayFullPrice;
