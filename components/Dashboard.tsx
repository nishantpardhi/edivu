
import React from 'react';
import { AppView, Notice } from '../types';

interface DashboardProps {
  setView: (view: AppView) => void;
}

const notices: Notice[] = [
  { id: '1', title: 'Final Examination Schedule', content: 'Final exams start from May 15th. Check the timetable in the academic section.', date: '2024-04-20', type: 'urgent', author: 'Dean Office' },
  { id: '2', title: 'Tuition Fee Reminder', content: 'Quarterly fees for Q2 are due by the end of this month.', date: '2024-04-22', type: 'warning', author: 'Accounts Dept' },
  { id: '3', title: 'New Study Resources', content: 'AI suggested resources for Physics have been updated.', date: '2024-04-25', type: 'info', author: 'AI Assistant' },
];

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Welcome, Alex! 👋</h2>
        <p className="text-lg text-slate-500 font-medium">Computer Science Engineering • Year 3 • Semester 6</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-6 hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic Grade</p>
            <h3 className="text-3xl font-black text-slate-900">88.4%</h3>
            <p className="text-xs text-green-600 font-bold mt-1">Excellent performance</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-6 hover:shadow-xl transition-all">
          <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shadow-inner">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Attendance</p>
            <h3 className="text-3xl font-black text-slate-900">94%</h3>
            <p className="text-xs text-amber-600 font-bold mt-1">Slightly below 95% goal</p>
          </div>
        </div>

        <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl shadow-indigo-200 flex flex-col gap-6 text-white transform hover:-translate-y-2 transition-all">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Next Fee Payment</p>
            <h3 className="text-3xl font-black">$1,250</h3>
            <p className="text-xs text-white/80 font-bold mt-1">Due in 5 days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notifications Section */}
        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900">Notice Board</h3>
            <button className="text-indigo-600 text-sm font-bold hover:underline uppercase tracking-widest">Latest Updates</button>
          </div>
          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex gap-6 hover:bg-white hover:shadow-lg transition-all">
                <div className={`mt-1 w-3 h-3 rounded-full shrink-0 ${
                  notice.type === 'urgent' ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse' : 
                  notice.type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500'
                }`} />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-slate-800">{notice.title}</h4>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{notice.date}</span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-medium">{notice.content}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-widest">
                      From: {notice.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-black text-slate-900 px-2">Essential Tools</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setView(AppView.AI_STUDY)}
              className="p-8 bg-slate-900 rounded-[2rem] text-white text-left transition-all active:scale-95 hover:bg-indigo-600 hover:-translate-y-1 shadow-xl shadow-slate-200"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-black text-xl mb-1">AI Study</p>
              <p className="text-xs text-white/60 font-medium">Smart learning roadmap</p>
            </button>

            <button 
              onClick={() => setView(AppView.PEERS)}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] text-slate-900 text-left transition-all active:scale-95 hover:border-indigo-600 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="font-black text-xl mb-1">Peers</p>
              <p className="text-xs text-slate-400 font-medium">Find students in branches</p>
            </button>

            <button 
              onClick={() => setView(AppView.RESUME_BUILDER)}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] text-slate-900 text-left transition-all active:scale-95 hover:border-indigo-600 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="font-black text-xl mb-1">Resume</p>
              <p className="text-xs text-slate-400 font-medium">Auto-build your CV</p>
            </button>

            <button 
              onClick={() => setView(AppView.DOCUMENTS)}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] text-slate-900 text-left transition-all active:scale-95 hover:border-indigo-600 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <p className="font-black text-xl mb-1">Digilocker</p>
              <p className="text-xs text-slate-400 font-medium">Verify your documents</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
