import { useState } from 'react';

export default function BreakEvenRefinance() {
  const [currentPmt, setCurrentPmt] = useState(1900);
  const [newPmt, setNewPmt] = useState(1700);
  const [closingCosts, setClosingCosts] = useState(6000);
  const savings=currentPmt-newPmt;const breakEvenMonths=savings>0?Math.ceil(closingCosts/savings):0;const breakEvenYears=breakEvenMonths/12;const fiveYearSavings=savings*60-closingCosts;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Monthly Payment</label><input type="number" value={currentPmt} onChange={e=>setCurrentPmt(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Monthly Payment</label><input type="number" value={newPmt} onChange={e=>setNewPmt(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Closing Costs</label><input type="number" value={closingCosts} onChange={e=>setClosingCosts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Savings</p><p className="text-xl font-bold text-blue-700">$${typeof savings==='number'?savings.toFixed(2):savings}</p></div>
      <div><p className="text-sm text-gray-500">Break-Even Point</p><p className="text-xl font-bold text-blue-700">{breakEvenMonths+" months ("+breakEvenYears.toFixed(1)+" years)"}</p></div>
      <div><p className="text-sm text-gray-500">5-Year Net Savings</p><p className="text-xl font-bold text-blue-700">$${typeof fiveYearSavings==='number'?fiveYearSavings.toFixed(2):fiveYearSavings}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
