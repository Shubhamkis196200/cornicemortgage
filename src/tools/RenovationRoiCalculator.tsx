import { useState } from 'react';

export default function RenovationRoiCalculator() {
  const [projectCost, setProjectCost] = useState(25000);
  const [valueAdded, setValueAdded] = useState(35000);
  const [projectType, setProjectType] = useState(1);
  const roi=(valueAdded-projectCost)/projectCost*100;const avgROI=[80,70,75,50];const industryAvg=avgROI[Math.min(projectType-1,3)];const netGain=valueAdded-projectCost;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Project Cost</label><input type="number" value={projectCost} onChange={e=>setProjectCost(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Estimated Value Added</label><input type="number" value={valueAdded} onChange={e=>setValueAdded(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Project Type (1=Kitchen,2=Bath,3=Deck,4=Other)</label><input type="number" value={projectType} onChange={e=>setProjectType(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Return on Investment</p><p className="text-xl font-bold text-blue-700">{roi.toFixed(1)+"%"}</p></div>
      <div><p className="text-sm text-gray-500">Net Gain</p><p className="text-xl font-bold text-blue-700">$${typeof netGain==='number'?netGain.toFixed(2):netGain}</p></div>
      <div><p className="text-sm text-gray-500">Industry Average ROI</p><p className="text-xl font-bold text-blue-700">{industryAvg+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
