
import React, { useState } from 'react';
import { polishResumeContent } from '../services/geminiService';

const ResumeBuilder: React.FC = () => {
  const [summary, setSummary] = useState('Enthusiastic Computer Science student passionate about IoT and Machine Learning. Eager to solve real-world problems through technology.');
  const [isPolishing, setIsPolishing] = useState(false);

  const handlePolish = async () => {
    setIsPolishing(true);
    const result = await polishResumeContent(summary);
    if (result) setSummary(result);
    setIsPolishing(false);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">AI Resume Builder</h2>
          <p className="text-slate-500 mt-1">Export a professional resume from your student profile.</p>
        </div>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-transform flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0L8 8m4-4v12" />
          </svg>
          Export PDF
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Side */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
               <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Professional Summary</label>
               <button 
                 onClick={handlePolish}
                 disabled={isPolishing}
                 className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline"
               >
                 <svg className={`w-4 h-4 ${isPolishing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
                 {isPolishing ? 'Polishing...' : 'Polish with AI'}
               </button>
            </div>
            <textarea 
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none font-medium text-slate-700 leading-relaxed"
              rows={5}
            />
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold">Resume Sections</h3>
            <p className="text-sm text-slate-500">Toggle sections you want to include in your exported resume.</p>
            <div className="grid grid-cols-1 gap-3">
               {[
                 { label: 'Academic Grades (Recent)', checked: true },
                 { label: 'Technical Projects', checked: true },
                 { label: 'Achievements & Awards', checked: true },
                 { label: 'Engineering Branch Details', checked: true },
                 { label: 'Digital Credentials (Links)', checked: false }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-700">{item.label}</span>
                    <input type="checkbox" checked={item.checked} className="w-5 h-5 accent-indigo-600" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Preview Side */}
        <div className="bg-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
           {/* Watermark/Mockup Effect */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
           
           <div className="bg-white min-h-[700px] w-full shadow-2xl rounded-sm p-10 flex flex-col gap-8 text-slate-800 origin-top scale-[0.9] md:scale-100">
              <header className="border-b-2 border-slate-900 pb-6 flex justify-between items-end">
                 <div>
                    <h1 className="text-3xl font-black uppercase tracking-tighter">Alex Johnson</h1>
                    <p className="text-indigo-600 font-bold">Computer Science Engineer</p>
                 </div>
                 <div className="text-[10px] text-right text-slate-400 font-bold uppercase tracking-widest">
                    alex.j@school.edu<br/>
                    +1 555 0123 456
                 </div>
              </header>

              <section>
                 <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Professional Summary</h2>
                 <p className="text-sm leading-relaxed text-slate-600 font-medium">{summary}</p>
              </section>

              <section>
                 <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Core Projects</h2>
                 <div className="space-y-4">
                    <div>
                       <h3 className="text-sm font-bold flex justify-between">
                          <span>Solar Powered Smart Grid</span>
                          <span className="text-xs font-normal text-slate-400 italic">May 2023 - Present</span>
                       </h3>
                       <p className="text-xs text-slate-500 mt-1 italic">Technologies: Arduino, React Native, Firebase</p>
                       <p className="text-xs text-slate-600 mt-2 leading-relaxed">Engineered a real-time IoT solution for tracking renewable energy consumption, resulting in 15% efficiency gain in test environments.</p>
                    </div>
                    <div>
                       <h3 className="text-sm font-bold flex justify-between">
                          <span>AI Trash Sorter</span>
                          <span className="text-xs font-normal text-slate-400 italic">Jan 2023 - April 2023</span>
                       </h3>
                       <p className="text-xs text-slate-500 mt-1 italic">Technologies: Python, PyTorch, OpenCV</p>
                       <p className="text-xs text-slate-600 mt-2 leading-relaxed">Developed a computer vision model that successfully categorized 5 types of waste with 92% accuracy.</p>
                    </div>
                 </div>
              </section>

              <section>
                 <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Education & Achievements</h2>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <p className="text-xs font-bold">B.Tech in Computer Science</p>
                       <p className="text-[10px] text-slate-500 italic">Expected Graduation 2025</p>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-indigo-600">GPA: 3.8/4.0</p>
                       <p className="text-[10px] text-slate-500 italic">Dean's List (3 Consecutive Semesters)</p>
                    </div>
                 </div>
              </section>
           </div>
           
           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent flex items-end justify-center pb-8">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs text-white font-bold border border-white/20">
                Interactive Preview Mode
              </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
