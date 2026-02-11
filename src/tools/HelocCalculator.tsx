import { useState } from 'react';

export default function HelocCalculator() {
  const [homeValue, setHomeValue] = useState(450000);
  const [mortgage, setMortgage] = useState(250000);
  const [helocRate, setHelocRate] = useState(8.5);
  const [drawAmount, setDrawAmount] = useState(50000);
  const [repayYears, setRepayYears] = useState(10);
  const equity=homeValue-mortgage;const maxHeloc=homeValue*0.85-mortgage;const mr=helocRate/100/12;const n=repayYears*12;const payment=mr>0?drawAmount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):drawAmount/n;const totalInterest=payment*n-drawAmount;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Mortgage Balance</label><input type="number" value={mortgage} onChange={e=>setMortgage(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">HELOC Rate (%)</label><input type="number" step="0.1" value={helocRate} onChange={e=>setHelocRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Draw Amount</label><input type="number" value={drawAmount} onChange={e=>setDrawAmount(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Repayment Period (years)</label><input type="number" value={repayYears} onChange={e=>setRepayYears(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Available Equity</p><p className="text-xl font-bold text-blue-700">$${typeof equity==='number'?equity.toFixed(2):equity}</p></div>
      <div><p className="text-sm text-gray-500">Max HELOC Amount</p><p className="text-xl font-bold text-blue-700">$${typeof maxHeloc==='number'?maxHeloc.toFixed(2):maxHeloc}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof payment==='number'?payment.toFixed(2):payment}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-bold text-blue-700">$${typeof totalInterest==='number'?totalInterest.toFixed(2):totalInterest}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
