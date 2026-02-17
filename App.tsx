
import React, { useState } from 'react';
import Layout from './components/Layout';
import Article from './components/Article';
import { LogEntry } from './types';
import { generateHistoricalEntry } from './services/geminiService';

const App: React.FC = () => {
  const [entries, setEntries] = useState<LogEntry[]>([
    {
      id: '1',
      date: 'Feb 13 • 8 Minute reading',
      title: 'Effort = Effort',
      content: `The Broken Backlog Creation Nowadays

Here's something that keeps showing up across industries: planning departments (or portfolio) that don't talk to the people who actually build the product. And if they do talk, the information doesn't always make it into the plan.

Managers create quarterly plans. Executives approve roadmaps. Stakeholders sign off or promise timelines for delivery. And somewhere, three floors down or two time zones away, a developer team looks at the plan and says:

"Who came up with this? Have they ever seen our current work in progress? This is not possible!"

This isn't a tech problem. It's not an agile problem. It's a century-old management problem dressed up in Jira tickets and Sprint Reviews. And it's where this story starts.

The "How Long Will It Take?" Trap
If you've ever been in a room where someone asks a development team "how much time do you need for this?", you know what happens next. The room gets quiet. Someone says "it depends." Someone else throws out a number that sounds reasonable but has no basis in reality. And the manager writes it down as a commitment. Even worse: the same question asked on another day, with another half of the team, would produce a completely different answer.

That's not planning. That's a system where the output has no connection to the input. How many times has anyone actually delivered quality on a timeline that was set without understanding the real effort involved?

The Principle Behind It All
Effort = effort. No matter where it sits, who it belongs to, or when it has to be done.

It means: stop pretending that effort in another team doesn't count. Stop planning as if your product lives in isolation. Stop asking developers "how long?" and start asking "what's the full picture? What happens before and after?"

When you take this seriously, when you actually map all the effort, across all the teams, across all the dependencies... you can finally make decisions based on reality instead of assumptions.`,
      coordinates: '52° 31\' N, 13° 24\' E',
      weather: 'Overcast, Calm',
      author: 'Zoé Leandra Nagel'
    }
  ]);

  const [newNote, setNewNote] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAddLog = async () => {
    if (!newNote.trim()) return;

    setIsGenerating(true);
    const historicalContent = await generateHistoricalEntry(newNote);
    
    const newEntry: LogEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-GB', { month: 'short', day: 'numeric' }) + ' • New Entry',
      title: 'Observations from the Mast',
      content: historicalContent,
      coordinates: `${(Math.random() * 90).toFixed(2)}° N, ${(Math.random() * 180).toFixed(2)}° W`,
      weather: 'Variable Winds',
      author: 'Zoé Leandra Nagel'
    };

    setEntries([newEntry, ...entries]);
    setNewNote('');
    setIsGenerating(false);
  };

  return (
    <Layout>
      {/* Hero Header Area */}
      <section className="mb-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#333333]/40 font-bold mb-8">
            A Compass to explore the World with a Logbook
        </p>
        <div className="h-px w-24 bg-[#facb13] mx-auto mb-12" />
      </section>

      {/* Main Content Feed */}
      <section className="space-y-32">
        {entries.map((entry) => (
          <Article key={entry.id} entry={entry} />
        ))}
      </section>

      {/* Scribe Interface / Contact Section */}
      <section className="mt-32 max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-md border border-[#333333]/10 p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#facb13]" />
          
          <h3 className="text-serif-elegant text-3xl font-bold mb-8 text-[#333333] text-center">
            If you want to explore what it would look like to turn your planning upside down, get in touch!
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facb13]/50 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
              <input type="email" placeholder="Your email" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facb13]/50 transition-all" />
            </div>
          </div>
          
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message (or start a log entry)</label>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="What's your crew struggling with?"
              className="w-full h-48 bg-white/50 border border-slate-200 p-6 font-serif-elegant text-xl text-[#333333] placeholder:text-[#333333]/30 focus:outline-none focus:border-[#facb13] transition-all resize-none rounded-xl shadow-inner"
            />
          </div>
          
          <div className="mt-8 flex justify-center">
              <button
                  onClick={handleAddLog}
                  disabled={isGenerating || !newNote.trim()}
                  className="bg-[#000000] hover:bg-[#333] text-white px-16 py-4 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] transition-all disabled:opacity-30 shadow-xl hover:-translate-y-1 flex items-center gap-4"
              >
                  {isGenerating ? 'Processing...' : 'Hoist the Flag!'}
                  <span className="text-lg">⚓</span>
              </button>
          </div>
        </div>
      </section>

      {/* Mini Bio Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32 mt-32 pt-24 border-t border-[#333333]/5">
        <div className="flex flex-col items-start">
          <h4 className="font-serif-elegant text-4xl font-bold mb-6 text-[#333333]">Captain Zoé Leandra Nagel</h4>
          <p className="text-[#333333]/60 text-lg leading-relaxed font-medium italic mb-10 max-w-3xl">
            "Agile Coach, Framework Builder, and proud owner of too many nautical metaphors. I help teams find their own way through complexity, no copy-paste solutions, no agile dogma, just what actually works for your crew!"
          </p>
          <div className="relative group">
            <span className="font-script text-6xl text-[#facb13] drop-shadow-sm">Best regards</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
