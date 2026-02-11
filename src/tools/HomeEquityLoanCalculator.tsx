import { useState } from 'react';

export default function HomeEquityLoanCalculator() {
  const [homeValue, setHomeValue] = useState(450000);
  const [mortgageBalance, setMortgageBalance] = useState(250000);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [rate, setRate] = useState(7.5);
  const [term, setTerm] = useState(15);
  const equity=homeValue-mortgageBalance;const maxLoan=homeValue*0.85-mortgageBalance;const mr=rate/100/12;const n=term*12;const pmt=mr>0?loanAmount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loanAmount/n;const totalInterest=pmt*n-loanAmount;const combinedLTV=(mortgageBalance+loanAmount)/homeValue*100;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Value</label><input type="number" value={homeValue} onChange={e=>setHomeValue(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Mortgage Balance</label><input type="number" value={mortgageBalance} onChange={e=>setMortgageBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Desired Loan Amount</label><input type="number" value={loanAmount} onChange={e=>setLoanAmount(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof pmt==='number'?pmt.toFixed(2):pmt}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-bold text-blue-700">$${typeof totalInterest==='number'?totalInterest.toFixed(2):totalInterest}</p></div>
      <div><p className="text-sm text-gray-500">Max Available</p><p className="text-xl font-bold text-blue-700">$${typeof maxLoan==='number'?maxLoan.toFixed(2):maxLoan}</p></div>
      <div><p className="text-sm text-gray-500">Combined LTV</p><p className="text-xl font-bold text-blue-700">{combinedLTV.toFixed(1)+"%"}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
