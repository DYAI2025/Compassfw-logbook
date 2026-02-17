
import React from 'react';
import { LogEntry } from '../types';

interface ArticleProps {
  entry: LogEntry;
}

const Article: React.FC<ArticleProps> = ({ entry }) => {
  // Split content to find the first line (subheading) if it exists
  const lines = entry.content.split('\n');
  const subHeading = lines[0];
  const mainContent = lines.slice(1).join('\n');

  return (
    <article className="relative mb-24 max-w-4xl mx-auto group animate-reveal">
      {/* Paper Card */}
      <div className="bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.06)] rounded-2xl p-8 md:p-16 relative overflow-hidden border border-[#333333]/5 backdrop-blur-sm">
        {/* Subtle Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/handmade-paper.png')" }} />
        
        <header className="relative z-10 mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-slate-200 flex-1" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
              {entry.date} • Written By {entry.author}
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#333333] mb-6 font-serif-elegant leading-none">
            {entry.title}
          </h2>
          
          {subHeading && (
            <h3 className="text-2xl md:text-4xl font-bold text-[#facb13] font-serif-elegant max-w-2xl mx-auto leading-tight italic">
              {subHeading}
            </h3>
          )}
        </header>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-lg md:text-xl leading-[1.8] text-[#333333]/80 whitespace-pre-line text-left font-sans font-medium">
            {mainContent || entry.content}
          </div>
          
          {/* Subtle Nautical Chart Graphic Placeholder */}
          <div className="my-16 p-8 border border-dashed border-slate-200 rounded-2xl bg-slate-50 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#facb13]" />
                <span className="w-48 h-2 bg-slate-200 rounded-full" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-64 h-2 bg-slate-200 rounded-full" />
              </div>
              <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-4">Nautical Effort Mapping Chart</p>
            </div>
          </div>
        </div>

        <footer className="relative z-10 mt-20 flex items-center justify-center gap-6">
          <div className="h-[1px] bg-slate-100 flex-1" />
          <div className="text-center px-4">
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 mb-2 font-black">Authorized By</p>
            <span className="font-script text-4xl text-[#333333] block opacity-90">{entry.author}</span>
          </div>
          <div className="h-[1px] bg-slate-100 flex-1" />
        </footer>
      </div>

      {/* Info bar at bottom */}
      <div className="mt-8 flex justify-between items-center px-4">
        <div className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-bold">
           Pos: <span className="text-slate-600">{entry.coordinates}</span>
        </div>
        <div className="flex gap-4 text-[9px] uppercase tracking-[0.2em] font-black text-slate-300">
           <span>#Logbook</span>
           <span>#MaritimeAgility</span>
           <span>#AdmiraltyRecords</span>
        </div>
      </div>
    </article>
  );
};

export default Article;
