import { useState } from 'react';

export default function HomeValueEstimator() {
  const [purchasePrice, setPurchasePrice] = useState(300000);
  const [yearsPurchased, setYearsPurchased] = useState(5);
  const [annualAppreciation, setAnnualAppreciation] = useState(3.5);
  const [improvements, setImprovements] = useState(20000);
  const appreciated=purchasePrice*Math.pow(1+annualAppreciation/100,yearsPurchased);const estimatedValue=appreciated+improvements;const totalGain=estimatedValue-purchasePrice;const gainPct=totalGain/purchasePrice*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Original Purchase Price</label><input type="number" value={purchasePrice} onChange={e=>setPurchasePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Years Since Purchase</label><input type="number" value={yearsPurchased} onChange={e=>setYearsPurchased(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Appreciation (%)</label><input type="number" step="0.1" value={annualAppreciation} onChange={e=>setAnnualAppreciation(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Value of Improvements</label><input type="number" value={improvements} onChange={e=>setImprovements(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Estimated Current Value</p><p className="text-xl font-bold text-blue-700">$${typeof estimatedValue==='number'?estimatedValue.toFixed(2):estimatedValue}</p></div>
      <div><p className="text-sm text-gray-500">Total Appreciation</p><p className="text-xl font-bold text-blue-700">$${typeof totalGain==='number'?totalGain.toFixed(2):totalGain}</p></div>
      <div><p className="text-sm text-gray-500">Gain Percentage</p><p className="text-xl font-bold text-blue-700">{gainPct.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Value from Improvements</p><p className="text-xl font-bold text-blue-700">$${typeof improvements==='number'?improvements.toFixed(2):improvements}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
