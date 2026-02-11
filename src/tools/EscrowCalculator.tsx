import { useState } from 'react';

export default function EscrowCalculator() {
  const [annualTax, setAnnualTax] = useState(4200);
  const [annualInsurance, setAnnualInsurance] = useState(1400);
  const [annualFlood, setAnnualFlood] = useState(0);
  const monthlyTax=annualTax/12;const monthlyIns=annualInsurance/12;const monthlyFlood=annualFlood/12;const total=monthlyTax+monthlyIns+monthlyFlood;const cushion=total*2;const initialDeposit=total*3+cushion;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Property Tax</label><input type="number" value={annualTax} onChange={e=>setAnnualTax(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance</label><input type="number" value={annualInsurance} onChange={e=>setAnnualInsurance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Flood Insurance (if any)</label><input type="number" value={annualFlood} onChange={e=>setAnnualFlood(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Escrow</p><p className="text-xl font-bold text-blue-700">$${typeof total==='number'?total.toFixed(2):total}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Tax Portion</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyTax==='number'?monthlyTax.toFixed(2):monthlyTax}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Insurance Portion</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyIns==='number'?monthlyIns.toFixed(2):monthlyIns}</p></div>
      <div><p className="text-sm text-gray-500">Initial Escrow Deposit</p><p className="text-xl font-bold text-blue-700">$${typeof initialDeposit==='number'?initialDeposit.toFixed(2):initialDeposit}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
