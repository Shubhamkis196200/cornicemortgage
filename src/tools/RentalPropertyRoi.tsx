import { useState } from 'react';

export default function RentalPropertyRoi() {
  const [purchasePrice, setPurchasePrice] = useState(300000);
  const [monthlyRent, setMonthlyRent] = useState(2200);
  const [downPayment, setDownPayment] = useState(60000);
  const [expenses, setExpenses] = useState(800);
  const [vacancy, setVacancy] = useState(5);
  const effectiveRent=monthlyRent*(1-vacancy/100);const noi=(effectiveRent-expenses)*12;const cashOnCash=noi/downPayment*100;const grossYield=monthlyRent*12/purchasePrice*100;const capRate=noi/purchasePrice*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label><input type="number" value={purchasePrice} onChange={e=>setPurchasePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent</label><input type="number" value={monthlyRent} onChange={e=>setMonthlyRent(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label><input type="number" value={downPayment} onChange={e=>setDownPayment(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Expenses</label><input type="number" value={expenses} onChange={e=>setExpenses(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Vacancy Rate (%)</label><input type="number" value={vacancy} onChange={e=>setVacancy(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Annual NOI</p><p className="text-xl font-bold text-blue-700">$${typeof noi==='number'?noi.toFixed(2):noi}</p></div>
      <div><p className="text-sm text-gray-500">Cash-on-Cash Return</p><p className="text-xl font-bold text-blue-700">{cashOnCash.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Gross Yield</p><p className="text-xl font-bold text-blue-700">{grossYield.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Cap Rate</p><p className="text-xl font-bold text-blue-700">{capRate.toFixed(1)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
