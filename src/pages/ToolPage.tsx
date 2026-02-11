import { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getToolBySlug } from '../toolData';
import { toolComponents } from '../tools';

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;
  const Component = slug ? toolComponents[slug] : undefined;

  if (!tool || !Component) {
    return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold">Tool not found</h1><Link to="/tools" className="text-blue-700 mt-4 inline-block">← Back to tools</Link></div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title={tool.name} description={tool.description} path={`/tools/${slug}`} type="article" jsonLd={{
        '@context': 'https://schema.org', '@type': 'WebApplication', name: tool.name, description: tool.description,
        url: `https://cornicemortgage.netlify.app/tools/${slug}`, applicationCategory: 'FinanceApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      }} />
      <Breadcrumbs items={[{ label: 'Tools', path: '/tools' }, { label: tool.name }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
      <p className="text-gray-500 mb-8">{tool.description}</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading calculator...</div>}>
          <Component />
        </Suspense>
      </div>
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-2">About This Tool</h2>
        <p className="text-sm text-gray-600">{tool.description} This calculator is provided for informational purposes only and should not be considered financial advice. Always consult with a qualified mortgage professional before making financial decisions. Results are estimates and actual figures may vary based on your specific situation, lender requirements, and market conditions.</p>
      </div>
    </div>
  );
}
