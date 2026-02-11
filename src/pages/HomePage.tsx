import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { toolCategories, allTools } from '../toolData';

const featuredSlugs = ['mortgage-calculator', 'home-affordability-calculator', 'refinance-calculator', 'amortization-schedule', 'dti-calculator', 'rent-vs-buy'];

export default function HomePage() {
  const featured = allTools.filter(t => featuredSlugs.includes(t.slug));
  return (
    <>
      <SEO title="Free Mortgage Calculators & Tools" description="Professional mortgage calculators, home buying tools, and financial guides. Make smarter home financing decisions with CorniceMortgage." path="/" jsonLd={{
        '@context': 'https://schema.org', '@type': 'WebSite', name: 'CorniceMortgage', url: 'https://cornicemortgage.netlify.app',
        description: 'Professional mortgage calculators and financial tools.',
        potentialAction: { '@type': 'SearchAction', target: 'https://cornicemortgage.netlify.app/tools', 'query-input': 'required name=search_term_string' }
      }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Smart Mortgage Decisions Start Here</h1>
            <p className="text-xl text-blue-100 mb-8">50+ free professional calculators and tools to help you navigate every step of your home financing journey.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tools/mortgage-calculator" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Calculate Your Payment</Link>
              <Link to="/tools" className="border border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Explore All Tools</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2"><span className="text-green-600 text-lg">✓</span> Free to Use</div>
          <div className="flex items-center gap-2"><span className="text-green-600 text-lg">✓</span> No Sign-Up Required</div>
          <div className="flex items-center gap-2"><span className="text-green-600 text-lg">✓</span> Instant Results</div>
          <div className="flex items-center gap-2"><span className="text-green-600 text-lg">✓</span> 50+ Professional Tools</div>
          <div className="flex items-center gap-2"><span className="text-green-600 text-lg">✓</span> Mobile Friendly</div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Tools</h2>
        <p className="text-gray-500 mb-8">Our most-used mortgage calculators and financial tools.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(tool => (
            <Link key={tool.slug} to={`/tools/${tool.slug}`} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition group">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <span className="text-blue-700 text-lg">📊</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/tools" className="text-blue-700 font-semibold hover:underline">View all {allTools.length} tools →</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolCategories.map(cat => (
              <div key={cat.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{cat.name}</h3>
                <ul className="space-y-1">
                  {cat.tools.map(t => (
                    <li key={t.slug}><Link to={`/tools/${t.slug}`} className="text-sm text-blue-700 hover:underline">{t.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{slug:'first-time-homebuyer-guide',title:'First-Time Homebuyer Guide'},{slug:'refinancing-guide',title:'Complete Refinancing Guide'},{slug:'understanding-mortgage-rates',title:'Understanding Mortgage Rates'},{slug:'fha-vs-conventional',title:'FHA vs Conventional Loans'}].map(post=>(
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition">{post.title}</h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-blue-700 font-semibold hover:underline">Read all guides →</Link>
        </div>
      </section>
    </>
  );
}
