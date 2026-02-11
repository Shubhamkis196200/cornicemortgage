import { useState } from 'react';

export default function IncomeRequirementCalculator() {
  const [targetLoan, setTargetLoan] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [otherDebts, setOtherDebts] = useState(500);
  const [maxDTI, setMaxDTI] = useState(43);
  const mr=rate/100/12;const n=term*12;const pmt=mr>0?targetLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):targetLoan/n;const minMonthlyIncome=(pmt+otherDebts)/(maxDTI/100);const minAnnualIncome=minMonthlyIncome*12;const hourlyWage=minAnnualIncome/2080;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Target Loan Amount</label><input type="number" value={targetLoan} onChange={e=>setTargetLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Debts</label><input type="number" value={otherDebts} onChange={e=>setOtherDebts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Max DTI (%)</label><input type="number" value={maxDTI} onChange={e=>setMaxDTI(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Mortgage Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">Required Monthly Income</p><p className="text-xl font-bold text-blue-700">$${typeof minMonthlyIncome==='number'?minMonthlyIncome.toFixed(2):minMonthlyIncome}</p></div>
      <div><p className="text-sm text-gray-500">Required Annual Income</p><p className="text-xl font-bold text-blue-700">$${typeof minAnnualIncome==='number'?minAnnualIncome.toFixed(2):minAnnualIncome}</p></div>
      <div><p className="text-sm text-gray-500">Equivalent Hourly Wage</p><p className="text-xl font-bold text-blue-700">$${typeof hourlyWage==='number'?hourlyWage.toFixed(2):hourlyWage}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
