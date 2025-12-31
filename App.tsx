
import React, { useState } from 'react';
import { AppView, UserRole } from './types';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';

// Student Views
import Dashboard from './components/Dashboard';
import AcademicProgress from './components/AcademicProgress';
import Fees from './components/Fees';
import Documents from './components/Documents';
import AIStudy from './components/AIStudy';
import Profile from './components/Profile';
import Peers from './components/Peers';
import ResumeBuilder from './components/ResumeBuilder';

// Admin Views
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  if (!role) {
    return <Login onLogin={setRole} />;
  }

  const renderView = () => {
    // Shared or Conditional Views
    if (role === UserRole.ADMIN) {
      switch (currentView) {
        case AppView.DASHBOARD: return <AdminDashboard />;
        case AppView.MANAGE_STUDENTS: return <Peers />; // Reuse Peers for directory view
        case AppView.DOCUMENTS: return <Documents />;
        default: return <AdminDashboard />;
      }
    }

    // Student Specific Views
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={setCurrentView} />;
      case AppView.ACADEMIC: return <AcademicProgress />;
      case AppView.FEES: return <Fees />;
      case AppView.DOCUMENTS: return <Documents />;
      case AppView.AI_STUDY: return <AIStudy />;
      case AppView.PROFILE: return <Profile />;
      case AppView.PEERS: return <Peers />;
      case AppView.RESUME_BUILDER: return <ResumeBuilder />;
      default: return <Dashboard setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen sticky top-0">
        <Sidebar role={role} activeView={currentView} onSelect={setCurrentView} onLogout={() => setRole(null)} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-0 overflow-x-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <h1 className="font-bold text-lg text-slate-800">EduPulse</h1>
          </div>
          <button 
            onClick={() => setCurrentView(AppView.PROFILE)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-100"
          >
            <img src={role === UserRole.ADMIN ? "https://i.pravatar.cc/150?u=admin" : "https://picsum.photos/seed/student1/100/100"} alt="Profile" />
          </button>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="mb-4 flex justify-between items-center md:hidden">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
              {role} portal
            </span>
          </div>
          {renderView()}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav role={role} activeView={currentView} onSelect={setCurrentView} />
      </div>
    </div>
  );
};

export default App;
