
import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [newNotice, setNewNotice] = useState({ title: '', content: '', type: 'info' as const });

  const stats = [
    { label: 'Total Students', value: '4,280', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-indigo-600' },
    { label: 'Fee Collection', value: '92%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-emerald-600' },
    { label: 'Pending Docs', value: '48', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'bg-amber-600' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Campus Control Center</h2>
        <p className="text-slate-500 font-medium">Monitoring academic performance and operations across 6 engineering branches.</p>
      </header>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-6 group hover:shadow-xl transition-all duration-300">
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-4xl font-black text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notice Board Management */}
        <section className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black">Broadcast Notice</h3>
            <span className="bg-indigo-500/20 text-indigo-400 text-xs font-black uppercase px-3 py-1 rounded-full border border-indigo-500/30">Admin Only</span>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Notice Title</label>
              <input 
                type="text" 
                placeholder="e.g., Annual Sports Meet 2024"
                className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                value={newNotice.title}
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Description</label>
              <textarea 
                rows={4}
                placeholder="Details of the announcement..."
                className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none"
                value={newNotice.content}
                onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {(['info', 'warning', 'urgent'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setNewNotice({...newNotice, type})}
                  className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    newNotice.type === type 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
               Send to All Students
            </button>
          </div>
        </section>

        {/* Branch-wise Performance */}
        <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
           <h3 className="text-2xl font-black text-slate-900 mb-8">Branch Metrics</h3>
           <div className="space-y-6">
              {[
                { name: 'Computer Science', count: 1200, gpa: '3.62', color: 'bg-indigo-600' },
                { name: 'Mechanical Engineering', count: 850, gpa: '3.15', color: 'bg-slate-700' },
                { name: 'Electrical Engineering', count: 920, gpa: '3.42', color: 'bg-amber-500' },
                { name: 'Electronics Engineering', count: 710, gpa: '3.28', color: 'bg-emerald-500' },
              ].map((branch, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                     <div className={`w-3 h-12 ${branch.color} rounded-full`}></div>
                     <div>
                        <h4 className="font-bold text-slate-900">{branch.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{branch.count} Active Students</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-xs font-bold text-slate-400 uppercase">Avg GPA</p>
                     <p className="text-xl font-black text-slate-900">{branch.gpa}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 text-indigo-600 font-black text-sm uppercase tracking-widest hover:underline">
                View Detailed Reports
              </button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
