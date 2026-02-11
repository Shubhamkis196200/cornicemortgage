import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from '../blogData';

export default function BlogIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title="Mortgage Guides & Articles" description="Expert guides on mortgages, home buying, refinancing, and homeownership." path="/blog" />
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Mortgage Guides & Articles</h1>
      <p className="text-gray-500 mb-8">Expert advice to help you navigate every aspect of homeownership and mortgage financing.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition">
              <span className="text-5xl">📚</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
