import { useState } from 'react';

export default function HomeInsuranceEstimator() {
  const [homeValue, setHomeValue] = useState(350000);
  const [deductible, setDeductible] = useState(1000);
  const [location, setLocation] = useState(2);
  const baseRate=[0.003,0.005,0.008];const rate=baseRate[Math.min(location-1,2)];const coverage=homeValue*0.8;const annualPremium=coverage*rate;const monthlyPremium=annualPremium/12;const deductibleDiscount=deductible>1000?(deductible-1000)*0.02:0;const adjPremium=annualPremium-deductibleDiscount;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Deductible</label><input type="number" value={deductible} onChange={e=>setDeductible(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Risk Factor (1=Low,2=Med,3=High)</label><input type="number" value={location} onChange={e=>setLocation(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Annual Premium</p><p className="text-xl font-bold text-blue-700">$${typeof adjPremium==='number'?adjPremium.toFixed(2):adjPremium}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Premium</p><p className="text-xl font-bold text-blue-700">{(adjPremium/12).toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Coverage Amount</p><p className="text-xl font-bold text-blue-700">$${typeof coverage==='number'?coverage.toFixed(2):coverage}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
