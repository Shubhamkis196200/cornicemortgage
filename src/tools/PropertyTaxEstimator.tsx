import { useState } from 'react';

export default function PropertyTaxEstimator() {
  const [homeValue, setHomeValue] = useState(350000);
  const [taxRate, setTaxRate] = useState(1.2);
  const [exemption, setExemption] = useState(0);
  const taxable=Math.max(0,homeValue-exemption);const annual=taxable*taxRate/100;const monthly=annual/12;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label><input type="number" step="0.1" value={taxRate} onChange={e=>setTaxRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Homestead Exemption</label><input type="number" value={exemption} onChange={e=>setExemption(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Annual Property Tax</p><p className="text-xl font-bold text-blue-700">$${typeof annual==='number'?annual.toFixed(2):annual}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Property Tax</p><p className="text-xl font-bold text-blue-700">$${typeof monthly==='number'?monthly.toFixed(2):monthly}</p></div>
      <div><p className="text-sm text-gray-500">Taxable Value</p><p className="text-xl font-bold text-blue-700">$${typeof taxable==='number'?taxable.toFixed(2):taxable}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
