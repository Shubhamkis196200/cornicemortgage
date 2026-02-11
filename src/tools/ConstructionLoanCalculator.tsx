import { useState } from 'react';

export default function ConstructionLoanCalculator() {
  const [totalBuild, setTotalBuild] = useState(400000);
  const [landCost, setLandCost] = useState(100000);
  const [rate, setRate] = useState(8);
  const [buildMonths, setBuildMonths] = useState(12);
  const [permRate, setPermRate] = useState(6.5);
  const totalProject=totalBuild+landCost;const avgDrawn=totalProject*0.5;const constructionInterest=avgDrawn*rate/100/12*buildMonths;const mr=permRate/100/12;const n=360;const permPmt=mr>0?totalProject*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalProject/n;const ioPayment=totalProject*rate/100/12;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Total Build Cost</label><input type="number" value={totalBuild} onChange={e=>setTotalBuild(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Land Cost</label><input type="number" value={landCost} onChange={e=>setLandCost(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Construction Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Build Period (months)</label><input type="number" value={buildMonths} onChange={e=>setBuildMonths(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Permanent Rate (%)</label><input type="number" step="0.1" value={permRate} onChange={e=>setPermRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">IO Payment During Construction</p><p className="text-xl font-bold text-blue-700">$${typeof ioPayment==='number'?ioPayment.toFixed(2):ioPayment}</p></div>
      <div><p className="text-sm text-gray-500">Est. Construction Interest</p><p className="text-xl font-bold text-blue-700">$${typeof constructionInterest==='number'?constructionInterest.toFixed(2):constructionInterest}</p></div>
      <div><p className="text-sm text-gray-500">Permanent Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof permPmt==='number'?permPmt.toFixed(2):permPmt}</p></div>
      <div><p className="text-sm text-gray-500">Total Project Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalProject==='number'?totalProject.toFixed(2):totalProject}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
