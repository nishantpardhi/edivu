
import React, { useState } from 'react';
import { FeeRecord } from '../types';

const mockFees: FeeRecord[] = [
  { id: 'F1', title: 'Tuition Fee - Quarter 2', amount: 1200, dueDate: 'May 30, 2024', status: 'pending' },
  { id: 'F2', title: 'Laboratory Fee', amount: 150, dueDate: 'May 15, 2024', status: 'pending' },
  { id: 'F3', title: 'Library Fee', amount: 50, dueDate: 'Apr 10, 2024', status: 'paid' },
  { id: 'F4', title: 'Tuition Fee - Quarter 1', amount: 1200, dueDate: 'Jan 30, 2024', status: 'paid' },
];

const Fees: React.FC = () => {
  const [selectedFee, setSelectedFee] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPending = mockFees
    .filter(f => f.status === 'pending')
    .reduce((sum, f) => sum + f.amount, 0);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment Successful! A receipt has been sent to your email.');
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Fees & Payments</h2>
          <p className="text-slate-500 mt-1">Manage your academic financial records.</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl flex flex-col items-end">
          <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Total Outstanding</p>
          <h3 className="text-3xl font-black text-indigo-700">${totalPending}</h3>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold mb-4">Payment Schedule</h3>
          {mockFees.map((fee) => (
            <div 
              key={fee.id}
              onClick={() => fee.status === 'pending' && setSelectedFee(fee.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedFee === fee.id 
                  ? 'border-indigo-500 bg-indigo-50/50 ring-2 ring-indigo-200' 
                  : 'border-slate-100 bg-white hover:border-slate-300'
              } ${fee.status === 'paid' ? 'opacity-80' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    fee.status === 'paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {fee.status === 'paid' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{fee.title}</h4>
                    <p className="text-sm text-slate-500">Due Date: {fee.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-slate-800">${fee.amount}</p>
                  <span className={`text-xs font-bold uppercase tracking-widest ${
                    fee.status === 'paid' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {fee.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl shadow-slate-200 sticky top-24">
            <h3 className="text-lg font-bold mb-6">Payment Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Selected Items</span>
                <span>{selectedFee ? '1' : '0'}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Processing Fee</span>
                <span>$0.00</span>
              </div>
              <div className="h-px bg-slate-800 my-4" />
              <div className="flex justify-between items-end">
                <span className="text-slate-400">Total Payable</span>
                <span className="text-2xl font-black text-white">
                  ${selectedFee ? mockFees.find(f => f.id === selectedFee)?.amount : '0.00'}
                </span>
              </div>
            </div>
            
            <button 
              disabled={!selectedFee || isProcessing}
              onClick={handlePayment}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                !selectedFee || isProcessing 
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                  : 'bg-indigo-500 hover:bg-indigo-400 text-white active:scale-95'
              }`}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Proceed to Pay'}
            </button>
            <p className="text-[10px] text-slate-500 text-center mt-4">
              Secure SSL Encrypted Payment. Powered by Stripe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
