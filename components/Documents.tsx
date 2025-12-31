
import React from 'react';
import { DigitalDocument } from '../types';

const documents: DigitalDocument[] = [
  { id: 'D1', name: 'Student_ID_Card.pdf', type: 'PDF', uploadDate: 'Jan 15, 2024', size: '2.4 MB' },
  { id: 'D2', name: 'Annual_Grade_Sheet_2023.pdf', type: 'PDF', uploadDate: 'Dec 20, 2023', size: '1.8 MB' },
  { id: 'D3', name: 'Sports_Certificate.jpg', type: 'Image', uploadDate: 'Nov 05, 2023', size: '4.1 MB' },
  { id: 'D4', name: 'Admission_Form.pdf', type: 'PDF', uploadDate: 'Sep 10, 2023', size: '3.0 MB' },
];

const Documents: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Digital Locker</h2>
          <p className="text-slate-500 mt-1">Access and manage your verified academic documents.</p>
        </div>
        <div className="flex gap-2">
          <label className="cursor-pointer bg-white border border-slate-200 px-6 py-2.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload New
            <input type="file" className="hidden" />
          </label>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
              <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-bold text-slate-800 mb-1 truncate" title={doc.name}>{doc.name}</h4>
            <p className="text-xs text-slate-500 mb-4">{doc.type} • {doc.size}</p>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>{doc.uploadDate}</span>
              <button className="text-indigo-600 hover:text-indigo-800">Download</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold mb-4">Official Document Verification</h3>
          <p className="text-indigo-100 text-lg">Your documents are cryptographically verified by the school administration and recognized by government bodies.</p>
        </div>
        <div className="shrink-0">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
            <svg className="w-12 h-12 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
