import { useState } from 'react';

export default function JumboLoanCalculator() {
  const [loan, setLoan] = useState(800000);
  const [rate, setRate] = useState(6.75);
  const [term, setTerm] = useState(30);
  const [downPct, setDownPct] = useState(20);
  const homePrice=loan/(1-downPct/100);const downAmt=homePrice*downPct/100;const mr=rate/100/12;const n=term*12;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const totalInterest=pmt*n-loan;const isJumbo=loan>766550;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-bold text-blue-700">$${typeof totalInterest==='number'?totalInterest.toFixed(2):totalInterest}</p></div>
      <div><p className="text-sm text-gray-500">Home Price</p><p className="text-xl font-bold text-blue-700">$${typeof homePrice==='number'?homePrice.toFixed(2):homePrice}</p></div>
      <div><p className="text-sm text-gray-500">Jumbo Status</p><p className="text-xl font-bold text-blue-700">{isJumbo?"Yes - Jumbo Loan":"Conforming Loan"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
