'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeScrollItems = [
  { to: 'home', label: 'Home' },
];

const pageNavItems = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/shariar-shisir/', label: 'LinkedIn' },
  { href: 'https://github.com/orionshariar/', label: 'GitHub' },
  { href: 'https://www.upwork.com/freelancers/~01d26d51d86cddd2e6?mp_source=share', label: 'Upwork' },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 180);

      if (isHome) {
        const sections = homeScrollItems
          .map((item) => document.getElementById(item.to))
          .filter(Boolean);
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].getBoundingClientRect().top <= 100) {
            setActiveSection(homeScrollItems[i].to);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleScrollNavClick = (e, id) => {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/blog') return pathname.startsWith('/blog');
    return pathname === path;
  };

  return (
    <header id="header" className="sticky-top-slide">
      <nav className={`primary-menu navbar navbar-expand-none navbar-overlay bg-transparent border-bottom-0 text-7 fw-600 mt-4${isSticky ? ' sticky-on' : ''}`}>
        <div className="container">
          <Link className="logo d-flex" href="/">
            <img src="/images/logo_shariar.svg" alt="Shariar Shishir Logo" className="me-2" />
            <span>Shariar Shishir</span>
          </Link>

          <div id="header-nav" className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
            <div className="d-flex flex-column h-100 align-items-center justify-content-center">
              <ul className="navbar-nav">
                {homeScrollItems.map((item) => (
                  <li className="nav-item" key={item.to}>
                    <a
                      className={`nav-link smooth-scroll${isHome && activeSection === item.to ? ' active' : ''}`}
                      href={`/#${item.to}`}
                      onClick={(e) => handleScrollNavClick(e, item.to)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

                {pageNavItems.map((item) => (
                  <li className="nav-item" key={item.to}>
                    <Link
                      className={`nav-link${isActivePath(item.to) ? ' active' : ''}`}
                      href={item.to}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="social-links social-links-light text-5 fw-500 d-flex justify-content-center mt-3 mt-md-4">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="fw-normal text-4 ms-auto me-2 d-inline-flex align-items-center">
            <span className="position-relative d-inline-block bg-success rounded-circle p-1 me-2">
              <i className="spinner-grow spinner-grow-sm text-success text-opacity-50 position-absolute top-0 end-0 mt-n1 me-n1"></i>
            </span>
            Available for work
          </div>

          <button
            className={`navbar-toggler${menuOpen ? ' show' : ''}`}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;