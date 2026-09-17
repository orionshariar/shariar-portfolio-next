import Projects from '../../components/Projects/Projects';
import CTABanner from '../../components/CTABanner/CTABanner';

export const metadata = {
  title: 'Projects',
  description:
    'Portfolio of 100+ projects including Taxi Booking SaaS, Merchantbay platform, Gutenberg Blocks for WooCommerce, Joomla LMS, and enterprise web applications.',
  openGraph: {
    title: 'Projects — Shariar Shishir',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shariarshishir.com/' },
      { '@type': 'ListItem', position: 2, name: 'Projects' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Selected Projects by Shariar Shishir',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Taxi Booking System', url: 'https://extensions.joomla.org/extension/taxi-booking/' },
      { '@type': 'ListItem', position: 2, name: 'Merchantbay Platform', url: 'https://www.merchantbay.com/' },
      { '@type': 'ListItem', position: 3, name: 'Gutenberg Blocks for WooCommerce', url: 'https://wordpress.org/plugins/shopcred/' },
      { '@type': 'ListItem', position: 4, name: 'Cab Fare Calculator', url: 'https://wordpress.org/plugins/cab-fare-calculator/' },
      { '@type': 'ListItem', position: 5, name: 'Joomla LMS', url: 'https://kanev.com/products/joomla-lms' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Projects />
      <CTABanner />
    </div>
  );
}