import { useState } from 'react';

export default function BuyerClosingChecklist() {

  const [items, setItems] = useState([
    {cat:'Before Closing',checks:['Final walkthrough','Review closing disclosure','Confirm wire transfer details','Get cashier\'s check','Bring valid photo ID'],done:[] as string[]},
    {cat:'Documents to Review',checks:['Closing disclosure','Promissory note','Deed of trust','Title insurance policy','Homeowners insurance'],done:[] as string[]},
    {cat:'Financial Items',checks:['Down payment ready','Closing costs confirmed','Earnest money credited','Prepaid items calculated','Escrow account setup'],done:[] as string[]},
    {cat:'After Closing',checks:['Get copies of all documents','Change locks','Set up utilities','Update address','File homestead exemption'],done:[] as string[]},
  ]);
  const toggle = (ci:number,item:string) => {
    setItems(prev=>prev.map((c,i)=>i===ci?{...c,done:c.done.includes(item)?c.done.filter(d=>d!==item):[...c.done,item]}:c));
  };
  const total = items.reduce((a,c)=>a+c.checks.length,0);
  const checked = items.reduce((a,c)=>a+c.done.length,0);
  return (<div className="space-y-6">
    <div className="bg-green-50 rounded-xl p-4 flex justify-between items-center">
      <span className="font-semibold">Progress: {checked}/{total} items</span>
      <span className="text-green-700 font-bold">{(checked/total*100).toFixed(0)}%</span>
    </div>
    {items.map((cat,ci) => (
      <div key={cat.cat} className="border rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-2">{cat.cat}</h3>
        {cat.checks.map(item => (
          <label key={item} className="flex items-center gap-2 py-1 cursor-pointer">
            <input type="checkbox" checked={cat.done.includes(item)} onChange={()=>toggle(ci,item)} className="rounded" />
            <span className={cat.done.includes(item)?'line-through text-gray-400':''}>{item}</span>
          </label>
        ))}
      </div>
    ))}
  </div>);
}
