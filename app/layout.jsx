import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stylesheet.css';
import '../styles/blog.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://shariarshishir.com'),
  title: {
    default: 'Shariar Shishir — Full Stack Developer & Web Designer | Dhaka, Bangladesh',
    template: '%s — Shariar Shishir',
  },
  description:
    'Full Stack Developer & Web Designer with 16+ years of experience specializing in WordPress, Joomla, Laravel, React. Based in Dhaka, Bangladesh.',
  keywords: [
    'Full Stack Developer', 'Web Designer', 'WordPress Developer',
    'Joomla Developer', 'Laravel Developer', 'React Developer',
    'PHP Developer', 'Dhaka Bangladesh', 'Freelance Developer',
  ],
  authors: [{ name: 'Shariar Shishir' }],
  openGraph: {
    type: 'website',
    siteName: 'Shariar Shishir',
    locale: 'en_US',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
  other: {
    'geo.region': 'BD-13',
    'geo.placename': 'Dhaka',
    'geo.position': '23.8103;90.4125',
    'ICBM': '23.8103, 90.4125',
  },
};

// Person + WebSite + ProfessionalService schemas (global)
const globalSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shariar Shishir',
    url: 'https://shariarshishir.com',
    image: 'https://shariarshishir.com/images/shariar_profile_picture.png',
    jobTitle: 'Full Stack Developer & Web Designer',
    description: 'Full Stack Developer & Web Designer with 16+ years of experience.',
    address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
    sameAs: [
      'https://www.linkedin.com/in/shariar-shisir/',
      'https://github.com/orionshariar/',
      'https://www.upwork.com/freelancers/~01d26d51d86cddd2e6',
    ],
    knowsAbout: ['WordPress', 'Joomla', 'Laravel', 'React', 'PHP', 'JavaScript', 'MySQL'],
    worksFor: { '@type': 'Organization', name: 'KANEV Web Development Limited' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shariar Shishir',
    url: 'https://shariarshishir.com',
    author: { '@type': 'Person', name: 'Shariar Shishir' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Shariar Shishir - Web Development Services',
    url: 'https://shariarshishir.com',
    image: 'https://shariarshishir.com/images/og-image.jpg',
    address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressRegion: 'Dhaka Division', addressCountry: 'BD' },
    priceRange: '$$',
    areaServed: { '@type': 'GeoCircle', name: 'Worldwide' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Plugin Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Joomla Extension Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laravel SaaS Application Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Frontend Development' } },
      ],
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon_shariar.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />        
        {globalSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body suppressHydrationWarning={true}>
        <div id="main-wrapper">
          <Header />
          <div id="content" role="main">
            {children}
          </div>
          <Footer />
        </div>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MM7WSM35SZ"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MM7WSM35SZ');
          `}
        </Script>
      </body>
    </html>
  );
}