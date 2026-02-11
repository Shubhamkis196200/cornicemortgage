import { useState } from 'react';

export default function ArmVsFixed() {
  const [loan, setLoan] = useState(280000);
  const [fixedRate, setFixedRate] = useState(6.5);
  const [armInitial, setArmInitial] = useState(5.5);
  const [armAdj, setArmAdj] = useState(7.5);
  const [fixedPeriod, setFixedPeriod] = useState(5);
  const n=360;const mr1=fixedRate/100/12;const fixedPmt=mr1>0?loan*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loan/n;const mr2=armInitial/100/12;const armPmt1=mr2>0?loan*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loan/n;let bal=loan;for(let i=0;i<fixedPeriod*12;i++){bal-=armPmt1-bal*mr2;}const mr3=armAdj/100/12;const rem=n-fixedPeriod*12;const armPmt2=mr3>0?bal*(mr3*Math.pow(1+mr3,rem))/(Math.pow(1+mr3,rem)-1):bal/rem;const fixedTotal=fixedPmt*n;const armTotal=armPmt1*fixedPeriod*12+armPmt2*rem;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loan} onChange={e=>setLoan(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Fixed Rate</label><input type="number" step="0.1" value={fixedRate} onChange={e=>setFixedRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">ARM Initial Rate</label><input type="number" step="0.1" value={armInitial} onChange={e=>setArmInitial(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">ARM Adjusted Rate</label><input type="number" step="0.1" value={armAdj} onChange={e=>setArmAdj(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">ARM Fixed Period (yrs)</label><input type="number" value={fixedPeriod} onChange={e=>setFixedPeriod(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Fixed Monthly Payment</p><p className="text-xl font-bold text-blue-700">$${typeof fixedPmt==='number'?fixedPmt.toFixed(2):fixedPmt}</p></div>
      <div><p className="text-sm text-gray-500">ARM Initial Payment</p><p className="text-xl font-bold text-blue-700">$${typeof armPmt1==='number'?armPmt1.toFixed(2):armPmt1}</p></div>
      <div><p className="text-sm text-gray-500">ARM Adjusted Payment</p><p className="text-xl font-bold text-blue-700">$${typeof armPmt2==='number'?armPmt2.toFixed(2):armPmt2}</p></div>
      <div><p className="text-sm text-gray-500">Fixed Total Cost</p><p className="text-xl font-bold text-blue-700">$${typeof fixedTotal==='number'?fixedTotal.toFixed(2):fixedTotal}</p></div>
      <div><p className="text-sm text-gray-500">ARM Total Cost</p><p className="text-xl font-bold text-blue-700">$${typeof armTotal==='number'?armTotal.toFixed(2):armTotal}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
