import { useState } from 'react';

export default function PreQualificationEstimator() {
  const [income, setIncome] = useState(85000);
  const [debts, setDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [creditScore, setCreditScore] = useState(720);
  const dtiLimit=creditScore>=740?0.45:creditScore>=700?0.43:0.40;const maxMonthly=income/12*dtiLimit-debts;const mr=rate/100/12;const n=360;const maxLoan=mr>0?maxMonthly*(Math.pow(1+mr,n)-1)/(mr*Math.pow(1+mr,n)):maxMonthly*n;const maxPurchase=maxLoan+downPayment;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Income</label><input type="number" value={income} onChange={e=>setIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Debts</label><input type="number" value={debts} onChange={e=>setDebts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label><input type="number" value={downPayment} onChange={e=>setDownPayment(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Est. Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Credit Score</label><input type="number" value={creditScore} onChange={e=>setCreditScore(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Max Purchase Price</p><p className="text-xl font-bold text-blue-700">$${typeof maxPurchase==='number'?maxPurchase.toFixed(2):maxPurchase}</p></div>
      <div><p className="text-sm text-gray-500">Max Loan Amount</p><p className="text-xl font-bold text-blue-700">$${typeof maxLoan==='number'?maxLoan.toFixed(2):maxLoan}</p></div>
      <div><p className="text-sm text-gray-500">Max Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof maxMonthly==='number'?maxMonthly.toFixed(2):maxMonthly}</p></div>
      <div><p className="text-sm text-gray-500">DTI Limit Used</p><p className="text-xl font-bold text-blue-700">{(dtiLimit*100).toFixed(0)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
