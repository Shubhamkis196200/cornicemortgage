import { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from '../blogData';

const blogComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'first-time-homebuyer-guide': lazy(() => import('../blog/FirstTimHomebuyerGuide')),
  'refinancing-guide': lazy(() => import('../blog/RefinancingGuide')),
  'understanding-mortgage-rates': lazy(() => import('../blog/UnderstandingMortgageRates')),
  'fha-vs-conventional': lazy(() => import('../blog/FhaVsConventional')),
  'improve-credit-for-mortgage': lazy(() => import('../blog/ImproveCreditForMortgage')),
  'closing-process-explained': lazy(() => import('../blog/ClosingProcessExplained')),
  'mortgage-tax-deductions': lazy(() => import('../blog/MortgageTaxDeductions')),
  'arm-vs-fixed-rate': lazy(() => import('../blog/ArmVsFixedRate')),
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts.find(p => p.slug === slug) : undefined;
  const Component = slug ? blogComponents[slug] : undefined;

  if (!post || !Component) {
    return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold">Post not found</h1><Link to="/blog" className="text-blue-700 mt-4 inline-block">← Back to blog</Link></div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title={post.title} description={post.description} path={`/blog/${slug}`} type="article" jsonLd={{
        '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description,
        datePublished: post.date, author: { '@type': 'Organization', name: 'CorniceMortgage' },
        publisher: { '@type': 'Organization', name: 'CorniceMortgage', logo: { '@type': 'ImageObject', url: 'https://cornicemortgage.netlify.app/logo.png' } }
      }} />
      <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: post.title }]} />
      <div className="mb-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading article...</div>}>
          <Component />
        </Suspense>
      </div>
      <div className="mt-8 text-center">
        <Link to="/blog" className="text-blue-700 font-medium hover:underline">← Back to all articles</Link>
      </div>
    </div>
  );
}
