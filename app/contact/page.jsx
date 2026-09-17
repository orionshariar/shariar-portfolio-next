import Contact from '../../components/Contact/Contact';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Shariar Shishir for WordPress plugin development, Laravel SaaS applications, React frontends, and custom web solutions.',
  openGraph: {
    title: 'Contact — Shariar Shishir',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shariarshishir.com/' },
      { '@type': 'ListItem', position: 2, name: 'Contact' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: 'customer support',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Bengali'],
    url: 'https://shariarshishir.com/contact',
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Contact />
    </div>
  );
}