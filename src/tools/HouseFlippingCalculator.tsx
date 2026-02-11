import { useState } from 'react';

export default function HouseFlippingCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(200000);
  const [rehabCost, setRehabCost] = useState(50000);
  const [holdingMonths, setHoldingMonths] = useState(6);
  const [arv, setArv] = useState(320000);
  const [holdingCostMo, setHoldingCostMo] = useState(2500);
  const totalInvestment=purchasePrice+rehabCost;const holdingCosts=holdingCostMo*holdingMonths;const sellingCosts=arv*0.08;const totalCosts=totalInvestment+holdingCosts+sellingCosts;const profit=arv-totalCosts;const roi=profit/totalInvestment*100;const rule70=arv*0.7-rehabCost;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label><input type="number" value={purchasePrice} onChange={e=>setPurchasePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Rehab Cost</label><input type="number" value={rehabCost} onChange={e=>setRehabCost(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Holding Period (months)</label><input type="number" value={holdingMonths} onChange={e=>setHoldingMonths(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">After Repair Value (ARV)</label><input type="number" value={arv} onChange={e=>setArv(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Holding Cost</label><input type="number" value={holdingCostMo} onChange={e=>setHoldingCostMo(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Estimated Profit</p><p className="text-xl font-bold text-blue-700">$${typeof profit==='number'?profit.toFixed(2):profit}</p></div>
      <div><p className="text-sm text-gray-500">ROI</p><p className="text-xl font-bold text-blue-700">{roi.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Total Costs</p><p className="text-xl font-bold text-blue-700">$${typeof totalCosts==='number'?totalCosts.toFixed(2):totalCosts}</p></div>
      <div><p className="text-sm text-gray-500">70% Rule Max Purchase</p><p className="text-xl font-bold text-blue-700">$${typeof rule70==='number'?rule70.toFixed(2):rule70}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
