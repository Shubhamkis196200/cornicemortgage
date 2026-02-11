import { useState } from 'react';

export default function RentVsBuy() {
  const [rent, setRent] = useState(1800);
  const [homePrice, setHomePrice] = useState(350000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(7);
  const down=homePrice*0.2;const loan=homePrice-down;const mr=rate/100/12;const n=30*12;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const monthlyOwn=pmt+homePrice*0.012/12+100;const totalRent=rent*years*12;const totalOwn=monthlyOwn*years*12+down;const appreciation=homePrice*Math.pow(1.03,years)-homePrice;const netOwn=totalOwn-appreciation;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent</label><input type="number" value={rent} onChange={e=>setRent(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Mortgage Rate</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Years to Compare</label><input type="number" value={years} onChange={e=>setYears(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Total Rent Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalRent==='number'?totalRent.toFixed(2):totalRent}</p></div>
      <div><p className="text-sm text-gray-500">Total Owning Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalOwn==='number'?totalOwn.toFixed(2):totalOwn}</p></div>
      <div><p className="text-sm text-gray-500">Home Appreciation</p><p className="text-xl font-bold text-blue-700">$${typeof appreciation==='number'?appreciation.toFixed(2):appreciation}</p></div>
      <div><p className="text-sm text-gray-500">Net Cost of Owning</p><p className="text-xl font-bold text-blue-700">$${typeof netOwn==='number'?netOwn.toFixed(2):netOwn}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
