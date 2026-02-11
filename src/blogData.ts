export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  { slug: 'first-time-homebuyer-guide', title: 'The Complete First-Time Homebuyer Guide for 2026', description: 'Everything you need to know about buying your first home, from saving for a down payment to closing day.', date: '2026-01-15', readTime: '15 min read' },
  { slug: 'refinancing-guide', title: 'The Ultimate Guide to Refinancing Your Mortgage', description: 'Learn when refinancing makes sense, how to get the best rate, and what to expect during the process.', date: '2026-01-20', readTime: '14 min read' },
  { slug: 'understanding-mortgage-rates', title: 'Understanding Mortgage Rates: What Drives Them and How to Get the Best Deal', description: 'A deep dive into how mortgage rates work, what factors affect them, and strategies to secure a lower rate.', date: '2026-01-25', readTime: '13 min read' },
  { slug: 'fha-vs-conventional', title: 'FHA vs Conventional Loans: Which Is Right for You?', description: 'A comprehensive comparison of FHA and conventional mortgage loans to help you choose the best option.', date: '2026-02-01', readTime: '14 min read' },
  { slug: 'improve-credit-for-mortgage', title: 'How to Improve Your Credit Score Before Applying for a Mortgage', description: 'Proven strategies to boost your credit score and qualify for better mortgage rates.', date: '2026-02-03', readTime: '12 min read' },
  { slug: 'closing-process-explained', title: 'The Mortgage Closing Process Explained Step by Step', description: 'Demystifying the closing process from start to finish so you know exactly what to expect.', date: '2026-02-05', readTime: '13 min read' },
  { slug: 'mortgage-tax-deductions', title: 'Mortgage Tax Deductions: Everything Homeowners Need to Know', description: 'A comprehensive guide to all the tax deductions available to homeowners with mortgages.', date: '2026-02-07', readTime: '12 min read' },
  { slug: 'arm-vs-fixed-rate', title: 'ARM vs Fixed-Rate Mortgage: A Deep Dive Comparison', description: 'An in-depth analysis of adjustable-rate and fixed-rate mortgages to help you make the right choice.', date: '2026-02-10', readTime: '14 min read' },
];
