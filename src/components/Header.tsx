import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toolCategories } from '../toolData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cornice<span className="text-blue-700">Mortgage</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}>
              <button className="text-gray-700 hover:text-blue-700 font-medium">Tools ▾</button>
              {toolsOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 grid grid-cols-3 gap-4 w-[600px]">
                  {toolCategories.map(cat => (
                    <div key={cat.name}>
                      <h3 className="font-semibold text-blue-700 text-sm mb-2">{cat.name}</h3>
                      {cat.tools.slice(0, 5).map(t => (
                        <Link key={t.slug} to={`/tools/${t.slug}`} className="block text-sm text-gray-600 hover:text-blue-700 py-0.5">{t.name}</Link>
                      ))}
                      {cat.tools.length > 5 && <Link to="/tools" className="text-xs text-blue-600">+{cat.tools.length - 5} more</Link>}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/tools" className="text-gray-700 hover:text-blue-700 font-medium">All Tools</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-700 font-medium">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium">About</Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white p-4">
          <Link to="/tools" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>All Tools</Link>
          <Link to="/blog" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
