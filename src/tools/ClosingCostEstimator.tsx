import { useState } from 'react';

export default function ClosingCostEstimator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [loanAmount, setLoanAmount] = useState(280000);
  const lenderFees=loanAmount*0.01;const titleIns=homePrice*0.005;const appraisal=500;const inspection=400;const recording=200;const attorney=1500;const prepaids=homePrice*0.015;const total=lenderFees+titleIns+appraisal+inspection+recording+attorney+prepaids;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loanAmount} onChange={e=>setLoanAmount(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Total Closing Costs</p><p className="text-xl font-bold text-blue-700">$${typeof total==='number'?total.toFixed(2):total}</p></div>
      <div><p className="text-sm text-gray-500">Lender Fees</p><p className="text-xl font-bold text-blue-700">$${typeof lenderFees==='number'?lenderFees.toFixed(2):lenderFees}</p></div>
      <div><p className="text-sm text-gray-500">Title Insurance</p><p className="text-xl font-bold text-blue-700">$${typeof titleIns==='number'?titleIns.toFixed(2):titleIns}</p></div>
      <div><p className="text-sm text-gray-500">Prepaids</p><p className="text-xl font-bold text-blue-700">$${typeof prepaids==='number'?prepaids.toFixed(2):prepaids}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
