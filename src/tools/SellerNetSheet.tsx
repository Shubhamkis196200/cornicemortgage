import { useState } from 'react';

export default function SellerNetSheet() {
  const [salePrice, setSalePrice] = useState(400000);
  const [mortgage, setMortgage] = useState(250000);
  const [commission, setCommission] = useState(6);
  const [closingPct, setClosingPct] = useState(2);
  const [repairs, setRepairs] = useState(5000);
  const commissionAmt=salePrice*commission/100;const closingCosts=salePrice*closingPct/100;const totalDeductions=commissionAmt+closingCosts+repairs+mortgage;const netProceeds=salePrice-totalDeductions;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Sale Price</label><input type="number" value={salePrice} onChange={e=>setSalePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Remaining Mortgage</label><input type="number" value={mortgage} onChange={e=>setMortgage(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Commission (%)</label><input type="number" value={commission} onChange={e=>setCommission(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Closing Costs (%)</label><input type="number" value={closingPct} onChange={e=>setClosingPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Repairs/Concessions</label><input type="number" value={repairs} onChange={e=>setRepairs(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Net Proceeds</p><p className="text-xl font-bold text-blue-700">$${typeof netProceeds==='number'?netProceeds.toFixed(2):netProceeds}</p></div>
      <div><p className="text-sm text-gray-500">Commission</p><p className="text-xl font-bold text-blue-700">$${typeof commissionAmt==='number'?commissionAmt.toFixed(2):commissionAmt}</p></div>
      <div><p className="text-sm text-gray-500">Closing Costs</p><p className="text-xl font-bold text-blue-700">$${typeof closingCosts==='number'?closingCosts.toFixed(2):closingCosts}</p></div>
      <div><p className="text-sm text-gray-500">Total Deductions</p><p className="text-xl font-bold text-blue-700">$${typeof totalDeductions==='number'?totalDeductions.toFixed(2):totalDeductions}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
