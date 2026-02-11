import { useState } from 'react';

export default function RateLockAdvisor() {
  const [loanAmount, setLoanAmount] = useState(280000);
  const [currentRate, setCurrentRate] = useState(6.5);
  const [expectedRate, setExpectedRate] = useState(6.75);
  const [lockDays, setLockDays] = useState(45);
  const [lockCost, setLockCost] = useState(500);
  const mr1=currentRate/100/12;const mr2=expectedRate/100/12;const n=360;const pmt1=mr1>0?loanAmount*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loanAmount/n;const pmt2=mr2>0?loanAmount*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loanAmount/n;const monthlySavings=pmt2-pmt1;const lifetimeSavings=monthlySavings*n;const shouldLock=lifetimeSavings>lockCost;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loanAmount} onChange={e=>setLoanAmount(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Rate (%)</label><input type="number" step="0.1" value={currentRate} onChange={e=>setCurrentRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Expected Rate if Wait (%)</label><input type="number" step="0.1" value={expectedRate} onChange={e=>setExpectedRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Lock Period (days)</label><input type="number" value={lockDays} onChange={e=>setLockDays(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Lock Fee ($)</label><input type="number" value={lockCost} onChange={e=>setLockCost(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Payment at Current Rate</p><p className="text-xl font-bold text-blue-700">$${typeof pmt1==='number'?pmt1.toFixed(2):pmt1}</p></div>
      <div><p className="text-sm text-gray-500">Payment if Rate Rises</p><p className="text-xl font-bold text-blue-700">$${typeof pmt2==='number'?pmt2.toFixed(2):pmt2}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Difference</p><p className="text-xl font-bold text-blue-700">$${typeof monthlySavings==='number'?monthlySavings.toFixed(2):monthlySavings}</p></div>
      <div><p className="text-sm text-gray-500">Lifetime Savings from Locking</p><p className="text-xl font-bold text-blue-700">$${typeof lifetimeSavings==='number'?lifetimeSavings.toFixed(2):lifetimeSavings}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
