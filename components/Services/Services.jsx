'use client';
import { Fade, Slide } from 'react-awesome-reveal';

const services = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Strategic, responsive designs built for clarity, usability, and business growth.',
  },
  {
    num: '02',
    title: 'Web Application Development',
    desc: 'Custom-built systems using Laravel, React, and modern development standards.',
  },
  {
    num: '03',
    title: 'CMS & Plugin Development',
    desc: 'Scalable WordPress plugins and Joomla extensions tailored to business workflows.',
  },
  {
    num: '04',
    title: 'SaaS Architecture & Product Development',
    desc: 'From database design to deployment - complete SaaS platforms built for scale.',
  },
  {
    num: '05',
    title: 'eCommerce Engineering',
    desc: 'Advanced WooCommerce solutions including custom logic, checkout systems, and integrations.',
  },
  {
    num: '06',
    title: 'Maintenance & Optimization',
    desc: 'Performance tuning, security hardening, Core Web Vitals improvement, and long-term support.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">What I Do?</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Services</h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="brands-grid separator-border">
          <div className="row">
            {services.map((svc, i) => (
              <div className="col-sm-6 col-lg-4 text-center p-4" key={svc.num}>
                <Fade direction="up" delay={200 + i * 100} triggerOnce>
                  <div className="text-13 text-body-secondary opacity-2 fw-500 mb-1 mt-2">{svc.num}</div>
                  <h3 className="text-8 fw-600 mb-3">{svc.title}</h3>
                  <p className="text-body-secondary text-5 lh-base">{svc.desc}</p>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;