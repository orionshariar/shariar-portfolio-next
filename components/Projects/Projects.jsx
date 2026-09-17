'use client';
import { Fade, Slide } from 'react-awesome-reveal';

const projects = [
  {
    title: 'Taxi Booking System (Joomla Extension & SaaS)',
    image: '/images/taxi_booking_img.png',
    type: 'Joomla Extension + SaaS Platform',
    role: 'Core Developer',
    period: 'KANEV Web Development Limited',
    tech: null,
    description: 'A complete taxi booking solution built for Joomla, later evolved into a scalable SaaS platform used by customers worldwide.',
    contributions: [
      'Designed and implemented the complete booking workflow',
      'Fare calculation and distance-based pricing logic',
      'Multi-language and multi-currency support',
      'Performance optimization for real-world usage',
      'Architecture suitable for SaaS scaling',
    ],
    links: [
      { label: 'Joomla Extension', url: 'https://extensions.joomla.org/extension/taxi-booking/' },
      { label: 'SaaS Platform', url: 'https://booking.drivenot.com/en/' },
    ],
  },
  {
    title: 'Joomla Learning Management System (LMS)',
    image: '/images/lms_img.png',
    type: 'Joomla Extension + SaaS Platform',
    role: 'Core Developer',
    period: 'KANEV Web Development Limited',
    tech: null,
    description: 'A feature-rich LMS solution for Joomla-based education platforms.',
    contributions: [
      'Course, lesson, and user role management',
      'Student enrollment and access control',
      'Quiz and assessment system',
      'Scalable architecture for growing platforms',
    ],
    links: [
      { label: 'Joomla Extension', url: 'https://kanev.com/products/joomla-lms' },
    ],
  },
  {
    title: 'Sports Management System',
    image: '/images/sports_management_img.png',
    type: 'Joomla Extension',
    role: 'Core Developer',
    period: 'KANEV Web Development Limited',
    tech: null,
    description: 'A comprehensive sports and tournament management system.',
    contributions: [
      'Team, player, and competition management',
      'Match scheduling and result tracking',
      'Flexible configuration for different sports',
      'Clean UI with strong backend logic',
    ],
    links: [
      { label: 'Joomla Extension', url: 'https://kanev.com/products/sports-management' },
    ],
  },
  {
    title: 'Property Booking Platform',
    image: '/images/property_booking_img.png',
    type: 'Joomla Extension + Booking Application',
    role: 'Core Developer',
    period: 'KANEV Web Development Limited',
    tech: null,
    description: 'A booking system designed for property and accommodation management.',
    contributions: [
      'Availability and booking logic',
      'Pricing and date-based rules',
      'User-friendly booking experience',
      'Secure and maintainable backend architecture',
    ],
    links: [
      { label: 'Joomla Extension', url: 'https://bbify.com/en/' },
    ],
  },
  {
    title: 'Merchantbay Platform (Laravel SaaS)',
    image: '/images/merchantbay_img.png',
    type: 'Service-Based SaaS Application',
    role: 'Lead Developer',
    period: 'Merchant Bay Ltd.',
    tech: 'Laravel, MySQL, AWS (Linux)',
    description: 'A full-scale service-based SaaS platform built completely from scratch.',
    contributions: [
      'Designed and developed the entire system architecture',
      'Backend development using Laravel',
      'Admin dashboard and service workflows',
      'Deployment, server management, and scaling on AWS Linux',
      'Acted as Team Lead and System Administrator',
    ],
    links: [
      { label: 'Website', url: 'https://www.merchantbay.com/' },
    ],
  },
  {
    title: 'Gutenberg Blocks for WooCommerce',
    image: '/images/gutenberg_block_img.png',
    type: 'WordPress Plugin',
    role: 'Core Developer',
    period: 'Devscred.',
    tech: null,
    description: 'A Gutenberg-based plugin providing custom blocks for WooCommerce stores.',
    contributions: [
      'Custom Gutenberg block development',
      'Seamless WooCommerce integration',
      'Performance-focused frontend rendering',
      'Modern WordPress standards compliance',
    ],
    links: [
      { label: 'WordPress Plugin', url: 'https://wordpress.org/plugins/shopcred/' },
    ],
  },
  {
    title: 'Taxi Booking - WordPress Plugin Version',
    image: '/images/taxi_booking_wordpress_img.png',
    type: 'WordPress Plugin',
    role: 'Core Developer',
    period: 'KANEV Web Development Limited',
    tech: null,
    description: 'A WordPress version of the taxi booking and fare calculation system, published on the official WordPress plugin repository.',
    contributions: [
      'WordPress-compliant plugin architecture',
      'Fare calculation logic',
      'Shortcodes and frontend UI integration',
      'Optimized for wide user adoption',
    ],
    links: [
      { label: 'WordPress Plugin', url: 'https://wordpress.org/plugins/cab-fare-calculator/' },
    ],
  },
  {
    title: 'Enterprise Websites & NDA Projects',
    image: '/images/nda_img.png',
    type: 'Enterprise & Client Projects',
    role: 'Frontend / Full-Stack Developer',
    period: null,
    tech: null,
    description: 'Over 100+ websites and applications developed across multiple industries.',
    contributions: [
      'Pixel-perfect frontend systems',
      'CMS customization',
      'Custom plugin development',
      'Performance optimization',
      'Full-stack application engineering',
    ],
    links: [],
    note: 'Some projects remain confidential due to NDA agreements.',
  },
];

