import { useState } from 'react';

export default function HomeAffordabilityCalculator() {

  const [income, setIncome] = useState(85000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const maxDTI = 0.43;
  const maxMonthly = income / 12 * maxDTI - monthlyDebts;
  const mr = rate/100/12; const n = term*12;
  const maxLoan = mr>0 ? maxMonthly * (Math.pow(1+mr,n)-1)/(mr*Math.pow(1+mr,n)) : maxMonthly*n;
  const maxHome = maxLoan + downPayment;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Gross Income ($)</label><input type="number" value={income} onChange={e=>setIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Debts ($)</label><input type="number" value={monthlyDebts} onChange={e=>setMonthlyDebts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label><input type="number" value={downPayment} onChange={e=>setDownPayment(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 text-center">
      <p className="text-sm text-gray-500">You can afford a home up to</p>
      <p className="text-4xl font-bold text-blue-700 my-2">${Math.round(maxHome).toLocaleString()}</p>
      <p className="text-sm text-gray-500">Max monthly payment: ${maxMonthly.toFixed(0)} | Max loan: ${Math.round(maxLoan).toLocaleString()}</p>
    </div>
  </div>);
}
