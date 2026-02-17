
import React from 'react';
import { CompassRose, Anchor, ShipWheel } from './NauticalDecoration';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Decorative Fixed Elements - Like faded ink stamps on the paper */}
      <CompassRose className="fixed top-10 right-10 w-96 h-96 text-[#333333]/5 pointer-events-none rotate-12" />
      <ShipWheel className="fixed -bottom-20 -left-20 w-[30rem] h-[30rem] text-[#333333]/5 pointer-events-none -rotate-12" />
      <Anchor className="fixed top-1/2 -right-16 w-64 h-64 text-[#333333]/3 pointer-events-none -translate-y-1/2" />
      
      {/* Header - Modern Clean Nautical */}
      <header className="sticky top-0 w-full z-50 bg-[#f4e8d1]/80 backdrop-blur-md border-b border-[#333333]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#333333] flex items-center justify-center rounded-lg">
                <Anchor className="w-6 h-6 text-[#facb13]" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-[#333333] leading-none">LOGBOOK</span>
                <span className="text-[9px] uppercase tracking-widest text-[#333333]/40 font-bold mt-1">Admiralty Records</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-black text-[#333333]/40">
            <a href="#" className="hover:text-[#333333] transition-colors">Chronicle</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Frameworks</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Captain</a>
          </nav>
          
          <button className="bg-[#333333] text-white px-8 py-2.5 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-all shadow-md">
            Consultation
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 relative z-10">
        {children}
      </main>

      {/* Footer - Matched to Screenshot Style */}
      <footer className="bg-[#333333] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h5 className="font-serif-elegant text-4xl mb-6 text-white leading-none">The Logbook</h5>
            <p className="text-white/60 font-medium text-sm leading-relaxed max-w-xs">
              Building frameworks that guide your crews out of chaos and into clarity. Direct, structured and effective record keeping for explorers.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h6 className="uppercase text-[11px] tracking-[0.2em] font-black text-[#facb13]">Headquarters</h6>
            <div className="text-white/60 text-sm leading-relaxed">
              <p>Block Island Sound</p>
              <p>Station 7, Admiralty</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h6 className="uppercase text-[11px] tracking-[0.2em] font-black text-[#facb13]">Scribe Hours</h6>
            <div className="text-white/60 text-sm leading-relaxed">
              <p>Dawn to Dusk</p>
              <p>Every Lunar Cycle</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h6 className="uppercase text-[11px] tracking-[0.2em] font-black text-[#facb13]">Follow the Stars</h6>
            <div className="flex flex-col gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
