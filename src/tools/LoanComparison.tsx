import { useState } from 'react';

export default function LoanComparison() {
  const [loan, setLoan] = useState(280000);
  const [rate1, setRate1] = useState(6.5);
  const [term1, setTerm1] = useState(30);
  const [rate2, setRate2] = useState(6);
  const [term2, setTerm2] = useState(15);
  const c=(b:number,r:number,t:number)=>{const mr=r/100/12;const n=t*12;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const pmt1=c(loan,rate1,term1);const pmt2=c(loan,rate2,term2);const total1=pmt1*term1*12;const total2=pmt2*term2*12;const int1=total1-loan;const int2=total2-loan;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan 1 Rate (%)</label><input type="number" step="0.1" value={rate1} onChange={e=>setRate1(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan 1 Term (years)</label><input type="number" value={term1} onChange={e=>setTerm1(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan 2 Rate (%)</label><input type="number" value={rate2} onChange={e=>setRate2(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan 2 Term (years)</label><input type="number" value={term2} onChange={e=>setTerm2(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Loan 1 Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt1==='number'?pmt1.toFixed(2):pmt1}</p></div>
      <div><p className="text-sm text-gray-500">Loan 2 Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt2==='number'?pmt2.toFixed(2):pmt2}</p></div>
      <div><p className="text-sm text-gray-500">Loan 1 Total Interest</p><p className="text-xl font-bold text-blue-700">$${typeof int1==='number'?int1.toFixed(2):int1}</p></div>
      <div><p className="text-sm text-gray-500">Loan 2 Total Interest</p><p className="text-xl font-bold text-blue-700">$${typeof int2==='number'?int2.toFixed(2):int2}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
