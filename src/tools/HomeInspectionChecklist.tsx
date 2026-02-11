import { useState } from 'react';

export default function HomeInspectionChecklist() {

  const [items, setItems] = useState([
    {cat:'Structure',checks:['Foundation','Walls','Roof','Attic','Basement'],done:[] as string[]},
    {cat:'Exterior',checks:['Siding','Windows','Doors','Drainage','Driveway'],done:[] as string[]},
    {cat:'Plumbing',checks:['Water heater','Pipes','Faucets','Toilets','Water pressure'],done:[] as string[]},
    {cat:'Electrical',checks:['Panel','Outlets','Switches','GFCI','Wiring'],done:[] as string[]},
    {cat:'HVAC',checks:['Furnace','AC','Ductwork','Thermostat','Filters'],done:[] as string[]},
    {cat:'Interior',checks:['Floors','Ceilings','Paint','Appliances','Smoke detectors'],done:[] as string[]},
  ]);
  const toggle = (ci:number,item:string) => {
    setItems(prev=>prev.map((c,i)=>i===ci?{...c,done:c.done.includes(item)?c.done.filter(d=>d!==item):[...c.done,item]}:c));
  };
  const total = items.reduce((a,c)=>a+c.checks.length,0);
  const checked = items.reduce((a,c)=>a+c.done.length,0);
  return (<div className="space-y-6">
    <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
      <span className="font-semibold">Progress: {checked}/{total} items checked</span>
      <span className="text-blue-700 font-bold">{(checked/total*100).toFixed(0)}%</span>
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
