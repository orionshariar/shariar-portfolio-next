import About from '../../components/About/About';
import WhyMe from '../../components/WhyMe/WhyMe';
import CTABanner from '../../components/CTABanner/CTABanner';

export const metadata = {
  title: 'About',
  description:
    'Learn about Shariar Shishir — a Full Stack Developer with 16+ years of experience in WordPress, Joomla, Laravel, and React. 100+ projects delivered for 50+ clients worldwide.',
  openGraph: {
    title: 'About — Shariar Shishir',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shariarshishir.com/' },
    { '@type': 'ListItem', position: 2, name: 'About' },
  ],
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <About />
      <WhyMe />
      <CTABanner />
    </div>
  );
}