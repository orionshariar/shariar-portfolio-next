'use client';

import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const faqData = [
  {
    q: 'What services do you offer?',
    a: 'I specialize in WordPress plugin development, Joomla component/module development, custom web applications, API integration, and UI to functional development.',
  },
  {
    q: 'Do you create custom WordPress plugins or Joomla extensions?',
    a: 'Yes, I build fully custom plugins and components from scratch based on your requirements. I can also extend existing plugins or fix complex issues.',
  },
  {
    q: 'How much do you charge for a project?',
    a: 'Pricing depends on project complexity, features, and timeline. Once I understand your requirements, I can provide a clear estimate.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'It depends on the size and complexity of the project. Small tasks may take a few hours, while larger applications may take a few weeks.',
  },
  {
    q: 'Do you work with existing websites?',
    a: 'Yes. I can work on existing WordPress, Joomla, or custom PHP websites - including fixing bugs, improving performance, and adding new features.',
  },
  {
    q: 'Can you maintain and manage websites after completion?',
    a: 'Yes, I provide long term maintenance, updates, security enhancements, and performance optimization services.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, I regularly work with clients around the world through online collaboration tools.',
  },
  {
    q: 'Can you help with website speed optimization?',
    a: 'Absolutely. I can optimize your website for performance, caching, CDN setup, and Core Web Vitals improvements.',
  },
  {
    q: 'Do you provide UI/UX design as well?',
    a: "I can convert Figma/Sketch designs into fully functional websites. If needed, I can also help with UI suggestions.",
  },
  {
    q: 'Do you offer eCommerce development?',
    a: 'Yes. I work with WooCommerce and custom eCommerce systems including product filters, carts, shipping logic, and custom checkout pages.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'PHP, WordPress, Joomla, Laravel, CodeIgniter, MySQL, MongoDB, ReactJS, NodeJS, jQuery, JavaScript, HTML, CSS, Bootstrap and more.',
  },
  {
    q: 'How can I contact you or request a quote?',
    a: 'You can reach me through the contact form or email. I usually reply within a few hours.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Have any Questions?</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">
              Frequently Asked Questions
            </h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="accordion accordion-flush" id="faqTopics">
              {faqData.map((faq, index) => (
                <Fade direction="up" delay={500 + index * 50} triggerOnce key={index}>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${openIndex !== index ? ' collapsed' : ''}`}
                        type="button"
                        onClick={() => toggle(index)}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse${openIndex === index ? ' show' : ''}`}
                    >
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;