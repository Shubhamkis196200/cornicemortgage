import { useState } from 'react';

export default function DtiCalculator() {

  const [income, setIncome] = useState(7000);
  const [housing, setHousing] = useState(1500);
  const [car, setCar] = useState(400);
  const [student, setStudent] = useState(300);
  const [credit, setCredit] = useState(200);
  const [other, setOther] = useState(0);
  const totalDebt = housing + car + student + credit + other;
  const frontEnd = (housing / income * 100);
  const backEnd = (totalDebt / income * 100);
  const getColor = (v:number) => v<=36?'text-green-700':v<=43?'text-yellow-600':'text-red-600';
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Gross Income ($)</label><input type="number" value={income} onChange={e=>setIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Housing Payment ($)</label><input type="number" value={housing} onChange={e=>setHousing(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Car Payments ($)</label><input type="number" value={car} onChange={e=>setCar(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Student Loans ($)</label><input type="number" value={student} onChange={e=>setStudent(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Credit Card Minimums ($)</label><input type="number" value={credit} onChange={e=>setCredit(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Other Debts ($)</label><input type="number" value={other} onChange={e=>setOther(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-gray-50 rounded-xl p-6 grid grid-cols-2 gap-6">
      <div className="text-center"><p className="text-sm text-gray-500">Front-End DTI</p><p className={"text-3xl font-bold "+getColor(frontEnd)}>{frontEnd.toFixed(1)}%</p><p className="text-xs text-gray-400">Ideal: under 28%</p></div>
      <div className="text-center"><p className="text-sm text-gray-500">Back-End DTI</p><p className={"text-3xl font-bold "+getColor(backEnd)}>{backEnd.toFixed(1)}%</p><p className="text-xs text-gray-400">Ideal: under 36%</p></div>
    </div>
  </div>);
}
