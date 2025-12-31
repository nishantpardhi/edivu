
import React, { useState } from 'react';
import { EngineeringBranch } from '../types';

interface Peer {
  id: string;
  name: string;
  branch: EngineeringBranch;
  year: number;
  avatar: string;
  projectsCount: number;
}

const mockPeers: Peer[] = [
  { id: 'p1', name: 'Sarah Miller', branch: 'Computer Science', year: 3, avatar: 'https://i.pravatar.cc/150?u=sarah', projectsCount: 5 },
  { id: 'p2', name: 'David Chen', branch: 'Mechanical', year: 2, avatar: 'https://i.pravatar.cc/150?u=david', projectsCount: 3 },
  { id: 'p3', name: 'Priya Sharma', branch: 'Electronics', year: 4, avatar: 'https://i.pravatar.cc/150?u=priya', projectsCount: 8 },
  { id: 'p4', name: 'Marcus Rodriguez', branch: 'Civil', year: 1, avatar: 'https://i.pravatar.cc/150?u=marcus', projectsCount: 2 },
  { id: 'p5', name: 'Emma Watson', branch: 'Computer Science', year: 2, avatar: 'https://i.pravatar.cc/150?u=emma', projectsCount: 4 },
  { id: 'p6', name: 'John Doe', branch: 'Electrical', year: 3, avatar: 'https://i.pravatar.cc/150?u=john', projectsCount: 6 },
];

const Peers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<EngineeringBranch | 'All'>('All');

  const filteredPeers = mockPeers.filter(peer => {
    const matchesSearch = peer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === 'All' || peer.branch === selectedBranch;
    return matchesSearch && matchesBranch;
  });

  const branches: (EngineeringBranch | 'All')[] = ['All', 'Computer Science', 'Mechanical', 'Civil', 'Electrical', 'Electronics', 'Chemical'];

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Student Directory</h2>
          <p className="text-slate-500 mt-1">Connect with peers across different engineering branches.</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {branches.map(branch => (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                selectedBranch === branch 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {branch}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeers.map(peer => (
          <div key={peer.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <img src={peer.avatar} alt={peer.name} className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{peer.name}</h3>
                <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-lg uppercase tracking-wider">{peer.branch}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-50 mb-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Year</p>
                <p className="text-slate-700 font-semibold">{peer.year === 1 ? '1st' : peer.year === 2 ? '2nd' : peer.year === 3 ? '3rd' : 'Final'} Year</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Projects</p>
                <p className="text-slate-700 font-semibold">{peer.projectsCount} Completed</p>
              </div>
            </div>
            <button className="w-full py-3 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95">
              View Profile
            </button>
          </div>
        ))}
      </div>
      
      {filteredPeers.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
           <p className="text-slate-400 font-medium">No students found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Peers;
