import { useState } from 'react';

export default function BiweeklyPaymentCalculator() {
  const [loan, setLoan] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const mr=rate/100/12;const n=term*12;const monthlyPmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const biweekly=monthlyPmt/2;const annualExtra=monthlyPmt;let balMonthly=loan;let balBiweekly=loan;let monthsMonthly=0;let monthsBiweekly=0;const br=rate/100/26;for(let i=0;i<n;i++){balMonthly-=monthlyPmt-balMonthly*mr;monthsMonthly=i+1;if(balMonthly<=0)break;}let bBal=loan;for(let i=0;i<n*2;i++){bBal-=biweekly-bBal*br;monthsBiweekly=i+1;if(bBal<=0)break;}const yearsSaved=(monthsMonthly-monthsBiweekly/2.17)/12;const interestSaved=monthlyPmt*monthsMonthly-(biweekly*monthsBiweekly);
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof monthlyPmt==='number'?monthlyPmt.toFixed(2):monthlyPmt}</p></div>
      <div><p className="text-sm text-gray-500">Bi-Weekly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof biweekly==='number'?biweekly.toFixed(2):biweekly}</p></div>
      <div><p className="text-sm text-gray-500">Years Saved</p><p className="text-xl font-bold text-blue-700">$${typeof yearsSaved==='number'?yearsSaved.toFixed(2):yearsSaved}</p></div>
      <div><p className="text-sm text-gray-500">Interest Saved</p><p className="text-xl font-bold text-blue-700">$${typeof interestSaved==='number'?interestSaved.toFixed(2):interestSaved}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
