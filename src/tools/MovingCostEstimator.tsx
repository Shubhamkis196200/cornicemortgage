import { useState } from 'react';

export default function MovingCostEstimator() {
  const [distance, setDistance] = useState(500);
  const [rooms, setRooms] = useState(4);
  const [diy, setDiy] = useState(0);
  const baseLocal=rooms*400;const baseLong=rooms*1000+distance*0.50;const isLocal=distance<100;const proRate=isLocal?baseLocal:baseLong;const diyRate=proRate*0.4;const cost=diy?diyRate:proRate;const packing=rooms*200;const insurance=proRate*0.03;const total=cost+packing+insurance;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Distance (miles)</label><input type="number" value={distance} onChange={e=>setDistance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Number of Rooms</label><input type="number" value={rooms} onChange={e=>setRooms(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">DIY Move (0=No, 1=Yes)</label><input type="number" value={diy} onChange={e=>setDiy(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Moving Service</p><p className="text-xl font-bold text-blue-700">$${typeof cost==='number'?cost.toFixed(2):cost}</p></div>
      <div><p className="text-sm text-gray-500">Packing Materials</p><p className="text-xl font-bold text-blue-700">$${typeof packing==='number'?packing.toFixed(2):packing}</p></div>
      <div><p className="text-sm text-gray-500">Insurance</p><p className="text-xl font-bold text-blue-700">$${typeof insurance==='number'?insurance.toFixed(2):insurance}</p></div>
      <div><p className="text-sm text-gray-500">Total Estimated Cost</p><p className="text-xl font-bold text-blue-700">$${typeof total==='number'?total.toFixed(2):total}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
