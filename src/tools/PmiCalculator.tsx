import { useState } from 'react';

export default function PmiCalculator() {

  const [homePrice, setHomePrice] = useState(350000);
  const [downPct, setDownPct] = useState(10);
  const [pmiRate, setPmiRate] = useState(0.5);
  const downAmt = homePrice * downPct / 100;
  const loanAmt = homePrice - downAmt;
  const ltv = loanAmt / homePrice * 100;
  const annualPMI = loanAmt * pmiRate / 100;
  const monthlyPMI = annualPMI / 12;
  const needsPMI = ltv > 80;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price ($)</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" step="1" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">PMI Rate (%)</label><input type="number" step="0.1" value={pmiRate} onChange={e=>setPmiRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-yellow-50 rounded-xl p-6">
      {needsPMI ? (<><p className="text-sm text-gray-500">Estimated Monthly PMI</p><p className="text-3xl font-bold text-yellow-700">${monthlyPMI.toFixed(2)}/mo</p><p className="text-sm text-gray-500 mt-2">Annual PMI: ${annualPMI.toFixed(0)} | LTV: {ltv.toFixed(1)}%</p><p className="text-sm text-gray-400 mt-2">PMI can be removed when LTV reaches 80%. You need ${(homePrice*0.2-downAmt).toFixed(0)} more in equity.</p></>) : (<p className="text-lg font-semibold text-green-700">No PMI required! Your LTV is {ltv.toFixed(1)}% (under 80%).</p>)}
    </div>
  </div>);
}
