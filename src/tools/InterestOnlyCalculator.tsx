import { useState } from 'react';

export default function InterestOnlyCalculator() {
  const [loan, setLoan] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [ioPeriod, setIoPeriod] = useState(10);
  const [fullTerm, setFullTerm] = useState(30);
  const ioPmt=loan*rate/100/12;const remainTerm=(fullTerm-ioPeriod)*12;const mr=rate/100/12;const fullPmt=mr>0?loan*(mr*Math.pow(1+mr,remainTerm))/(Math.pow(1+mr,remainTerm)-1):loan/remainTerm;const totalIO=ioPmt*ioPeriod*12;const totalFull=fullPmt*remainTerm;const totalCost=totalIO+totalFull;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest-Only Period (years)</label><input type="number" value={ioPeriod} onChange={e=>setIoPeriod(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Loan Term (years)</label><input type="number" value={fullTerm} onChange={e=>setFullTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Interest-Only Payment</p><p className="text-xl font-bold text-blue-700">$${typeof ioPmt==='number'?ioPmt.toFixed(2):ioPmt}</p></div>
      <div><p className="text-sm text-gray-500">Full Payment After IO</p><p className="text-xl font-bold text-blue-700">$${typeof fullPmt==='number'?fullPmt.toFixed(2):fullPmt}</p></div>
      <div><p className="text-sm text-gray-500">Total IO Period Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalIO==='number'?totalIO.toFixed(2):totalIO}</p></div>
      <div><p className="text-sm text-gray-500">Total Loan Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalCost==='number'?totalCost.toFixed(2):totalCost}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
