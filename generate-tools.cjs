// Generator script for all tool components
const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'src/tools');
fs.mkdirSync(toolsDir, { recursive: true });

// Each tool has unique real logic
const tools = {
  'mortgage-calculator': `
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [tax, setTax] = useState(3500);
  const [insurance, setInsurance] = useState(1200);
  const loan = price - down;
  const mr = rate / 100 / 12;
  const n = term * 12;
  const mp = mr > 0 ? loan * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1) : loan / n;
  const totalPayment = mp + tax / 12 + insurance / 12;
  const totalInterest = mp * n - loan;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price ($)</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label><input type="number" value={down} onChange={e=>setDown(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label><select value={term} onChange={e=>setTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2"><option value={30}>30 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={10}>10 years</option></select></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Property Tax ($)</label><input type="number" value={tax} onChange={e=>setTax(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance ($)</label><input type="number" value={insurance} onChange={e=>setInsurance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-2xl font-bold text-blue-700">\${totalPayment.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Principal & Interest</p><p className="text-xl font-semibold">\${mp.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-semibold">\${totalInterest.toFixed(0)}</p></div>
      <div><p className="text-sm text-gray-500">Loan Amount</p><p className="text-xl font-semibold">\${loan.toLocaleString()}</p></div>
    </div>
    <p className="text-sm text-gray-500">This calculator provides estimates for informational purposes. Actual payments may vary.</p>
  </div>);`,

  'refinance-calculator': `
  const [balance, setBalance] = useState(280000);
  const [currentRate, setCurrentRate] = useState(7.0);
  const [newRate, setNewRate] = useState(6.0);
  const [remainYears, setRemainYears] = useState(25);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5000);
  const calc = (b:number,r:number,n:number) => { const mr=r/100/12; return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n; };
  const currentPmt = calc(balance, currentRate, remainYears*12);
  const newPmt = calc(balance+closingCosts, newRate, newTerm*12);
  const monthlySavings = currentPmt - newPmt;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Loan Balance ($)</label><input type="number" value={balance} onChange={e=>setBalance(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Interest Rate (%)</label><input type="number" step="0.1" value={currentRate} onChange={e=>setCurrentRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Interest Rate (%)</label><input type="number" step="0.1" value={newRate} onChange={e=>setNewRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Remaining Years on Current Loan</label><input type="number" value={remainYears} onChange={e=>setRemainYears(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">New Loan Term (years)</label><input type="number" value={newTerm} onChange={e=>setNewTerm(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Closing Costs ($)</label><input type="number" value={closingCosts} onChange={e=>setClosingCosts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-green-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div><p className="text-sm text-gray-500">Current Payment</p><p className="text-xl font-bold">\${currentPmt.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">New Payment</p><p className="text-xl font-bold text-green-700">\${newPmt.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Monthly Savings</p><p className="text-xl font-bold text-green-700">\${monthlySavings.toFixed(2)}</p></div>
      <div><p className="text-sm text-gray-500">Break-Even</p><p className="text-xl font-bold">{breakEvenMonths} months</p></div>
    </div>
  </div>);`,

  'amortization-schedule': `
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
    <div className="bg-blue-50 rounded-xl p-4"><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-2xl font-bold text-blue-700">\${pmt.toFixed(2)}</p><p className="text-sm text-gray-500 mt-1">Total Interest: \${(pmt*n-loan).toFixed(0)}</p></div>
    <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-gray-100"><th className="px-3 py-2 text-left">Month</th><th className="px-3 py-2 text-right">Payment</th><th className="px-3 py-2 text-right">Principal</th><th className="px-3 py-2 text-right">Interest</th><th className="px-3 py-2 text-right">Balance</th></tr></thead><tbody>{display.map(r=><tr key={r.month} className="border-b border-gray-100"><td className="px-3 py-1">{r.month}</td><td className="px-3 py-1 text-right">\${r.payment.toFixed(2)}</td><td className="px-3 py-1 text-right">\${r.principal.toFixed(2)}</td><td className="px-3 py-1 text-right">\${r.interest.toFixed(2)}</td><td className="px-3 py-1 text-right">\${r.balance.toFixed(2)}</td></tr>)}</tbody></table></div>
    {!showAll && schedule.length>24 && <button onClick={()=>setShowAll(true)} className="text-blue-700 font-medium">Show all {schedule.length} payments</button>}
  </div>);`,

  'home-affordability-calculator': `
  const [income, setIncome] = useState(85000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const maxDTI = 0.43;
  const maxMonthly = income / 12 * maxDTI - monthlyDebts;
  const mr = rate/100/12; const n = term*12;
  const maxLoan = mr>0 ? maxMonthly * (Math.pow(1+mr,n)-1)/(mr*Math.pow(1+mr,n)) : maxMonthly*n;
  const maxHome = maxLoan + downPayment;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Annual Gross Income ($)</label><input type="number" value={income} onChange={e=>setIncome(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Monthly Debts ($)</label><input type="number" value={monthlyDebts} onChange={e=>setMonthlyDebts(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label><input type="number" value={downPayment} onChange={e=>setDownPayment(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e=>setRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-blue-50 rounded-xl p-6 text-center">
      <p className="text-sm text-gray-500">You can afford a home up to</p>
      <p className="text-4xl font-bold text-blue-700 my-2">\${Math.round(maxHome).toLocaleString()}</p>
      <p className="text-sm text-gray-500">Max monthly payment: \${maxMonthly.toFixed(0)} | Max loan: \${Math.round(maxLoan).toLocaleString()}</p>
    </div>
  </div>);`,

  'dti-calculator': `
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
  </div>);`,

  'pmi-calculator': `
  const [homePrice, setHomePrice] = useState(350000);
  const [downPct, setDownPct] = useState(10);
  const [pmiRate, setPmiRate] = useState(0.5);
  const downAmt = homePrice * downPct / 100;
  const loanAmt = homePrice - downAmt;
  const ltv = loanAmt / homePrice * 100;
  const annualPMI = loanAmt * pmiRate / 100;
  const monthlyPMI = annualPMI / 12;
  const needsPMI = ltv > 80;
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Home Price ($)</label><input type="number" value={homePrice} onChange={e=>setHomePrice(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label><input type="number" step="1" value={downPct} onChange={e=>setDownPct(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">PMI Rate (%)</label><input type="number" step="0.1" value={pmiRate} onChange={e=>setPmiRate(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
    </div>
    <div className="bg-yellow-50 rounded-xl p-6">
      {needsPMI ? (<><p className="text-sm text-gray-500">Estimated Monthly PMI</p><p className="text-3xl font-bold text-yellow-700">\${monthlyPMI.toFixed(2)}/mo</p><p className="text-sm text-gray-500 mt-2">Annual PMI: \${annualPMI.toFixed(0)} | LTV: {ltv.toFixed(1)}%</p><p className="text-sm text-gray-400 mt-2">PMI can be removed when LTV reaches 80%. You need \${(homePrice*0.2-downAmt).toFixed(0)} more in equity.</p></>) : (<p className="text-lg font-semibold text-green-700">No PMI required! Your LTV is {ltv.toFixed(1)}% (under 80%).</p>)}
    </div>
  </div>);`,
};

