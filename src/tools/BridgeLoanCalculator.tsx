import { useState } from 'react';

export default function BridgeLoanCalculator() {
  const [currentHome, setCurrentHome] = useState(400000);
  const [currentMortgage, setCurrentMortgage] = useState(200000);
  const [newHome, setNewHome] = useState(500000);
  const [bridgeRate, setBridgeRate] = useState(9);
  const [months, setMonths] = useState(6);
  const equity=currentHome-currentMortgage;const bridgeAmount=Math.min(equity*0.8,newHome*0.8);const monthlyInterest=bridgeAmount*bridgeRate/100/12;const totalCost=monthlyInterest*months;const originationFee=bridgeAmount*0.02;const totalBridgeCost=totalCost+originationFee;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Home Value</label><input type="number" value={currentHome} onChange={e=>setCurrentHome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Mortgage</label><input type="number" value={currentMortgage} onChange={e=>setCurrentMortgage(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Home Price</label><input type="number" value={newHome} onChange={e=>setNewHome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Bridge Rate (%)</label><input type="number" value={bridgeRate} onChange={e=>setBridgeRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Bridge Period (months)</label><input type="number" value={months} onChange={e=>setMonths(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Bridge Loan Amount</p><p className="text-xl font-bold text-blue-700">$${typeof bridgeAmount==='number'?bridgeAmount.toFixed(2):bridgeAmount}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Interest Payment</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyInterest==='number'?monthlyInterest.toFixed(2):monthlyInterest}</p></div>
      <div><p className="text-sm text-gray-500">Origination Fee</p><p className="text-xl font-bold text-blue-700">$${typeof originationFee==='number'?originationFee.toFixed(2):originationFee}</p></div>
      <div><p className="text-sm text-gray-500">Total Bridge Cost</p><p className="text-xl font-bold text-blue-700">$${typeof totalBridgeCost==='number'?totalBridgeCost.toFixed(2):totalBridgeCost}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
