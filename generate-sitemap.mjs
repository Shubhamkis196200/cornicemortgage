import { allTools } from './src/toolData';
import { blogPosts } from './src/blogData';
import fs from 'fs';

const SITE = 'https://cornicemortgage.netlify.app';

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/tools', priority: '0.9', changefreq: 'weekly' },
  { loc: '/blog', priority: '0.9', changefreq: 'daily' },
  { loc: '/about', priority: '0.5', changefreq: 'monthly' },
];

allTools.forEach(tool => {
  urls.push({ loc: `/tools/${tool.slug}`, priority: '0.8', changefreq: 'weekly' });
});

blogPosts.forEach(post => {
  urls.push({ loc: `/blog/${post.slug}`, priority: '0.7', changefreq: 'monthly' });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log(`Generated sitemap with ${urls.length} URLs`);
