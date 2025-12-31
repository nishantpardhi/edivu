
import React, { useState } from 'react';
import { getStudySuggestions } from '../services/geminiService';

const subjects = ['Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Art'];

const AIStudy: React.FC = () => {
  const [subject, setSubject] = useState('Mathematics');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!goals.trim()) {
      alert("Please tell us about your goals or challenges first!");
      return;
    }
    setLoading(true);
    setSuggestion(null);
    const result = await getStudySuggestions(subject, 85, goals);
    setSuggestion(result || null);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
           </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">AI Study Assistant</h2>
          <p className="text-slate-500">Intelligent guidance based on your academic data.</p>
        </div>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
            <select 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            >
              {subjects.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Goal</label>
            <input 
              placeholder="e.g., Master Calculus, improve grammar..."
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Extra Context (Optional)</label>
          <textarea 
            rows={4}
            placeholder="Tell AI about specific topics you find hard or upcoming exam dates..."
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
          />
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-2xl font-black text-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" />
              </svg>
              Generate Study Plan
            </>
          )}
        </button>
      </div>

      {suggestion && (
        <div className="animate-in zoom-in-95 duration-500 bg-white rounded-3xl shadow-xl border border-indigo-100 p-8 prose prose-slate max-w-none">
          <div className="flex items-center gap-2 text-indigo-600 mb-6 font-bold uppercase tracking-widest text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Personalized Roadmap
          </div>
          <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium">
             {suggestion}
          </div>
        </div>
      )}

      {loading && !suggestion && (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="relative">
             <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-indigo-600 rounded-full animate-pulse"></div>
             </div>
          </div>
          <p className="text-slate-400 animate-pulse font-medium">Analyzing your grades and goals...</p>
        </div>
      )}
    </div>
  );
};

export default AIStudy;
