import { useState } from 'react';

export default function RealEstateCommission() {
  const [salePrice, setSalePrice] = useState(400000);
  const [commissionPct, setCommissionPct] = useState(6);
  const [buyerAgentPct, setBuyerAgentPct] = useState(3);
  const totalCommission=salePrice*commissionPct/100;const buyerAgent=salePrice*buyerAgentPct/100;const listingAgent=totalCommission-buyerAgent;const netToSeller=salePrice-totalCommission;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Sale Price</label><input type="number" value={salePrice} onChange={e=>setSalePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Total Commission (%)</label><input type="number" value={commissionPct} onChange={e=>setCommissionPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Buyer Agent Split (%)</label><input type="number" value={buyerAgentPct} onChange={e=>setBuyerAgentPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Total Commission</p><p className="text-xl font-bold text-blue-700">$${typeof totalCommission==='number'?totalCommission.toFixed(2):totalCommission}</p></div>
      <div><p className="text-sm text-gray-500">Listing Agent</p><p className="text-xl font-bold text-blue-700">$${typeof listingAgent==='number'?listingAgent.toFixed(2):listingAgent}</p></div>
      <div><p className="text-sm text-gray-500">Buyer Agent</p><p className="text-xl font-bold text-blue-700">$${typeof buyerAgent==='number'?buyerAgent.toFixed(2):buyerAgent}</p></div>
      <div><p className="text-sm text-gray-500">Net to Seller</p><p className="text-xl font-bold text-blue-700">$${typeof netToSeller==='number'?netToSeller.toFixed(2):netToSeller}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
