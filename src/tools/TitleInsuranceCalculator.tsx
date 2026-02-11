import { useState } from 'react';

export default function TitleInsuranceCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [loanAmount, setLoanAmount] = useState(280000);
  const ownerPolicy=homePrice*0.005;const lenderPolicy=loanAmount*0.0035;const simultaneous=ownerPolicy+lenderPolicy*0.4;const searchFee=300;const total=simultaneous+searchFee;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label><input type="number" value={loanAmount} onChange={e=>setLoanAmount(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Owner's Policy</p><p className="text-xl font-bold text-blue-700">$${typeof ownerPolicy==='number'?ownerPolicy.toFixed(2):ownerPolicy}</p></div>
      <div><p className="text-sm text-gray-500">Lender's Policy</p><p className="text-xl font-bold text-blue-700">$${typeof lenderPolicy==='number'?lenderPolicy.toFixed(2):lenderPolicy}</p></div>
      <div><p className="text-sm text-gray-500">Simultaneous Issue Discount</p><p className="text-xl font-bold text-blue-700">$${typeof simultaneous==='number'?simultaneous.toFixed(2):simultaneous}</p></div>
      <div><p className="text-sm text-gray-500">Total with Search Fee</p><p className="text-xl font-bold text-blue-700">$${typeof total==='number'?total.toFixed(2):total}</p></div>
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
