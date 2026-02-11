import { useState } from 'react';

export default function HoaCalculator() {
  const [mortgage, setMortgage] = useState(1800);
  const [hoa, setHoa] = useState(350);
  const [tax, setTax] = useState(350);
  const [insurance, setInsurance] = useState(120);
  const totalMonthly=mortgage+hoa+tax+insurance;const totalAnnual=totalMonthly*12;const hoaPct=hoa/totalMonthly*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Mortgage Payment</label><input type="number" value={mortgage} onChange={e=>setMortgage(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly HOA Fee</label><input type="number" value={hoa} onChange={e=>setHoa(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Property Tax</label><input type="number" value={tax} onChange={e=>setTax(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Insurance</label><input type="number" value={insurance} onChange={e=>setInsurance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Total Monthly Housing Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalMonthly==='number'?totalMonthly.toFixed(2):totalMonthly}</p></div>
      <div><p className="text-sm text-gray-500">Total Annual Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalAnnual==='number'?totalAnnual.toFixed(2):totalAnnual}</p></div>
      <div><p className="text-sm text-gray-500">HOA % of Total</p><p className="text-xl font-bold text-blue-700">{hoaPct.toFixed(1)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
