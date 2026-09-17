import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import WhyMe from '../components/WhyMe/WhyMe';
import CTABanner from '../components/CTABanner/CTABanner';
import Testimonials from '../components/Testimonials/Testimonials';
import LatestBlog from '../components/Blog/LatestBlog';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

// Homepage FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Shariar Shishir specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress plugin development, Joomla extension development, Laravel SaaS platforms, React frontend development, and scalable CMS architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shariar Shishir build custom WordPress plugins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. He designs and develops fully custom WordPress plugins and Joomla components tailored to specific business needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Shariar Shishir use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PHP, WordPress, Joomla, Laravel, MySQL, MongoDB, React.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, AWS, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Shariar Shishir based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dhaka, Bangladesh — working with clients worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I hire Shariar Shishir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Through the contact form on shariarshishir.com, or via LinkedIn, GitHub, or Upwork.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <WhyMe />
      <CTABanner />
      <Testimonials />
      <LatestBlog />
      <FAQ />
      <Contact />
    </>
  );
}