export interface ToolInfo {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export interface ToolCategory {
  name: string;
  tools: ToolInfo[];
}

const calculators: ToolInfo[] = [
  { slug: 'mortgage-calculator', name: 'Mortgage Calculator', description: 'Calculate your monthly mortgage payment with principal, interest, taxes, and insurance.', category: 'Basic Calculators' },
  { slug: 'refinance-calculator', name: 'Refinance Calculator', description: 'See how much you could save by refinancing your current mortgage.', category: 'Basic Calculators' },
  { slug: 'amortization-schedule', name: 'Amortization Schedule', description: 'View a complete breakdown of every payment over your loan term.', category: 'Basic Calculators' },
  { slug: 'home-affordability-calculator', name: 'Home Affordability Calculator', description: 'Find out how much house you can afford based on your income and debts.', category: 'Basic Calculators' },
  { slug: 'dti-calculator', name: 'DTI Calculator', description: 'Calculate your debt-to-income ratio to see if you qualify for a mortgage.', category: 'Basic Calculators' },
  { slug: 'pmi-calculator', name: 'PMI Calculator', description: 'Estimate your private mortgage insurance costs.', category: 'Basic Calculators' },
  { slug: 'closing-cost-estimator', name: 'Closing Cost Estimator', description: 'Estimate the total closing costs for your home purchase.', category: 'Buying Tools' },
  { slug: 'rent-vs-buy', name: 'Rent vs Buy Comparison', description: 'Compare the costs of renting versus buying a home.', category: 'Buying Tools' },
  { slug: 'arm-vs-fixed', name: 'ARM vs Fixed Comparison', description: 'Compare adjustable-rate and fixed-rate mortgage options.', category: 'Loan Comparison' },
  { slug: 'down-payment-calculator', name: 'Down Payment Calculator', description: 'Calculate how much you need for a down payment.', category: 'Buying Tools' },
  { slug: 'property-tax-estimator', name: 'Property Tax Estimator', description: 'Estimate annual property taxes based on home value and local rates.', category: 'Buying Tools' },
  { slug: 'heloc-calculator', name: 'HELOC Calculator', description: 'Calculate payments and costs for a home equity line of credit.', category: 'Equity Tools' },
  { slug: 'loan-comparison', name: 'Loan Comparison Tool', description: 'Compare up to 3 loan offers side by side.', category: 'Loan Comparison' },
  { slug: 'pre-qualification-estimator', name: 'Pre-Qualification Estimator', description: 'Get an estimate of how much you might pre-qualify for.', category: 'Buying Tools' },
  { slug: 'biweekly-payment-calculator', name: 'Bi-Weekly Payment Calculator', description: 'See how bi-weekly payments can save you money over the life of your loan.', category: 'Payment Tools' },
  { slug: 'rate-lock-advisor', name: 'Rate Lock Advisor', description: 'Determine whether to lock your mortgage rate now or wait.', category: 'Rate Tools' },
  { slug: 'points-comparison', name: 'Points vs No-Points Comparison', description: 'Compare paying discount points versus a higher interest rate.', category: 'Rate Tools' },
  { slug: 'cash-out-refi-calculator', name: 'Cash-Out Refi Calculator', description: 'Calculate the costs and benefits of a cash-out refinance.', category: 'Equity Tools' },
  { slug: 'home-equity-calculator', name: 'Home Equity Calculator', description: 'Calculate your current home equity.', category: 'Equity Tools' },
  { slug: 'fha-loan-calculator', name: 'FHA Loan Calculator', description: 'Calculate payments for an FHA loan including MIP.', category: 'Loan Types' },
  { slug: 'va-loan-calculator', name: 'VA Loan Calculator', description: 'Calculate VA loan payments and funding fee.', category: 'Loan Types' },
  { slug: 'usda-loan-calculator', name: 'USDA Loan Calculator', description: 'Calculate USDA rural development loan payments.', category: 'Loan Types' },
  { slug: 'jumbo-loan-calculator', name: 'Jumbo Loan Calculator', description: 'Calculate payments for jumbo loans above conforming limits.', category: 'Loan Types' },
  { slug: '15-vs-30-year', name: '15 vs 30 Year Comparison', description: 'Compare 15-year and 30-year mortgage options.', category: 'Loan Comparison' },
  { slug: 'interest-only-calculator', name: 'Interest-Only Calculator', description: 'Calculate payments during the interest-only period.', category: 'Payment Tools' },
  { slug: 'extra-payment-calculator', name: 'Extra Payment Impact Calculator', description: 'See how extra payments reduce your loan term and interest.', category: 'Payment Tools' },
  { slug: 'break-even-refinance', name: 'Break-Even Refinance Calculator', description: 'Find out when refinancing will pay for itself.', category: 'Rate Tools' },
  { slug: 'moving-cost-estimator', name: 'Moving Cost Estimator', description: 'Estimate the total cost of moving to a new home.', category: 'Buying Tools' },
  { slug: 'home-inspection-checklist', name: 'Home Inspection Checklist', description: 'Interactive checklist for home inspections.', category: 'Buying Tools' },
  { slug: 'title-insurance-calculator', name: 'Title Insurance Calculator', description: 'Estimate title insurance premiums for your purchase.', category: 'Buying Tools' },
  { slug: 'escrow-calculator', name: 'Escrow Calculator', description: 'Calculate your monthly escrow payment for taxes and insurance.', category: 'Payment Tools' },
  { slug: 'hoa-calculator', name: 'HOA Fee Calculator', description: 'Factor HOA fees into your total monthly housing cost.', category: 'Payment Tools' },
  { slug: 'renovation-roi-calculator', name: 'Renovation ROI Calculator', description: 'Estimate the return on investment for home improvements.', category: 'Investment Tools' },
  { slug: 'house-flipping-calculator', name: 'House Flipping Calculator', description: 'Calculate potential profit from flipping a house.', category: 'Investment Tools' },
  { slug: 'rental-property-roi', name: 'Rental Property ROI Calculator', description: 'Calculate the return on investment for rental properties.', category: 'Investment Tools' },
  { slug: 'cap-rate-calculator', name: 'Cap Rate Calculator', description: 'Calculate the capitalization rate for investment properties.', category: 'Investment Tools' },
  { slug: 'real-estate-commission', name: 'Real Estate Commission Calculator', description: 'Calculate agent commissions on a home sale.', category: 'Selling Tools' },
  { slug: 'seller-net-sheet', name: 'Seller Net Sheet', description: 'Estimate your net proceeds from selling your home.', category: 'Selling Tools' },
  { slug: 'buyer-closing-checklist', name: 'Buyer Closing Checklist', description: 'Interactive checklist for the closing process.', category: 'Buying Tools' },
  { slug: 'mortgage-payoff-date', name: 'Mortgage Payoff Date Calculator', description: 'Calculate when your mortgage will be paid off.', category: 'Payment Tools' },
  { slug: 'home-value-estimator', name: 'Home Value Estimator', description: 'Estimate your home\'s current market value.', category: 'Equity Tools' },
  { slug: 'ltv-calculator', name: 'LTV Calculator', description: 'Calculate your loan-to-value ratio.', category: 'Basic Calculators' },
  { slug: 'stamp-duty-calculator', name: 'Stamp Duty Calculator', description: 'Calculate stamp duty/transfer taxes on your purchase.', category: 'Buying Tools' },
  { slug: 'mortgage-stress-test', name: 'Mortgage Stress Test', description: 'Test if you can afford your mortgage if rates rise.', category: 'Rate Tools' },
  { slug: 'income-requirement-calculator', name: 'Income Requirement Calculator', description: 'Calculate the income needed to qualify for a specific loan amount.', category: 'Basic Calculators' },
  { slug: 'mortgage-recast-calculator', name: 'Mortgage Recast Calculator', description: 'Calculate new payments after a mortgage recast.', category: 'Payment Tools' },
  { slug: 'home-insurance-estimator', name: 'Home Insurance Estimator', description: 'Estimate annual homeowners insurance costs.', category: 'Buying Tools' },
  { slug: 'land-transfer-tax', name: 'Land Transfer Tax Calculator', description: 'Calculate land transfer taxes for your state.', category: 'Buying Tools' },
  { slug: 'investment-property-mortgage', name: 'Investment Property Mortgage Calculator', description: 'Calculate mortgage payments for investment properties.', category: 'Investment Tools' },
  { slug: 'construction-loan-calculator', name: 'Construction Loan Calculator', description: 'Calculate payments during and after the construction phase.', category: 'Loan Types' },
  { slug: 'bridge-loan-calculator', name: 'Bridge Loan Calculator', description: 'Calculate costs for a bridge loan between homes.', category: 'Loan Types' },
  { slug: 'home-equity-loan-calculator', name: 'Home Equity Loan Calculator', description: 'Calculate payments for a fixed-rate home equity loan.', category: 'Equity Tools' },
];

const categories = ['Basic Calculators', 'Buying Tools', 'Loan Comparison', 'Loan Types', 'Payment Tools', 'Rate Tools', 'Equity Tools', 'Investment Tools', 'Selling Tools'];

export const allTools = calculators;

export const toolCategories: ToolCategory[] = categories
  .map(name => ({
    name,
    tools: calculators.filter(t => t.category === name),
  }))
  .filter(c => c.tools.length > 0);

export function getToolBySlug(slug: string): ToolInfo | undefined {
  return calculators.find(t => t.slug === slug);
}
