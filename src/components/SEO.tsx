import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  jsonLd?: object;
}

const SITE = 'https://cornicemortgage.netlify.app';
const SITE_NAME = 'CorniceMortgage';

export default function SEO({ title, description, path, type = 'website', jsonLd }: SEOProps) {
  const url = `${SITE}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export { SITE, SITE_NAME };
