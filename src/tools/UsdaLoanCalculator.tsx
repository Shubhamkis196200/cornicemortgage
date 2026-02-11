import { useState } from 'react';

export default function UsdaLoanCalculator() {
  const [homePrice, setHomePrice] = useState(250000);
  const [rate, setRate] = useState(5.75);
  const [term, setTerm] = useState(30);
  const upfrontFee=homePrice*0.01;const totalLoan=homePrice+upfrontFee;const annualFee=totalLoan*0.0035;const monthlyFee=annualFee/12;const mr=rate/100/12;const n=term*12;const basePmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;const totalPmt=basePmt+monthlyFee;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof totalPmt==='number'?totalPmt.toFixed(2):totalPmt}</p></div>
      <div><p className="text-sm text-gray-500">Base P&I</p><p className="text-xl font-bold text-blue-700">$${typeof basePmt==='number'?basePmt.toFixed(2):basePmt}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Guarantee Fee</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyFee==='number'?monthlyFee.toFixed(2):monthlyFee}</p></div>
      <div><p className="text-sm text-gray-500">Upfront Fee</p><p className="text-xl font-bold text-blue-700">$${typeof upfrontFee==='number'?upfrontFee.toFixed(2):upfrontFee}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
