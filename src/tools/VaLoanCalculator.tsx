import { useState } from 'react';

export default function VaLoanCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [rate, setRate] = useState(5.75);
  const [term, setTerm] = useState(30);
  const [firstUse, setFirstUse] = useState(1);
  const [downPct, setDownPct] = useState(0);
  const downAmt=homePrice*downPct/100;const loan=homePrice-downAmt;const fundingPct=firstUse?(downPct>=5?0.015:0.023):(downPct>=5?0.015:0.036);const fundingFee=loan*fundingPct;const totalLoan=loan+fundingFee;const mr=rate/100/12;const n=term*12;const pmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">First Time Use</label><input type="number" value={firstUse} onChange={e=>setFirstUse(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">Funding Fee</p><p className="text-xl font-bold text-blue-700">$${typeof fundingFee==='number'?fundingFee.toFixed(2):fundingFee}</p></div>
      <div><p className="text-sm text-gray-500">Total Loan Amount</p><p className="text-xl font-bold text-blue-700">$${typeof totalLoan==='number'?totalLoan.toFixed(2):totalLoan}</p></div>
      <div><p className="text-sm text-gray-500">Funding Fee Rate</p><p className="text-xl font-bold text-blue-700">{(fundingPct*100).toFixed(1)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
