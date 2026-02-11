import { useState } from 'react';

export default function InvestmentPropertyMortgage() {
  const [price, setPrice] = useState(400000);
  const [downPct, setDownPct] = useState(25);
  const [rate, setRate] = useState(7);
  const [rent, setRent] = useState(2800);
  const down=price*downPct/100;const loan=price-down;const mr=rate/100/12;const n=360;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const expenses=rent*0.4;const cashFlow=rent-pmt-expenses;const annualCashFlow=cashFlow*12;const cashOnCash=annualCashFlow/down*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Property Price</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Expected Monthly Rent</label><input type="number" value={rent} onChange={e=>setRent(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">Est. Monthly Cash Flow</p><p className="text-xl font-bold text-blue-700">$${typeof cashFlow==='number'?cashFlow.toFixed(2):cashFlow}</p></div>
      <div><p className="text-sm text-gray-500">Annual Cash Flow</p><p className="text-xl font-bold text-blue-700">$${typeof annualCashFlow==='number'?annualCashFlow.toFixed(2):annualCashFlow}</p></div>
      <div><p className="text-sm text-gray-500">Cash-on-Cash Return</p><p className="text-xl font-bold text-blue-700">{cashOnCash.toFixed(1)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
