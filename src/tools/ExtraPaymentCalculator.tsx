import { useState } from 'react';

export default function ExtraPaymentCalculator() {
  const [loan, setLoan] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [extra, setExtra] = useState(200);
  const mr=rate/100/12;const n=term*12;const basePmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;let bal1=loan,bal2=loan,m1=0,m2=0;for(let i=0;i<n;i++){if(bal1>0){bal1-=basePmt-bal1*mr;m1=i+1;}if(bal2>0){bal2-=(basePmt+extra)-bal2*mr;m2=i+1;}if(bal1<=0&&bal2<=0)break;}const monthsSaved=m1-m2;const interestSaved=basePmt*m1-(basePmt+extra)*m2;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Extra Monthly Payment</label><input type="number" value={extra} onChange={e=>setExtra(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Base Payment</p><p className="text-xl font-bold text-blue-700">$${typeof basePmt==='number'?basePmt.toFixed(2):basePmt}</p></div>
      <div><p className="text-sm text-gray-500">New Payment</p><p className="text-xl font-bold text-blue-700">{(basePmt+extra).toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Months Saved</p><p className="text-xl font-bold text-blue-700">$${typeof monthsSaved==='number'?monthsSaved.toFixed(2):monthsSaved}</p></div>
      <div><p className="text-sm text-gray-500">Interest Saved</p><p className="text-xl font-bold text-blue-700">$${typeof interestSaved==='number'?interestSaved.toFixed(2):interestSaved}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
