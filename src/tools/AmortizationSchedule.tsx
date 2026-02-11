import { useState } from 'react';

export default function AmortizationSchedule() {

  const [loan, setLoan] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [showAll, setShowAll] = useState(false);
  const mr = rate/100/12; const n = term*12;
  const pmt = mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;
  const schedule: {month:number;payment:number;principal:number;interest:number;balance:number}[] = [];
  let bal = loan;
  for(let i=1;i<=n;i++){const int=bal*mr;const princ=pmt-int;bal-=princ;schedule.push({month:i,payment:pmt,principal:princ,interest:int,balance:Math.max(0,bal)});}
  const display = showAll ? schedule : schedule.slice(0, 24);
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Term (years)</label><input type="number" value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-4"><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-2xl font-bold text-blue-700">${pmt.toFixed(2)}</p><p className="text-sm text-gray-500 mt-1">Total Interest: ${(pmt*n-loan).toFixed(0)}</p></div>
    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-gray-100"><th className="px-3 py-2 text-left">Month</th><th className="px-3 py-2 text-right">Payment</th><th className="px-3 py-2 text-right">Principal</th><th className="px-3 py-2 text-right">Interest</th><th className="px-3 py-2 text-right">Balance</th></tr></thead><tbody>{display.map(r=><tr key={r.month} className="border-b border-gray-100"><td className="px-3 py-1">{r.month}</td><td className="px-3 py-1 text-right">${r.payment.toFixed(2)}</td><td className="px-3 py-1 text-right">${r.principal.toFixed(2)}</td><td className="px-3 py-1 text-right">${r.interest.toFixed(2)}</td><td className="px-3 py-1 text-right">${r.balance.toFixed(2)}</td></tr>)}</tbody></table></div>
    {!showAll && schedule.length>24 && <button onClick={()=>setShowAll(true)} className="text-blue-700 font-medium">Show all {schedule.length} payments</button>}
  </div>);
}
