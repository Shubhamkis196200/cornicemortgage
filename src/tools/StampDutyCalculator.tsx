import { useState } from 'react';

export default function StampDutyCalculator() {
  const [price, setPrice] = useState(350000);
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(1);
  const [state, setState] = useState(1.1);
  const stateTax=price*state/100;const discount=firstTimeBuyer?Math.min(stateTax*0.25,2000):0;const totalDuty=stateTax-discount;const effectiveRate=totalDuty/price*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Property Price</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">First-Time Buyer (0=No,1=Yes)</label><input type="number" value={firstTimeBuyer} onChange={e=>setFirstTimeBuyer(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">State Tax Rate (%)</label><input type="number" step="0.1" value={state} onChange={e=>setState(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Transfer Tax</p><p className="text-xl font-bold text-blue-700">$${typeof stateTax==='number'?stateTax.toFixed(2):stateTax}</p></div>
      <div><p className="text-sm text-gray-500">First-Time Buyer Discount</p><p className="text-xl font-bold text-blue-700">$${typeof discount==='number'?discount.toFixed(2):discount}</p></div>
      <div><p className="text-sm text-gray-500">Total Due</p><p className="text-xl font-bold text-blue-700">$${typeof totalDuty==='number'?totalDuty.toFixed(2):totalDuty}</p></div>
      <div><p className="text-sm text-gray-500">Effective Rate</p><p className="text-xl font-bold text-blue-700">{effectiveRate.toFixed(2)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
