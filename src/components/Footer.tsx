import { Link } from 'react-router-dom';
import { toolCategories } from '../toolData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">CorniceMortgage</h3>
            <p className="text-sm text-gray-400">Professional mortgage calculators and financial tools to help you make smarter home financing decisions.</p>
          </div>
          {toolCategories.slice(0, 3).map(cat => (
            <div key={cat.name}>
              <h3 className="text-white font-semibold mb-3">{cat.name}</h3>
              <ul className="space-y-1">
                {cat.tools.slice(0, 6).map(t => (
                  <li key={t.slug}><Link to={`/tools/${t.slug}`} className="text-sm hover:text-white">{t.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 CorniceMortgage. All rights reserved. For informational purposes only. Not financial advice.</p>
          <div className="flex gap-4 text-sm">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <Link to="/tools" className="hover:text-white">Tools</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
