import { useState } from 'react';

export default function RefinanceCalculator() {

  const [balance, setBalance] = useState(280000);
  const [currentRate, setCurrentRate] = useState(7.0);
  const [newRate, setNewRate] = useState(6.0);
  const [remainYears, setRemainYears] = useState(25);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5000);
  const calc = (b:number,r:number,n:number) => { const mr=r/100/12; return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n; };
  const currentPmt = calc(balance, currentRate, remainYears*12);
  const newPmt = calc(balance+closingCosts, newRate, newTerm*12);
  const monthlySavings = currentPmt - newPmt;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Loan Balance ($)</label><input type="number" value={balance} onChange={e=>setBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Interest Rate (%)</label><input type="number" step="0.1" value={currentRate} onChange={e=>setCurrentRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Interest Rate (%)</label><input type="number" step="0.1" value={newRate} onChange={e=>setNewRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Remaining Years on Current Loan</label><input type="number" value={remainYears} onChange={e=>setRemainYears(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Loan Term (years)</label><input type="number" value={newTerm} onChange={e=>setNewTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Closing Costs ($)</label><input type="number" value={closingCosts} onChange={e=>setClosingCosts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-green-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Current Payment</p><p className="text-xl font-bold">${currentPmt.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">New Payment</p><p className="text-xl font-bold text-green-700">${newPmt.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Savings</p><p className="text-xl font-bold text-green-700">${monthlySavings.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Break-Even</p><p className="text-xl font-bold">{breakEvenMonths} months</p></div>
    </div>
  </div>);
}
