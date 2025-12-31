
import React from 'react';
import { AppView, UserRole } from '../types';

interface BottomNavProps {
  role: UserRole;
  activeView: AppView;
  onSelect: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ role, activeView, onSelect }) => {
  const studentTabs = [
    { id: AppView.DASHBOARD, label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: AppView.ACADEMIC, label: 'Progress', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: AppView.AI_STUDY, label: 'AI Study', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { id: AppView.PROFILE, label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  const adminTabs = [
    { id: AppView.DASHBOARD, label: 'Admin', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: AppView.MANAGE_STUDENTS, label: 'Peers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: AppView.DOCUMENTS, label: 'Verify', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  ];

  const tabs = role === UserRole.ADMIN ? adminTabs : studentTabs;

  return (
    <div className={`border-t flex items-center justify-around p-2 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.05)] ${role === UserRole.ADMIN ? 'bg-slate-900' : 'bg-white'}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`flex flex-col items-center gap-1 p-2 min-w-[64px] transition-colors duration-200 ${
            activeView === tab.id 
              ? 'text-indigo-500' 
              : role === UserRole.ADMIN ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
          </svg>
          <span className="text-[10px] font-black leading-none uppercase tracking-tighter">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
