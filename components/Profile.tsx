
import React, { useState } from 'react';
import { Project, Achievement } from '../types';

const Profile: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', title: 'Solar Powered Smart Grid', description: 'IoT based monitoring system for household solar consumption.', technologies: ['Arduino', 'React Native', 'Firebase'] },
    { id: '2', title: 'AI Trash Sorter', description: 'Computer vision model to categorize recyclables in real-time.', technologies: ['Python', 'PyTorch', 'OpenCV'] }
  ]);

  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 'a1', title: 'Dean\'s Merit List', issuer: 'Academic Council', date: 'Fall 2023' },
    { id: 'a2', title: 'Winner - City Hackathon', issuer: 'TechInnovate', date: 'Aug 2023' }
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="relative">
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-inner"></div>
        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
            <img src="https://picsum.photos/seed/student1/300/300" className="w-full h-full object-cover" alt="Avatar" />
          </div>
          <div className="mb-2">
            <h2 className="text-3xl font-black text-slate-900">Alex Johnson</h2>
            <p className="text-slate-500 font-medium">Computer Science • Grade 11-B • ID: ST-2024-001</p>
          </div>
        </div>
      </header>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        <div className="md:col-span-2 space-y-8">
          {/* About Me */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Full Name', value: 'Alex Michael Johnson' },
                { label: 'Email Address', value: 'alex.j@school.edu' },
                { label: 'Phone Number', value: '+1 (555) 0123 456' },
                { label: 'Branch', value: 'Computer Science Engineering' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{field.label}</p>
                  <p className="text-slate-800 font-medium">{field.value}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
              Update Information
            </button>
          </section>

          {/* Academic Excellence & Achievements */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
                Achievements
              </h3>
              <button className="text-indigo-600 font-bold text-sm">+ Add Achievement</button>
            </div>
            <div className="space-y-4">
              {achievements.map(ach => (
                <div key={ach.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800">{ach.title}</h4>
                    <p className="text-sm text-slate-500">{ach.issuer}</p>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{ach.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Showcase */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Project Portfolio
              </h3>
              <button className="text-indigo-600 font-bold text-sm">+ Add Project</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map(project => (
                <div key={project.id} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-300 transition-all group">
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{project.title}</h4>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-white rounded-md text-[10px] font-bold text-slate-500 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-lg shadow-indigo-200 sticky top-24">
             <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" />
               </svg>
               AI Resume Helper
             </h4>
             <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
               I can help you phrase your projects and achievements to sound more impressive.
             </p>
             <button className="w-full py-3 bg-white text-indigo-600 font-bold rounded-xl active:scale-95 transition-transform">
               Polish Portfolio
             </button>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
            <h4 className="font-bold text-slate-800 mb-2">Public Profile</h4>
            <p className="text-xs text-slate-500 mb-6">Allow other students from different branches to see your achievements and projects.</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-xs font-bold text-slate-400">Private</span>
              <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-emerald-600">Public</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
