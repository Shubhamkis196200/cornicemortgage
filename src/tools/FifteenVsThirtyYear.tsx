import { useState } from 'react';

export default function FifteenVsThirtyYear() {
  const [loan, setLoan] = useState(280000);
  const [rate15, setRate15] = useState(5.75);
  const [rate30, setRate30] = useState(6.5);
  const c=(b:number,r:number,t:number)=>{const mr=r/100/12;const n=t*12;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const pmt15=c(loan,rate15,15);const pmt30=c(loan,rate30,30);const total15=pmt15*180;const total30=pmt30*360;const interestSaved=total30-total15;const pmtDiff=pmt15-pmt30;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">15-Year Rate (%)</label><input type="number" step="0.1" value={rate15} onChange={e=>setRate15(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">30-Year Rate (%)</label><input type="number" step="0.1" value={rate30} onChange={e=>setRate30(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">15-Year Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt15==='number'?pmt15.toFixed(2):pmt15}</p></div>
      <div><p className="text-sm text-gray-500">30-Year Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt30==='number'?pmt30.toFixed(2):pmt30}</p></div>
      <div><p className="text-sm text-gray-500">Payment Difference</p><p className="text-xl font-bold text-blue-700">$${typeof pmtDiff==='number'?pmtDiff.toFixed(2):pmtDiff}</p></div>
      <div><p className="text-sm text-gray-500">Interest Saved with 15-Year</p><p className="text-xl font-bold text-blue-700">$${typeof interestSaved==='number'?interestSaved.toFixed(2):interestSaved}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
