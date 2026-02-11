import { Link } from 'react-router-dom';

interface BreadcrumbItem { label: string; path?: string; }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1">
        <li><Link to="/" className="hover:text-blue-700">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.path ? <Link to={item.path} className="hover:text-blue-700">{item.label}</Link> : <span className="text-gray-700">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