// For the remaining tools, generate them with unique real logic
const remainingTools = {
  'closing-cost-estimator': { inputs: [['homePrice','Home Price',350000],['loanAmount','Loan Amount',280000]], calc: `const lenderFees=loanAmount*0.01;const titleIns=homePrice*0.005;const appraisal=500;const inspection=400;const recording=200;const attorney=1500;const prepaids=homePrice*0.015;const total=lenderFees+titleIns+appraisal+inspection+recording+attorney+prepaids;`, results: [['Total Closing Costs','total'],['Lender Fees','lenderFees'],['Title Insurance','titleIns'],['Prepaids','prepaids']] },
  'rent-vs-buy': { inputs: [['rent','Monthly Rent',1800],['homePrice','Home Price',350000],['rate','Mortgage Rate',6.5],['years','Years to Compare',7]], calc: `const down=homePrice*0.2;const loan=homePrice-down;const mr=rate/100/12;const n=30*12;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const monthlyOwn=pmt+homePrice*0.012/12+100;const totalRent=rent*years*12;const totalOwn=monthlyOwn*years*12+down;const appreciation=homePrice*Math.pow(1.03,years)-homePrice;const netOwn=totalOwn-appreciation;`, results: [['Total Rent Cost','totalRent'],['Total Owning Cost','totalOwn'],['Home Appreciation','appreciation'],['Net Cost of Owning','netOwn']] },
  'arm-vs-fixed': { inputs: [['loan','Loan Amount',280000],['fixedRate','Fixed Rate',6.5],['armInitial','ARM Initial Rate',5.5],['armAdj','ARM Adjusted Rate',7.5],['fixedPeriod','ARM Fixed Period (yrs)',5]], calc: `const n=360;const mr1=fixedRate/100/12;const fixedPmt=mr1>0?loan*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loan/n;const mr2=armInitial/100/12;const armPmt1=mr2>0?loan*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loan/n;let bal=loan;for(let i=0;i<fixedPeriod*12;i++){bal-=armPmt1-bal*mr2;}const mr3=armAdj/100/12;const rem=n-fixedPeriod*12;const armPmt2=mr3>0?bal*(mr3*Math.pow(1+mr3,rem))/(Math.pow(1+mr3,rem)-1):bal/rem;const fixedTotal=fixedPmt*n;const armTotal=armPmt1*fixedPeriod*12+armPmt2*rem;`, results: [['Fixed Monthly Payment','fixedPmt'],['ARM Initial Payment','armPmt1'],['ARM Adjusted Payment','armPmt2'],['Fixed Total Cost','fixedTotal'],['ARM Total Cost','armTotal']] },
  'down-payment-calculator': { inputs: [['homePrice','Home Price',350000],['downPct','Down Payment %',20]], calc: `const downAmt=homePrice*downPct/100;const loanAmt=homePrice-downAmt;const needsPMI=downPct<20;const pmiMonthly=needsPMI?loanAmt*0.005/12:0;`, results: [['Down Payment Amount','downAmt'],['Loan Amount','loanAmt'],['Monthly PMI','pmiMonthly']] },
  'property-tax-estimator': { inputs: [['homeValue','Home Value',350000],['taxRate','Tax Rate (%)',1.2],['exemption','Homestead Exemption',0]], calc: `const taxable=Math.max(0,homeValue-exemption);const annual=taxable*taxRate/100;const monthly=annual/12;`, results: [['Annual Property Tax','annual'],['Monthly Property Tax','monthly'],['Taxable Value','taxable']] },
  'heloc-calculator': { inputs: [['homeValue','Home Value',450000],['mortgage','Current Mortgage Balance',250000],['helocRate','HELOC Rate (%)',8.5],['drawAmount','Draw Amount',50000],['repayYears','Repayment Period (years)',10]], calc: `const equity=homeValue-mortgage;const maxHeloc=homeValue*0.85-mortgage;const mr=helocRate/100/12;const n=repayYears*12;const payment=mr>0?drawAmount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):drawAmount/n;const totalInterest=payment*n-drawAmount;`, results: [['Available Equity','equity'],['Max HELOC Amount','maxHeloc'],['Monthly Payment','payment'],['Total Interest','totalInterest']] },
  'loan-comparison': { inputs: [['loan','Loan Amount',280000],['rate1','Loan 1 Rate (%)',6.5],['term1','Loan 1 Term (years)',30],['rate2','Loan 2 Rate (%)',6.0],['term2','Loan 2 Term (years)',15]], calc: `const c=(b:number,r:number,t:number)=>{const mr=r/100/12;const n=t*12;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const pmt1=c(loan,rate1,term1);const pmt2=c(loan,rate2,term2);const total1=pmt1*term1*12;const total2=pmt2*term2*12;const int1=total1-loan;const int2=total2-loan;`, results: [['Loan 1 Payment','pmt1'],['Loan 2 Payment','pmt2'],['Loan 1 Total Interest','int1'],['Loan 2 Total Interest','int2']] },
  'pre-qualification-estimator': { inputs: [['income','Annual Income',85000],['debts','Monthly Debts',500],['downPayment','Down Payment',50000],['rate','Est. Rate (%)',6.5],['creditScore','Credit Score',720]], calc: `const dtiLimit=creditScore>=740?0.45:creditScore>=700?0.43:0.40;const maxMonthly=income/12*dtiLimit-debts;const mr=rate/100/12;const n=360;const maxLoan=mr>0?maxMonthly*(Math.pow(1+mr,n)-1)/(mr*Math.pow(1+mr,n)):maxMonthly*n;const maxPurchase=maxLoan+downPayment;`, results: [['Max Purchase Price','maxPurchase'],['Max Loan Amount','maxLoan'],['Max Monthly Payment','maxMonthly'],['DTI Limit Used','{(dtiLimit*100).toFixed(0)+"%"}']] },
  'biweekly-payment-calculator': { inputs: [['loan','Loan Amount',280000],['rate','Interest Rate (%)',6.5],['term','Term (years)',30]], calc: `const mr=rate/100/12;const n=term*12;const monthlyPmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const biweekly=monthlyPmt/2;const annualExtra=monthlyPmt;let balMonthly=loan;let balBiweekly=loan;let monthsMonthly=0;let monthsBiweekly=0;const br=rate/100/26;for(let i=0;i<n;i++){balMonthly-=monthlyPmt-balMonthly*mr;monthsMonthly=i+1;if(balMonthly<=0)break;}let bBal=loan;for(let i=0;i<n*2;i++){bBal-=biweekly-bBal*br;monthsBiweekly=i+1;if(bBal<=0)break;}const yearsSaved=(monthsMonthly-monthsBiweekly/2.17)/12;const interestSaved=monthlyPmt*monthsMonthly-(biweekly*monthsBiweekly);`, results: [['Monthly Payment','monthlyPmt'],['Bi-Weekly Payment','biweekly'],['Years Saved','yearsSaved'],['Interest Saved','interestSaved']] },
  'rate-lock-advisor': { inputs: [['loanAmount','Loan Amount',280000],['currentRate','Current Rate (%)',6.5],['expectedRate','Expected Rate if Wait (%)',6.75],['lockDays','Lock Period (days)',45],['lockCost','Lock Fee ($)',500]], calc: `const mr1=currentRate/100/12;const mr2=expectedRate/100/12;const n=360;const pmt1=mr1>0?loanAmount*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loanAmount/n;const pmt2=mr2>0?loanAmount*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loanAmount/n;const monthlySavings=pmt2-pmt1;const lifetimeSavings=monthlySavings*n;const shouldLock=lifetimeSavings>lockCost;`, results: [['Payment at Current Rate','pmt1'],['Payment if Rate Rises','pmt2'],['Monthly Difference','monthlySavings'],['Lifetime Savings from Locking','lifetimeSavings']] },
  'points-comparison': { inputs: [['loan','Loan Amount',280000],['rateNoPoints','Rate without Points (%)',6.5],['rateWithPoints','Rate with Points (%)',6.0],['pointsCost','Points Cost (%)',1.0],['holdYears','Years You Plan to Stay',7]], calc: `const cost=loan*pointsCost/100;const mr1=rateNoPoints/100/12;const mr2=rateWithPoints/100/12;const n=360;const pmt1=mr1>0?loan*(mr1*Math.pow(1+mr1,n))/(Math.pow(1+mr1,n)-1):loan/n;const pmt2=mr2>0?loan*(mr2*Math.pow(1+mr2,n))/(Math.pow(1+mr2,n)-1):loan/n;const monthlySaved=pmt1-pmt2;const breakEven=monthlySaved>0?Math.ceil(cost/monthlySaved):0;const totalSaved=monthlySaved*holdYears*12-cost;`, results: [['Points Cost','cost'],['Monthly Savings','monthlySaved'],['Break-Even','breakEven','months'],['Net Savings over '+'{holdYears}'+' years','totalSaved']] },
  'cash-out-refi-calculator': { inputs: [['homeValue','Home Value',450000],['currentBalance','Current Balance',250000],['cashOut','Cash Out Amount',50000],['newRate','New Rate (%)',6.5],['newTerm','New Term (years)',30]], calc: `const newLoan=currentBalance+cashOut;const maxLTV=homeValue*0.8;const allowed=maxLTV>=newLoan;const mr=newRate/100/12;const n=newTerm*12;const pmt=mr>0?newLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):newLoan/n;const totalCost=pmt*n;const ltv=newLoan/homeValue*100;`, results: [['New Loan Amount','newLoan'],['Monthly Payment','pmt'],['LTV After Refi','{ltv.toFixed(1)+"%"}'],['Total Cost over Term','totalCost']] },
  'home-equity-calculator': { inputs: [['homeValue','Current Home Value',450000],['mortgageBalance','Mortgage Balance',280000],['otherLiens','Other Liens ($)',0]], calc: `const equity=homeValue-mortgageBalance-otherLiens;const equityPct=equity/homeValue*100;const borrowable=homeValue*0.85-mortgageBalance-otherLiens;`, results: [['Total Equity','equity'],['Equity Percentage','{equityPct.toFixed(1)+"%"}'],['Borrowable Equity (85% LTV)','borrowable']] },
  'fha-loan-calculator': { inputs: [['homePrice','Home Price',300000],['downPct','Down Payment (%)',3.5],['rate','Interest Rate (%)',6.0],['term','Term (years)',30]], calc: `const downAmt=homePrice*downPct/100;const baseLoan=homePrice-downAmt;const upfrontMIP=baseLoan*0.0175;const totalLoan=baseLoan+upfrontMIP;const annualMIP=downPct<10?totalLoan*0.0055:totalLoan*0.005;const monthlyMIP=annualMIP/12;const mr=rate/100/12;const n=term*12;const basePmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;const totalPmt=basePmt+monthlyMIP;`, results: [['Monthly Payment (with MIP)','totalPmt'],['Base P&I','basePmt'],['Monthly MIP','monthlyMIP'],['Upfront MIP','upfrontMIP']] },
  'va-loan-calculator': { inputs: [['homePrice','Home Price',350000],['rate','Interest Rate (%)',5.75],['term','Term (years)',30],['firstUse','First Time Use',1],['downPct','Down Payment (%)',0]], calc: `const downAmt=homePrice*downPct/100;const loan=homePrice-downAmt;const fundingPct=firstUse?(downPct>=5?0.015:0.023):(downPct>=5?0.015:0.036);const fundingFee=loan*fundingPct;const totalLoan=loan+fundingFee;const mr=rate/100/12;const n=term*12;const pmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;`, results: [['Monthly Payment','pmt'],['Funding Fee','fundingFee'],['Total Loan Amount','totalLoan'],['Funding Fee Rate','{(fundingPct*100).toFixed(1)+"%"}']] },
  'usda-loan-calculator': { inputs: [['homePrice','Home Price',250000],['rate','Interest Rate (%)',5.75],['term','Term (years)',30]], calc: `const upfrontFee=homePrice*0.01;const totalLoan=homePrice+upfrontFee;const annualFee=totalLoan*0.0035;const monthlyFee=annualFee/12;const mr=rate/100/12;const n=term*12;const basePmt=mr>0?totalLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalLoan/n;const totalPmt=basePmt+monthlyFee;`, results: [['Monthly Payment','totalPmt'],['Base P&I','basePmt'],['Monthly Guarantee Fee','monthlyFee'],['Upfront Fee','upfrontFee']] },
  'jumbo-loan-calculator': { inputs: [['loan','Loan Amount',800000],['rate','Interest Rate (%)',6.75],['term','Term (years)',30],['downPct','Down Payment (%)',20]], calc: `const homePrice=loan/(1-downPct/100);const downAmt=homePrice*downPct/100;const mr=rate/100/12;const n=term*12;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const totalInterest=pmt*n-loan;const isJumbo=loan>766550;`, results: [['Monthly Payment','pmt'],['Total Interest','totalInterest'],['Home Price','homePrice'],['Jumbo Status','{isJumbo?"Yes - Jumbo Loan":"Conforming Loan"}']] },
  '15-vs-30-year': { inputs: [['loan','Loan Amount',280000],['rate15','15-Year Rate (%)',5.75],['rate30','30-Year Rate (%)',6.5]], calc: `const c=(b:number,r:number,t:number)=>{const mr=r/100/12;const n=t*12;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const pmt15=c(loan,rate15,15);const pmt30=c(loan,rate30,30);const total15=pmt15*180;const total30=pmt30*360;const interestSaved=total30-total15;const pmtDiff=pmt15-pmt30;`, results: [['15-Year Payment','pmt15'],['30-Year Payment','pmt30'],['Payment Difference','pmtDiff'],['Interest Saved with 15-Year','interestSaved']] },
  'interest-only-calculator': { inputs: [['loan','Loan Amount',280000],['rate','Interest Rate (%)',6.5],['ioPeriod','Interest-Only Period (years)',10],['fullTerm','Full Loan Term (years)',30]], calc: `const ioPmt=loan*rate/100/12;const remainTerm=(fullTerm-ioPeriod)*12;const mr=rate/100/12;const fullPmt=mr>0?loan*(mr*Math.pow(1+mr,remainTerm))/(Math.pow(1+mr,remainTerm)-1):loan/remainTerm;const totalIO=ioPmt*ioPeriod*12;const totalFull=fullPmt*remainTerm;const totalCost=totalIO+totalFull;`, results: [['Interest-Only Payment','ioPmt'],['Full Payment After IO','fullPmt'],['Total IO Period Cost','totalIO'],['Total Loan Cost','totalCost']] },
  'extra-payment-calculator': { inputs: [['loan','Loan Amount',280000],['rate','Interest Rate (%)',6.5],['term','Term (years)',30],['extra','Extra Monthly Payment',200]], calc: `const mr=rate/100/12;const n=term*12;const basePmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;let bal1=loan,bal2=loan,m1=0,m2=0;for(let i=0;i<n;i++){if(bal1>0){bal1-=basePmt-bal1*mr;m1=i+1;}if(bal2>0){bal2-=(basePmt+extra)-bal2*mr;m2=i+1;}if(bal1<=0&&bal2<=0)break;}const monthsSaved=m1-m2;const interestSaved=basePmt*m1-(basePmt+extra)*m2;`, results: [['Base Payment','basePmt'],['New Payment','{(basePmt+extra).toFixed(2)}'],['Months Saved','monthsSaved'],['Interest Saved','interestSaved']] },
  'break-even-refinance': { inputs: [['currentPmt','Current Monthly Payment',1900],['newPmt','New Monthly Payment',1700],['closingCosts','Closing Costs',6000]], calc: `const savings=currentPmt-newPmt;const breakEvenMonths=savings>0?Math.ceil(closingCosts/savings):0;const breakEvenYears=breakEvenMonths/12;const fiveYearSavings=savings*60-closingCosts;`, results: [['Monthly Savings','savings'],['Break-Even Point','{breakEvenMonths+" months ("+breakEvenYears.toFixed(1)+" years)"}'],['5-Year Net Savings','fiveYearSavings']] },
  'moving-cost-estimator': { inputs: [['distance','Distance (miles)',500],['rooms','Number of Rooms',4],['diy','DIY Move (0=No, 1=Yes)',0]], calc: `const baseLocal=rooms*400;const baseLong=rooms*1000+distance*0.50;const isLocal=distance<100;const proRate=isLocal?baseLocal:baseLong;const diyRate=proRate*0.4;const cost=diy?diyRate:proRate;const packing=rooms*200;const insurance=proRate*0.03;const total=cost+packing+insurance;`, results: [['Moving Service','cost'],['Packing Materials','packing'],['Insurance','insurance'],['Total Estimated Cost','total']] },
  'home-inspection-checklist': `
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
  </div>);`,
  'title-insurance-calculator': { inputs: [['homePrice','Home Price',350000],['loanAmount','Loan Amount',280000]], calc: `const ownerPolicy=homePrice*0.005;const lenderPolicy=loanAmount*0.0035;const simultaneous=ownerPolicy+lenderPolicy*0.4;const searchFee=300;const total=simultaneous+searchFee;`, results: [["Owner's Policy",'ownerPolicy'],["Lender's Policy",'lenderPolicy'],['Simultaneous Issue Discount','simultaneous'],['Total with Search Fee','total']] },
  'escrow-calculator': { inputs: [['annualTax','Annual Property Tax',4200],['annualInsurance','Annual Insurance',1400],['annualFlood','Flood Insurance (if any)',0]], calc: `const monthlyTax=annualTax/12;const monthlyIns=annualInsurance/12;const monthlyFlood=annualFlood/12;const total=monthlyTax+monthlyIns+monthlyFlood;const cushion=total*2;const initialDeposit=total*3+cushion;`, results: [['Monthly Escrow','total'],['Monthly Tax Portion','monthlyTax'],['Monthly Insurance Portion','monthlyIns'],['Initial Escrow Deposit','initialDeposit']] },
  'hoa-calculator': { inputs: [['mortgage','Monthly Mortgage Payment',1800],['hoa','Monthly HOA Fee',350],['tax','Monthly Property Tax',350],['insurance','Monthly Insurance',120]], calc: `const totalMonthly=mortgage+hoa+tax+insurance;const totalAnnual=totalMonthly*12;const hoaPct=hoa/totalMonthly*100;`, results: [['Total Monthly Housing Cost','totalMonthly'],['Total Annual Cost','totalAnnual'],['HOA % of Total','{hoaPct.toFixed(1)+"%"}']] },
  'renovation-roi-calculator': { inputs: [['projectCost','Project Cost',25000],['valueAdded','Estimated Value Added',35000],['projectType','Project Type (1=Kitchen,2=Bath,3=Deck,4=Other)',1]], calc: `const roi=(valueAdded-projectCost)/projectCost*100;const avgROI=[80,70,75,50];const industryAvg=avgROI[Math.min(projectType-1,3)];const netGain=valueAdded-projectCost;`, results: [['Return on Investment','{roi.toFixed(1)+"%"}'],['Net Gain','netGain'],['Industry Average ROI','{industryAvg+"%"}']] },
  'house-flipping-calculator': { inputs: [['purchasePrice','Purchase Price',200000],['rehabCost','Rehab Cost',50000],['holdingMonths','Holding Period (months)',6],['arv','After Repair Value (ARV)',320000],['holdingCostMo','Monthly Holding Cost',2500]], calc: `const totalInvestment=purchasePrice+rehabCost;const holdingCosts=holdingCostMo*holdingMonths;const sellingCosts=arv*0.08;const totalCosts=totalInvestment+holdingCosts+sellingCosts;const profit=arv-totalCosts;const roi=profit/totalInvestment*100;const rule70=arv*0.7-rehabCost;`, results: [['Estimated Profit','profit'],['ROI','{roi.toFixed(1)+"%"}'],['Total Costs','totalCosts'],['70% Rule Max Purchase','rule70']] },
  'rental-property-roi': { inputs: [['purchasePrice','Purchase Price',300000],['monthlyRent','Monthly Rent',2200],['downPayment','Down Payment',60000],['expenses','Monthly Expenses',800],['vacancy','Vacancy Rate (%)',5]], calc: `const effectiveRent=monthlyRent*(1-vacancy/100);const noi=(effectiveRent-expenses)*12;const cashOnCash=noi/downPayment*100;const grossYield=monthlyRent*12/purchasePrice*100;const capRate=noi/purchasePrice*100;`, results: [['Annual NOI','noi'],['Cash-on-Cash Return','{cashOnCash.toFixed(1)+"%"}'],['Gross Yield','{grossYield.toFixed(1)+"%"}'],['Cap Rate','{capRate.toFixed(1)+"%"}']] },
  'cap-rate-calculator': { inputs: [['propertyValue','Property Value',400000],['grossIncome','Annual Gross Income',36000],['expenses','Annual Operating Expenses',12000]], calc: `const noi=grossIncome-expenses;const capRate=noi/propertyValue*100;const grm=propertyValue/grossIncome;`, results: [['Net Operating Income','noi'],['Cap Rate','{capRate.toFixed(1)+"%"}'],['Gross Rent Multiplier','{grm.toFixed(1)}']] },
  'real-estate-commission': { inputs: [['salePrice','Sale Price',400000],['commissionPct','Total Commission (%)',6],['buyerAgentPct','Buyer Agent Split (%)',3]], calc: `const totalCommission=salePrice*commissionPct/100;const buyerAgent=salePrice*buyerAgentPct/100;const listingAgent=totalCommission-buyerAgent;const netToSeller=salePrice-totalCommission;`, results: [['Total Commission','totalCommission'],['Listing Agent','listingAgent'],['Buyer Agent','buyerAgent'],['Net to Seller','netToSeller']] },
  'seller-net-sheet': { inputs: [['salePrice','Sale Price',400000],['mortgage','Remaining Mortgage',250000],['commission','Commission (%)',6],['closingPct','Closing Costs (%)',2],['repairs','Repairs/Concessions',5000]], calc: `const commissionAmt=salePrice*commission/100;const closingCosts=salePrice*closingPct/100;const totalDeductions=commissionAmt+closingCosts+repairs+mortgage;const netProceeds=salePrice-totalDeductions;`, results: [['Net Proceeds','netProceeds'],['Commission','commissionAmt'],['Closing Costs','closingCosts'],['Total Deductions','totalDeductions']] },
  'buyer-closing-checklist': `
  const [items, setItems] = useState([
    {cat:'Before Closing',checks:['Final walkthrough','Review closing disclosure','Confirm wire transfer details','Get cashier\\'s check','Bring valid photo ID'],done:[] as string[]},
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
  </div>);`,
  'mortgage-payoff-date': { inputs: [['balance','Current Balance',280000],['rate','Interest Rate (%)',6.5],['payment','Monthly Payment',1770],['extra','Extra Monthly Payment',0]], calc: `const mr=rate/100/12;let bal=balance;let months=0;while(bal>0&&months<600){const interest=bal*mr;const principal=payment+extra-interest;if(principal<=0){months=999;break;}bal-=principal;months++;}const years=Math.floor(months/12);const mos=months%12;const payoffDate=new Date();payoffDate.setMonth(payoffDate.getMonth()+months);const dateStr=payoffDate.toLocaleDateString('en-US',{month:'long',year:'numeric'});const totalPaid=(payment+extra)*months;const totalInterest=totalPaid-balance;`, results: [['Payoff In','{years+" years, "+mos+" months"}'],['Payoff Date','{dateStr}'],['Total Interest Paid','totalInterest'],['Total Amount Paid','totalPaid']] },
  'home-value-estimator': { inputs: [['purchasePrice','Original Purchase Price',300000],['yearsPurchased','Years Since Purchase',5],['annualAppreciation','Annual Appreciation (%)',3.5],['improvements','Value of Improvements',20000]], calc: `const appreciated=purchasePrice*Math.pow(1+annualAppreciation/100,yearsPurchased);const estimatedValue=appreciated+improvements;const totalGain=estimatedValue-purchasePrice;const gainPct=totalGain/purchasePrice*100;`, results: [['Estimated Current Value','estimatedValue'],['Total Appreciation','totalGain'],['Gain Percentage','{gainPct.toFixed(1)+"%"}'],['Value from Improvements','improvements']] },
  'ltv-calculator': { inputs: [['loanBalance','Loan Balance',280000],['homeValue','Home Value',350000]], calc: `const ltv=loanBalance/homeValue*100;const equity=homeValue-loanBalance;const equityPct=equity/homeValue*100;const needsPMI=ltv>80;const toRemovePMI=Math.max(0,loanBalance-homeValue*0.8);`, results: [['Loan-to-Value Ratio','{ltv.toFixed(1)+"%"}'],['Equity','equity'],['Equity Percentage','{equityPct.toFixed(1)+"%"}'],['$ to Remove PMI','toRemovePMI']] },
  'stamp-duty-calculator': { inputs: [['price','Property Price',350000],['firstTimeBuyer','First-Time Buyer (0=No,1=Yes)',1],['state','State Tax Rate (%)',1.1]], calc: `const stateTax=price*state/100;const discount=firstTimeBuyer?Math.min(stateTax*0.25,2000):0;const totalDuty=stateTax-discount;const effectiveRate=totalDuty/price*100;`, results: [['Transfer Tax','stateTax'],['First-Time Buyer Discount','discount'],['Total Due','totalDuty'],['Effective Rate','{effectiveRate.toFixed(2)+"%"}']] },
  'mortgage-stress-test': { inputs: [['loan','Loan Amount',280000],['currentRate','Current Rate (%)',6.5],['stressRate','Stress Test Rate (%)',8.5],['income','Monthly Gross Income',7000],['otherDebts','Other Monthly Debts',500]], calc: `const c=(b:number,r:number)=>{const mr=r/100/12;const n=360;return mr>0?b*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):b/n;};const currentPmt=c(loan,currentRate);const stressPmt=c(loan,stressRate);const currentDTI=(currentPmt+otherDebts)/income*100;const stressDTI=(stressPmt+otherDebts)/income*100;const passes=stressDTI<=43;const paymentIncrease=stressPmt-currentPmt;`, results: [['Current Payment','currentPmt'],['Stress Test Payment','stressPmt'],['Payment Increase','paymentIncrease'],['Stress DTI','{stressDTI.toFixed(1)+"% "+(passes?"✅ Pass":"❌ Fail")}']] },
  'income-requirement-calculator': { inputs: [['targetLoan','Target Loan Amount',280000],['rate','Interest Rate (%)',6.5],['term','Loan Term (years)',30],['otherDebts','Monthly Debts',500],['maxDTI','Max DTI (%)',43]], calc: `const mr=rate/100/12;const n=term*12;const pmt=mr>0?targetLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):targetLoan/n;const minMonthlyIncome=(pmt+otherDebts)/(maxDTI/100);const minAnnualIncome=minMonthlyIncome*12;const hourlyWage=minAnnualIncome/2080;`, results: [['Monthly Mortgage Payment','pmt'],['Required Monthly Income','minMonthlyIncome'],['Required Annual Income','minAnnualIncome'],['Equivalent Hourly Wage','hourlyWage']] },
  'mortgage-recast-calculator': { inputs: [['currentBalance','Current Balance',250000],['lumpSum','Lump Sum Payment',50000],['rate','Interest Rate (%)',6.5],['remainingMonths','Remaining Months',300]], calc: `const newBalance=currentBalance-lumpSum;const mr=rate/100/12;const oldPmt=mr>0?currentBalance*(mr*Math.pow(1+mr,remainingMonths))/(Math.pow(1+mr,remainingMonths)-1):currentBalance/remainingMonths;const newPmt=mr>0?newBalance*(mr*Math.pow(1+mr,remainingMonths))/(Math.pow(1+mr,remainingMonths)-1):newBalance/remainingMonths;const monthlySavings=oldPmt-newPmt;const totalSavings=monthlySavings*remainingMonths;`, results: [['Old Payment','oldPmt'],['New Payment','newPmt'],['Monthly Savings','monthlySavings'],['Total Lifetime Savings','totalSavings']] },
  'home-insurance-estimator': { inputs: [['homeValue','Home Value',350000],['deductible','Deductible',1000],['location','Risk Factor (1=Low,2=Med,3=High)',2]], calc: `const baseRate=[0.003,0.005,0.008];const rate=baseRate[Math.min(location-1,2)];const coverage=homeValue*0.8;const annualPremium=coverage*rate;const monthlyPremium=annualPremium/12;const deductibleDiscount=deductible>1000?(deductible-1000)*0.02:0;const adjPremium=annualPremium-deductibleDiscount;`, results: [['Annual Premium','adjPremium'],['Monthly Premium','{(adjPremium/12).toFixed(2)}'],['Coverage Amount','coverage']] },
  'land-transfer-tax': { inputs: [['price','Purchase Price',350000],['state','State Rate (%)',1.0],['county','County Rate (%)',0.5]], calc: `const stateTax=price*state/100;const countyTax=price*county/100;const total=stateTax+countyTax;const effectiveRate=total/price*100;`, results: [['State Tax','stateTax'],['County Tax','countyTax'],['Total Transfer Tax','total'],['Effective Rate','{effectiveRate.toFixed(2)+"%"}']] },
  'investment-property-mortgage': { inputs: [['price','Property Price',400000],['downPct','Down Payment (%)',25],['rate','Interest Rate (%)',7.0],['rent','Expected Monthly Rent',2800]], calc: `const down=price*downPct/100;const loan=price-down;const mr=rate/100/12;const n=360;const pmt=mr>0?loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loan/n;const expenses=rent*0.4;const cashFlow=rent-pmt-expenses;const annualCashFlow=cashFlow*12;const cashOnCash=annualCashFlow/down*100;`, results: [['Monthly Payment','pmt'],['Est. Monthly Cash Flow','cashFlow'],['Annual Cash Flow','annualCashFlow'],['Cash-on-Cash Return','{cashOnCash.toFixed(1)+"%"}']] },
  'construction-loan-calculator': { inputs: [['totalBuild','Total Build Cost',400000],['landCost','Land Cost',100000],['rate','Construction Rate (%)',8.0],['buildMonths','Build Period (months)',12],['permRate','Permanent Rate (%)',6.5]], calc: `const totalProject=totalBuild+landCost;const avgDrawn=totalProject*0.5;const constructionInterest=avgDrawn*rate/100/12*buildMonths;const mr=permRate/100/12;const n=360;const permPmt=mr>0?totalProject*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):totalProject/n;const ioPayment=totalProject*rate/100/12;`, results: [['IO Payment During Construction','ioPayment'],['Est. Construction Interest','constructionInterest'],['Permanent Monthly Payment','permPmt'],['Total Project Cost','totalProject']] },
  'bridge-loan-calculator': { inputs: [['currentHome','Current Home Value',400000],['currentMortgage','Current Mortgage',200000],['newHome','New Home Price',500000],['bridgeRate','Bridge Rate (%)',9.0],['months','Bridge Period (months)',6]], calc: `const equity=currentHome-currentMortgage;const bridgeAmount=Math.min(equity*0.8,newHome*0.8);const monthlyInterest=bridgeAmount*bridgeRate/100/12;const totalCost=monthlyInterest*months;const originationFee=bridgeAmount*0.02;const totalBridgeCost=totalCost+originationFee;`, results: [['Bridge Loan Amount','bridgeAmount'],['Monthly Interest Payment','monthlyInterest'],['Origination Fee','originationFee'],['Total Bridge Cost','totalBridgeCost']] },
  'home-equity-loan-calculator': { inputs: [['homeValue','Home Value',450000],['mortgageBalance','Mortgage Balance',250000],['loanAmount','Desired Loan Amount',50000],['rate','Interest Rate (%)',7.5],['term','Term (years)',15]], calc: `const equity=homeValue-mortgageBalance;const maxLoan=homeValue*0.85-mortgageBalance;const mr=rate/100/12;const n=term*12;const pmt=mr>0?loanAmount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):loanAmount/n;const totalInterest=pmt*n-loanAmount;const combinedLTV=(mortgageBalance+loanAmount)/homeValue*100;`, results: [['Monthly Payment','pmt'],['Total Interest','totalInterest'],['Max Available','maxLoan'],['Combined LTV','{combinedLTV.toFixed(1)+"%"}']] },
};

