import { useState } from 'react';

export default function DownPaymentCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPct, setDownPct] = useState(20);
  const downAmt=homePrice*downPct/100;const loanAmt=homePrice-downAmt;const needsPMI=downPct<20;const pmiMonthly=needsPMI?loanAmt*0.005/12:0;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment %</label><input type="number" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Down Payment Amount</p><p className="text-xl font-bold text-blue-700">$${typeof downAmt==='number'?downAmt.toFixed(2):downAmt}</p></div>
      <div><p className="text-sm text-gray-500">Loan Amount</p><p className="text-xl font-bold text-blue-700">$${typeof loanAmt==='number'?loanAmt.toFixed(2):loanAmt}</p></div>
      <div><p className="text-sm text-gray-500">Monthly PMI</p><p className="text-xl font-bold text-blue-700">$${typeof pmiMonthly==='number'?pmiMonthly.toFixed(2):pmiMonthly}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
