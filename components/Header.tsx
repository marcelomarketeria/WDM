
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 md:px-10 py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black italic tracking-tighter text-brand-orange">WDM</span>
                <div className="h-6 w-[2px] bg-brand-gray rotate-12 mx-1"></div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-black leading-none tracking-tight uppercase italic text-primary">
                    World Discount<br />
                    <span className="text-[10px] tracking-widest text-primary/80">Merchandise</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-bold uppercase tracking-wider hover:text-brand-orange transition-colors" href="#formats">Buying Formats</a>
            <a className="text-sm font-bold uppercase tracking-wider hover:text-brand-orange transition-colors" href="#brands">Brands</a>
            <a className="text-sm font-bold uppercase tracking-wider hover:text-brand-orange transition-colors" href="#sale">Saturday Sale</a>
            <a className="text-sm font-bold uppercase tracking-wider hover:text-brand-orange transition-colors" href="#location">Location</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Warehouse Direct</span>
            <span className="text-sm font-black text-primary">210-555-0123</span>
          </div>
          <button className="bg-primary text-white px-6 py-2.5 text-sm font-black uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center gap-2">
            Visit Our Warehouse <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
