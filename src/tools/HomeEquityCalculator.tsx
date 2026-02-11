import { useState } from 'react';

export default function HomeEquityCalculator() {
  const [homeValue, setHomeValue] = useState(450000);
  const [mortgageBalance, setMortgageBalance] = useState(280000);
  const [otherLiens, setOtherLiens] = useState(0);
  const equity=homeValue-mortgageBalance-otherLiens;const equityPct=equity/homeValue*100;const borrowable=homeValue*0.85-mortgageBalance-otherLiens;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Mortgage Balance</label><input type="number" value={mortgageBalance} onChange={e=>setMortgageBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Other Liens ($)</label><input type="number" value={otherLiens} onChange={e=>setOtherLiens(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Total Equity</p><p className="text-xl font-bold text-blue-700">$${typeof equity==='number'?equity.toFixed(2):equity}</p></div>
      <div><p className="text-sm text-gray-500">Equity Percentage</p><p className="text-xl font-bold text-blue-700">{equityPct.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Borrowable Equity (85% LTV)</p><p className="text-xl font-bold text-blue-700">$${typeof borrowable==='number'?borrowable.toFixed(2):borrowable}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
