import { useState } from 'react';

export default function MortgageCalculator() {

  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [tax, setTax] = useState(3500);
  const [insurance, setInsurance] = useState(1200);
  const loan = price - down;
  const mr = rate / 100 / 12;
  const n = term * 12;
  const mp = mr > 0 ? loan * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1) : loan / n;
  const totalPayment = mp + tax / 12 + insurance / 12;
  const totalInterest = mp * n - loan;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price ($)</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label><input type="number" value={down} onChange={e=>setDown(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label><select value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2"><option value={30}>30 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={10}>10 years</option></select></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Property Tax ($)</label><input type="number" value={tax} onChange={e=>setTax(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance ($)</label><input type="number" value={insurance} onChange={e=>setInsurance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-2xl font-bold text-blue-700">${totalPayment.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Principal & Interest</p><p className="text-xl font-semibold">${mp.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-semibold">${totalInterest.toFixed(0)}</p></div>
      <div><p className="text-sm text-gray-500">Loan Amount</p><p className="text-xl font-semibold">${loan.toLocaleString()}</p></div>
    </div>
    <p className="text-sm text-gray-500">This calculator provides estimates for informational purposes. Actual payments may vary.</p>
  </div>);
}
