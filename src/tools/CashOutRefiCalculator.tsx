import { useState } from 'react';

export default function CashOutRefiCalculator() {
  const [homeValue, setHomeValue] = useState(450000);
  const [currentBalance, setCurrentBalance] = useState(250000);
  const [cashOut, setCashOut] = useState(50000);
  const [newRate, setNewRate] = useState(6.5);
  const [newTerm, setNewTerm] = useState(30);
  const newLoan=currentBalance+cashOut;const maxLTV=homeValue*0.8;const allowed=maxLTV>=newLoan;const mr=newRate/100/12;const n=newTerm*12;const pmt=mr>0?newLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):newLoan/n;const totalCost=pmt*n;const ltv=newLoan/homeValue*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Balance</label><input type="number" value={currentBalance} onChange={e=>setCurrentBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Cash Out Amount</label><input type="number" value={cashOut} onChange={e=>setCashOut(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Rate (%)</label><input type="number" step="0.1" value={newRate} onChange={e=>setNewRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Term (years)</label><input type="number" value={newTerm} onChange={e=>setNewTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">New Loan Amount</p><p className="text-xl font-bold text-blue-700">$${typeof newLoan==='number'?newLoan.toFixed(2):newLoan}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">LTV After Refi</p><p className="text-xl font-bold text-blue-700">{ltv.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Total Cost over Term</p><p className="text-xl font-bold text-blue-700">$${typeof totalCost==='number'?totalCost.toFixed(2):totalCost}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
