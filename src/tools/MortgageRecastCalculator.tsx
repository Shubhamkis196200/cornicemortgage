import { useState } from 'react';

export default function MortgageRecastCalculator() {
  const [currentBalance, setCurrentBalance] = useState(250000);
  const [lumpSum, setLumpSum] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [remainingMonths, setRemainingMonths] = useState(300);
  const newBalance=currentBalance-lumpSum;const mr=rate/100/12;const oldPmt=mr>0?currentBalance*(mr*Math.pow(1+mr,remainingMonths))/(Math.pow(1+mr,remainingMonths)-1):currentBalance/remainingMonths;const newPmt=mr>0?newBalance*(mr*Math.pow(1+mr,remainingMonths))/(Math.pow(1+mr,remainingMonths)-1):newBalance/remainingMonths;const monthlySavings=oldPmt-newPmt;const totalSavings=monthlySavings*remainingMonths;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Balance</label><input type="number" value={currentBalance} onChange={e=>setCurrentBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Lump Sum Payment</label><input type="number" value={lumpSum} onChange={e=>setLumpSum(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Remaining Months</label><input type="number" value={remainingMonths} onChange={e=>setRemainingMonths(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Old Payment</p><p className="text-xl font-bold text-blue-700">$${typeof oldPmt==='number'?oldPmt.toFixed(2):oldPmt}</p></div>
      <div><p className="text-sm text-gray-500">New Payment</p><p className="text-xl font-bold text-blue-700">$${typeof newPmt==='number'?newPmt.toFixed(2):newPmt}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Savings</p><p className="text-xl font-bold text-blue-700">$${typeof monthlySavings==='number'?monthlySavings.toFixed(2):monthlySavings}</p></div>
      <div><p className="text-sm text-gray-500">Total Lifetime Savings</p><p className="text-xl font-bold text-blue-700">$${typeof totalSavings==='number'?totalSavings.toFixed(2):totalSavings}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
