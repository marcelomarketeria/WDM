
import React from 'react';

const RetailInventory: React.FC = () => {
  const categories = [
    {
      title: "Home Improvement",
      sub: "Tools, Flooring, Fixtures",
      img: "https://picsum.photos/id/445/600/400"
    },
    {
      title: "Bulk Household",
      sub: "Kitchen, Appliances, Decor",
      img: "https://picsum.photos/id/20/600/400"
    },
    {
      title: "Apparel & Goods",
      sub: "Designer Clothing & More",
      img: "https://picsum.photos/id/21/600/400"
    }
  ];

  return (
    <section className="px-4 md:px-10 py-16 max-w-[1280px] mx-auto" id="brands">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-brand-orange font-black uppercase text-sm tracking-widest mb-2">Authenticated Overstock</p>
          <h3 className="text-4xl font-black uppercase italic border-l-4 border-primary pl-6">Major Retail Inventory</h3>
        </div>
        <p className="text-slate-500 max-w-md">We specialize in liquidation from the biggest names in home improvement and department store retail.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="group relative aspect-video rounded-xl overflow-hidden shadow-sm">
            <img 
              alt={cat.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={cat.img} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-black uppercase italic">{cat.title}</h4>
              <p className="text-brand-orange text-xs font-bold uppercase tracking-widest">{cat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailInventory;
