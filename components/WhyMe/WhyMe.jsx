'use client';

import { Fade, Slide } from 'react-awesome-reveal';

const reasons = [
  {
    image: '/images/cms_architecture.svg',
    title: 'Deep CMS Architecture',
    description:
      'I don\'t just use WordPress and Joomla - I build at the plugin architecture level. Custom components, scalable extensions, marketplace-ready products. Very few developers work at this depth across both ecosystems.',
  },
  {
    image: '/images/full_stack_architecture.svg',
    title: 'Full-Stack Product Engineering',
    description:
      'From Laravel-powered SaaS platforms to React frontends with real-time WebSocket systems - I\'ve built complete products from the ground up. Merchantbay, Taxi Booking SaaS, and enterprise applications — all architected, developed, and deployed by me.',
  },
  {
    image: '/images/published_and_verified.svg',
    title: 'Published & Verified Products',
    description:
      'My work isn\'t hidden behind NDAs alone. I have plugins published on WordPress.org and Joomla Extensions Directory, and SaaS platforms actively serving customers worldwide. You can verify my work before we even talk.',
  },
  {
    image: '/images/one_dev_with_ownership.svg',
    title: 'One Developer, Full Ownership',
    description:
      'System architecture, database design, backend APIs, frontend UI, cloud deployment, server management — I own the entire development lifecycle. You get one point of contact instead of coordinating between multiple specialists.',
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="section">
      <div className="container">
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Why Choose Me</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">
              Why Work With Me
            </h2>
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <p className="text-5 text-body-secondary mb-4" style={{ maxWidth: '650px', margin: '0 auto' }}>
              16+ years of building web products taught me that great software isn't just about
              writing code - it's about understanding the problem, designing the right architecture,
              and delivering something that actually works at scale.
            </p>
          </Fade>
          <Slide direction="up" delay={500} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row g-4">
          {reasons.map((reason, i) => (
            <div className="col-lg-6" key={i}>
              <Fade direction="up" delay={300 + i * 150} className="h-100" triggerOnce>
                <div className="card h-100 shadow-sm border-0 p-4 bg-light">
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-3 text-center text-md-start">
                      <img src={reason.image} className="card-img-top" alt={reason.title} style={{ width: '50px' }} />
                      <div>
                        <h3 className="text-7 fw-600 mb-3">{reason.title}</h3>
                        <p className="text-5 text-body-secondary lh-base mb-0">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;