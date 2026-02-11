import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { toolCategories, allTools } from '../toolData';

export default function ToolsIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title="All Mortgage Tools & Calculators" description="Browse 50+ free mortgage calculators and financial tools." path="/tools" />
      <Breadcrumbs items={[{ label: 'Tools' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Mortgage Tools</h1>
      <p className="text-gray-500 mb-8">{allTools.length} free calculators and tools for every mortgage need.</p>
      {toolCategories.map(cat => (
        <div key={cat.name} className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{cat.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.tools.map(t => (
              <Link key={t.slug} to={`/tools/${t.slug}`} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow transition">
                <h3 className="font-medium text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