const ProjectCard = ({ project }) => (
  <div className="card shadow-sm border-0 mb-4 overflow-hidden">
    <div className="row g-0">
      {/* Image — mobile: first (order-1), desktop: right (order-md-2) */}
      <div className="col-md-5 order-1 order-md-2 d-flex align-items-center justify-content-center p-4">
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded"
          style={{ maxHeight: '280px', objectFit: 'contain' }}
        />
      </div>

      {/* Content — mobile: second (order-2), desktop: left (order-md-1) */}
      <div className="col-md-7 order-2 order-md-1 bg-light">
        <div className="card-body p-4">
          <h3 className="text-7 fw-600 mb-3">{project.title}</h3>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-primary bg-opacity-10 text-primary">{project.type}</span>
            <span className="badge bg-secondary bg-opacity-10 text-secondary">{project.role}</span>
            {project.tech && (
              <span className="badge bg-dark bg-opacity-10 text-white">{project.tech}</span>
            )}
          </div>

          {project.period && (
            <p className="text-body-tertiary mb-2" style={{ fontSize: '0.9rem' }}>
              {project.period}
            </p>
          )}

          <p className="text-5 text-body-secondary mb-3">{project.description}</p>

          <ul className="list-unstyled mb-3">
            {project.contributions.map((c, i) => (
              <li key={i} className="d-flex align-items-start mb-1">
                <span className="text-primary me-2">✓</span>
                <span style={{ fontSize: '0.95rem' }}>{c}</span>
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="d-flex flex-wrap gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          {project.note && (
            <p className="text-body-tertiary mt-3 mb-0" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
              {project.note}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">My Work</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Projects</h2>
          </Fade>
          <Fade direction="up" delay={500} triggerOnce>
            <h3 className="text-9 fw-600 lh-base mb-4">
              Over the last <span className="text-primary">16+</span> years, I have worked on a wide
              range of products — from frontend-heavy CMS websites to large-scale{' '}
              <span className="text-body-tertiary">
                SaaS platforms, marketplace plugins, and full-stack applications.
              </span>{' '}
              Below are some of the{' '}
              <span className="text-body-tertiary">most impactful products and systems</span> I have
              built and contributed to.
            </h3>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        {projects.map((project, index) => (
          <Fade direction="up" delay={200 + index * 50} triggerOnce key={index}>
            <ProjectCard project={project} />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Projects;