function generateToolComponent(slug, body) {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  if (typeof body === 'string') {
    // Custom JSX body (checklists etc)
    return `import { useState } from 'react';

export default function ${name}() {
${body}
}
`;
  }

  // Standard calculator pattern
  const { inputs, calc, results } = body;
  const stateLines = inputs.map(([key, label, def]) =>
    `  const [${key}, set${key.charAt(0).toUpperCase()+key.slice(1)}] = useState(${typeof def === 'number' ? def : `'${def}'`});`
  ).join('\n');

  const inputJSX = inputs.map(([key, label, def]) => {
    const setter = `set${key.charAt(0).toUpperCase()+key.slice(1)}`;
    return `      <div><label className="block text-sm font-medium text-gray-700 mb-1">${label}</label><input type="number" ${typeof def === 'number' && def % 1 !== 0 ? 'step="0.1" ' : ''}value={${key}} onChange={e=>${setter}(+e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>`;
  }).join('\n');

  const resultJSX = results.map(([label, expr, suffix]) => {
    const valExpr = expr.startsWith('{') ? expr : `\${typeof ${expr}==='number'?${expr}.toFixed(2):${expr}}`;
    return `      <div><p className="text-sm text-gray-500">${label}</p><p className="text-xl font-bold text-blue-700">${expr.startsWith('{')?`{${expr.slice(1,-1)}}`:('$'+valExpr)}${suffix ? ' '+suffix : ''}</p></div>`;
  }).join('\n');

  return `import { useState } from 'react';

export default function ${name}() {
${stateLines}
  ${calc}
  return (<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
${inputJSX}
    </div>
    <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
${resultJSX}
    </div>
    <p className="text-sm text-gray-500">Results are estimates for informational purposes only.</p>
  </div>);
}
`;
}

// Write all tool files
const allTools = { ...tools, ...remainingTools };
let count = 0;
for (const [slug, body] of Object.entries(allTools)) {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  let content;
  if (typeof body === 'string') {
    // It's a full custom body from the `tools` object
    content = `import { useState } from 'react';

export default function ${name}() {
${body}
}
`;
  } else {
    content = generateToolComponent(slug, body);
  }

  fs.writeFileSync(path.join(toolsDir, `${name}.tsx`), content);
  count++;
}

console.log(`Generated ${count} tool components`);

// Generate index file
const indexLines = Object.keys(allTools).map(slug => {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `  '${slug}': lazy(() => import('./${name}')),`;
});

fs.writeFileSync(path.join(toolsDir, 'index.ts'),
  `import { lazy } from 'react';\n\nexport const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {\n${indexLines.join('\n')}\n};\n`
);

console.log('Generated tool index');
