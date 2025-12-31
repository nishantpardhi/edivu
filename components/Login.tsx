
import React from 'react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">EduPulse <span className="text-indigo-600">AI</span></h1>
          </div>
          <h2 className="text-5xl font-black text-slate-800 leading-tight">Empowering education with intelligence.</h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Welcome to the future of campus management. Connect, study, and grow with our AI-powered student portal.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">Who are you?</h3>
            <p className="text-slate-500 mt-2">Please select your portal to continue</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={() => onLogin(UserRole.STUDENT)}
              className="group p-6 bg-slate-50 border-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50 rounded-3xl transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900">Student</h4>
                  <p className="text-sm text-slate-500">Access grades, projects & fees</p>
                </div>
              </div>
            </button>

            <button 
              onClick={() => onLogin(UserRole.ADMIN)}
              className="group p-6 bg-slate-50 border-2 border-transparent hover:border-indigo-600 hover:bg-indigo-50 rounded-3xl transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900">Authority</h4>
                  <p className="text-sm text-slate-500">Manage campus, notices & fees</p>
                </div>
              </div>
            </button>
          </div>

          <p className="text-center text-xs text-slate-400 font-medium">
            By continuing, you agree to our <span className="underline">Terms of Service</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
