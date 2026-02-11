import { useState } from 'react';

export default function LtvCalculator() {
  const [loanBalance, setLoanBalance] = useState(280000);
  const [homeValue, setHomeValue] = useState(350000);
  const ltv=loanBalance/homeValue*100;const equity=homeValue-loanBalance;const equityPct=equity/homeValue*100;const needsPMI=ltv>80;const toRemovePMI=Math.max(0,loanBalance-homeValue*0.8);
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Balance</label><input type="number" value={loanBalance} onChange={e=>setLoanBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Loan-to-Value Ratio</p><p className="text-xl font-bold text-blue-700">{ltv.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Equity</p><p className="text-xl font-bold text-blue-700">$${typeof equity==='number'?equity.toFixed(2):equity}</p></div>
      <div><p className="text-sm text-gray-500">Equity Percentage</p><p className="text-xl font-bold text-blue-700">{equityPct.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">$ to Remove PMI</p><p className="text-xl font-bold text-blue-700">$${typeof toRemovePMI==='number'?toRemovePMI.toFixed(2):toRemovePMI}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
