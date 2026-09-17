import Services from '../../components/Services/Services';
import CTABanner from '../../components/CTABanner/CTABanner';

export const metadata = {
  title: 'Services',
  description:
    'Web development services including WordPress plugin development, Joomla extensions, Laravel SaaS platforms, React frontends, eCommerce solutions, and maintenance.',
  openGraph: {
    title: 'Services — Shariar Shishir',
    url: '/services',
  },
  alternates: {
    canonical: '/services',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shariarshishir.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services' },
  ],
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Services />
      <CTABanner />
    </div>
  );
}