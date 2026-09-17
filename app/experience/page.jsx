import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import CTABanner from '../../components/CTABanner/CTABanner';

export const metadata = {
  title: 'Experience & Skills',
  description:
    '16+ years of professional experience in WordPress, Joomla, Laravel, and React development. View career history, technical skills, and expertise.',
  openGraph: {
    title: 'Experience & Skills — Shariar Shishir',
    url: '/experience',
  },
  alternates: {
    canonical: '/experience',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shariarshishir.com/' },
    { '@type': 'ListItem', position: 2, name: 'Experience' },
  ],
};

export default function ExperiencePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Experience />
      <Skills />
      <CTABanner />
    </div>
  );
}