import { useState } from 'react';

export default function MortgagePayoffDate() {
  const [balance, setBalance] = useState(280000);
  const [rate, setRate] = useState(6.5);
  const [payment, setPayment] = useState(1770);
  const [extra, setExtra] = useState(0);
  const mr=rate/100/12;let bal=balance;let months=0;while(bal>0&&months<600){const interest=bal*mr;const principal=payment+extra-interest;if(principal<=0){months=999;break;}bal-=principal;months++;}const years=Math.floor(months/12);const mos=months%12;const payoffDate=new Date();payoffDate.setMonth(payoffDate.getMonth()+months);const dateStr=payoffDate.toLocaleDateString('en-US',{month:'long',year:'numeric'});const totalPaid=(payment+extra)*months;const totalInterest=totalPaid-balance;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Balance</label><input type="number" value={balance} onChange={e=>setBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Payment</label><input type="number" value={payment} onChange={e=>setPayment(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Extra Monthly Payment</label><input type="number" value={extra} onChange={e=>setExtra(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Payoff In</p><p className="text-xl font-bold text-blue-700">{years+" years, "+mos+" months"}</p></div>
      <div><p className="text-sm text-gray-500">Payoff Date</p><p className="text-xl font-bold text-blue-700">{dateStr}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest Paid</p><p className="text-xl font-bold text-blue-700">$${typeof totalInterest==='number'?totalInterest.toFixed(2):totalInterest}</p></div>
      <div><p className="text-sm text-gray-500">Total Amount Paid</p><p className="text-xl font-bold text-blue-700">$${typeof totalPaid==='number'?totalPaid.toFixed(2):totalPaid}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
