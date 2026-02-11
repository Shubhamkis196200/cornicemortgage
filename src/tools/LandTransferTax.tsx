import { useState } from 'react';

export default function LandTransferTax() {
  const [price, setPrice] = useState(350000);
  const [state, setState] = useState(1);
  const [county, setCounty] = useState(0.5);
  const stateTax=price*state/100;const countyTax=price*county/100;const total=stateTax+countyTax;const effectiveRate=total/price*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">State Rate (%)</label><input type="number" value={state} onChange={e=>setState(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">County Rate (%)</label><input type="number" step="0.1" value={county} onChange={e=>setCounty(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">State Tax</p><p className="text-xl font-bold text-blue-700">$${typeof stateTax==='number'?stateTax.toFixed(2):stateTax}</p></div>
      <div><p className="text-sm text-gray-500">County Tax</p><p className="text-xl font-bold text-blue-700">$${typeof countyTax==='number'?countyTax.toFixed(2):countyTax}</p></div>
      <div><p className="text-sm text-gray-500">Total Transfer Tax</p><p className="text-xl font-bold text-blue-700">$${typeof total==='number'?total.toFixed(2):total}</p></div>
      <div><p className="text-sm text-gray-500">Effective Rate</p><p className="text-xl font-bold text-blue-700">{effectiveRate.toFixed(2)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
