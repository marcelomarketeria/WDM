
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 px-4 md:px-10 mt-10 border-t border-slate-900">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex flex-col gap-[2px] w-12 skew-x-[-12deg]">
              <div className="h-2 w-full wdm-logo-stripe-blue"></div>
              <div className="h-2 w-[85%] wdm-logo-stripe-white"></div>
              <div className="h-2 w-[70%] wdm-logo-stripe-red"></div>
            </div>
            <span className="text-6xl font-black italic tracking-tighter text-white">WDM</span>
          </div>
          <div className="text-xl font-black uppercase italic tracking-wider text-white text-center">
            World Discount Merchandise
          </div>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-10 mb-12">
          <a className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline" href="#">Privacy Notice</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline" href="#">Terms and Conditions</a>
        </nav>
        
        <div className="w-full pt-8 border-t border-slate-800/50 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 max-w-2xl mx-auto">
            © 2024 World Discount Merchandise San Antonio. Not affiliated with any retail brands mentioned. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
