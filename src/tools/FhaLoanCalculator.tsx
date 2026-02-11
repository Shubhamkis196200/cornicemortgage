import { useState } from 'react';

export default function FhaLoanCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPct, setDownPct] = useState(3.5);
  const [rate, setRate] = useState(6);
  const [term, setTerm] = useState(30);
  const downAmt=homePrice*downPct/100;const baseLoan=homePrice-downAmt;const upfrontMIP=baseLoan*0.0175;const totalLoan=baseLoan+upfrontMIP;const annualMIP=downPct<10?totalLoan*0.0055:totalLoan*0.005;const monthlyMIP=annualMIP/12;const mr=rate/100/12;const n=term*12;const basePmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;const totalPmt=basePmt+monthlyMIP;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" step="0.1" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment (with MIP)</p><p className="text-xl font-bold text-blue-700">$${typeof totalPmt==='number'?totalPmt.toFixed(2):totalPmt}</p></div>
      <div><p className="text-sm text-gray-500">Base P&I</p><p className="text-xl font-bold text-blue-700">$${typeof basePmt==='number'?basePmt.toFixed(2):basePmt}</p></div>
      <div><p className="text-sm text-gray-500">Monthly MIP</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyMIP==='number'?monthlyMIP.toFixed(2):monthlyMIP}</p></div>
      <div><p className="text-sm text-gray-500">Upfront MIP</p><p className="text-xl font-bold text-blue-700">$${typeof upfrontMIP==='number'?upfrontMIP.toFixed(2):upfrontMIP}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
