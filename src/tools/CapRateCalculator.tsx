import { useState } from 'react';

export default function CapRateCalculator() {
  const [propertyValue, setPropertyValue] = useState(400000);
  const [grossIncome, setGrossIncome] = useState(36000);
  const [expenses, setExpenses] = useState(12000);
  const noi=grossIncome-expenses;const capRate=noi/propertyValue*100;const grm=propertyValue/grossIncome;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Property Value</label><input type="number" value={propertyValue} onChange={e=>setPropertyValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Gross Income</label><input type="number" value={grossIncome} onChange={e=>setGrossIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Operating Expenses</label><input type="number" value={expenses} onChange={e=>setExpenses(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Net Operating Income</p><p className="text-xl font-bold text-blue-700">$${typeof noi==='number'?noi.toFixed(2):noi}</p></div>
      <div><p className="text-sm text-gray-500">Cap Rate</p><p className="text-xl font-bold text-blue-700">{capRate.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Gross Rent Multiplier</p><p className="text-xl font-bold text-blue-700">{grm.toFixed(1)}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
