
import React from 'react';

const WarehouseAccess: React.FC = () => {
  return (
    <section className="px-4 md:px-10 py-20 max-w-[1280px] mx-auto" id="location">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <h3 className="text-4xl font-black uppercase italic mb-6 border-l-4 border-brand-orange pl-6">Warehouse Access</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-slate-100 rounded">location_on</span>
                <div>
                  <h4 className="font-black uppercase text-sm">Address</h4>
                  <p className="text-slate-500 font-medium">8400 Northeast Loop 410,<br />San Antonio, TX 78239</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-slate-100 rounded">calendar_month</span>
                <div className="w-full">
                  <h4 className="font-black uppercase text-sm mb-2">Operational Hours</h4>
                  <div className="space-y-1 text-sm text-slate-500">
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span>Mon - Fri</span>
                      <span className="font-bold text-slate-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span>Saturday</span>
                      <span className="font-bold text-brand-orange italic">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Sunday</span>
                      <span className="font-bold text-slate-400 uppercase tracking-tighter">CLOSED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-l-4 border-primary bg-slate-50">
            <h4 className="font-black uppercase text-xs text-primary mb-2 tracking-widest">Reseller Notice</h4>
            <p className="text-sm text-slate-500 italic">"Please bring your TX Sales Tax ID if you are purchasing for resale to avoid sales tax on your bulk orders."</p>
          </div>
        </div>
        <div className="lg:col-span-7 h-[500px] rounded-2xl overflow-hidden relative shadow-inner border border-slate-200">
          <img 
            alt="Map Location" 
            className="w-full h-full object-cover grayscale opacity-60" 
            src="https://picsum.photos/id/102/1200/800"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-2xl flex items-center gap-4 border border-slate-100">
              <div className="bg-brand-orange p-3 rounded-full text-white">
                <span className="material-symbols-outlined">warehouse</span>
              </div>
              <div>
                <p className="font-black uppercase italic tracking-tight text-primary">World Discount Merchandise</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">San Antonio Logistics District</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="bg-primary text-white px-4 py-2 rounded text-xs font-black uppercase shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">directions</span> Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseAccess;
