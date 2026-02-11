import { useState } from 'react';

export default function PointsComparison() {
  const [loan, setLoan] = useState(280000);
  const [rateNoPoints, setRateNoPoints] = useState(6.5);
  const [rateWithPoints, setRateWithPoints] = useState(6);
  const [pointsCost, setPointsCost] = useState(1);
  const [holdYears, setHoldYears] = useState(7);
  const cost=loan*pointsCost/100;const mr1=rateNoPoints/100/12;const mr2=rateWithPoints/100/12;const n=360;const pmt1=mr1>0?loan*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loan/n;const pmt2=mr2>0?loan*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loan/n;const monthlySaved=pmt1-pmt2;const breakEven=monthlySaved>0?Math.ceil(cost/monthlySaved):0;const totalSaved=monthlySaved*holdYears*12-cost;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Rate without Points (%)</label><input type="number" step="0.1" value={rateNoPoints} onChange={e=>setRateNoPoints(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Rate with Points (%)</label><input type="number" value={rateWithPoints} onChange={e=>setRateWithPoints(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Points Cost (%)</label><input type="number" value={pointsCost} onChange={e=>setPointsCost(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Years You Plan to Stay</label><input type="number" value={holdYears} onChange={e=>setHoldYears(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Points Cost</p><p className="text-xl font-bold text-blue-700">$${typeof cost==='number'?cost.toFixed(2):cost}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Savings</p><p className="text-xl font-bold text-blue-700">$${typeof monthlySaved==='number'?monthlySaved.toFixed(2):monthlySaved}</p></div>
      <div><p className="text-sm text-gray-500">Break-Even</p><p className="text-xl font-bold text-blue-700">$${typeof breakEven==='number'?breakEven.toFixed(2):breakEven} months</p></div>
      <div><p className="text-sm text-gray-500">Net Savings over {holdYears} years</p><p className="text-xl font-bold text-blue-700">$${typeof totalSaved==='number'?totalSaved.toFixed(2):totalSaved}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
