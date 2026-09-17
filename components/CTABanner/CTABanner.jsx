'use client';

import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section id="cta-block" className="section py-5">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <div
            className="text-center rounded-4 py-5 px-4"
            style={{
              background: 'linear-gradient(135deg, var(--bs-primary) 0%, #1a1a2e 100%)',
            }}
          >
            <h2 className="text-white text-10 fw-600 mb-3">
              Ready to build something?
            </h2>
            <p className="text-white-50 text-5 mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
              Whether it's a custom plugin, a full-scale SaaS platform, or a complex web application
              - let's discuss how I can help.
            </p>
            <Link href="/contact" className="btn btn-light btn-lg fw-600">
              Let's Talk →
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CTABanner;