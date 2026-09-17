'use client';

import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/shariar-shisir/', label: 'LinkedIn' },
  { href: 'https://github.com/orionshariar/', label: 'GitHub' },
  { href: 'https://www.upwork.com/freelancers/~01d26d51d86cddd2e6?mp_source=share', label: 'Upwork' },
];

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="section mt-4">
        <div className="container">
          <Fade direction="up" delay={200} triggerOnce>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <hr className="opacity-1" />
                <div className="social-links text-5 fw-500 d-flex justify-content-center mb-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <hr className="opacity-1 mb-5" />
              </div>
            </div>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <p className="text-secondary lh-sm text-center text-5">
              Copyright &copy; 2025 - 2026{' '}
              <a className="fw-500 link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href="#">
                Shariar Shishir
              </a>
              . All Rights Reserved.
            </p>
          </Fade>
        </div>
      </footer>

      {showBackToTop && (
        <a
          id="back-to-top"
          className="d-inline"
          title="Back to Top"
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
        />
      )}
    </>
  );
};

export default Footer;