import { useState } from 'react';

export default function MortgageStressTest() {
  const [loan, setLoan] = useState(280000);
  const [currentRate, setCurrentRate] = useState(6.5);
  const [stressRate, setStressRate] = useState(8.5);
  const [income, setIncome] = useState(7000);
  const [otherDebts, setOtherDebts] = useState(500);
  const c=(b:number,r:number)=>{const mr=r/100/12;const n=360;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const currentPmt=c(loan,currentRate);const stressPmt=c(loan,stressRate);const currentDTI=(currentPmt+otherDebts)/income*100;const stressDTI=(stressPmt+otherDebts)/income*100;const passes=stressDTI<=43;const paymentIncrease=stressPmt-currentPmt;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Rate (%)</label><input type="number" step="0.1" value={currentRate} onChange={e=>setCurrentRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Stress Test Rate (%)</label><input type="number" step="0.1" value={stressRate} onChange={e=>setStressRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Gross Income</label><input type="number" value={income} onChange={e=>setIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Other Monthly Debts</label><input type="number" value={otherDebts} onChange={e=>setOtherDebts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Current Payment</p><p className="text-xl font-bold text-blue-700">$${typeof currentPmt==='number'?currentPmt.toFixed(2):currentPmt}</p></div>
      <div><p className="text-sm text-gray-500">Stress Test Payment</p><p className="text-xl font-bold text-blue-700">$${typeof stressPmt==='number'?stressPmt.toFixed(2):stressPmt}</p></div>
      <div><p className="text-sm text-gray-500">Payment Increase</p><p className="text-xl font-bold text-blue-700">$${typeof paymentIncrease==='number'?paymentIncrease.toFixed(2):paymentIncrease}</p></div>
      <div><p className="text-sm text-gray-500">Stress DTI</p><p className="text-xl font-bold text-blue-700">{stressDTI.toFixed(1)+"% "+(passes?"✅ Pass":"❌ Fail")}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
