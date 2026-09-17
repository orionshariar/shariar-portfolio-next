'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const testimonials = [
  {
    image: '/images/mir_adnan.jpeg',
    name: 'Meer Adnan Ali',
    title: 'Vice President Operations at Evatix',
    quote:
      '"Shariar is an extremely creative, hard working and innovative developer, who\'s also best in guiding his junior employees. As a Front End Web Developer, he solved all problems with intelligence, calm and confidence. He used to wear a smiling face, no matter the condition, and that kept his colleagues warm while they worked together in their team."',
  },
  {
    image: '/images/akmh_banna.jpeg',
    name: 'Hasanul Banna',
    title:
      'Driving Scalable Salesforce & Mobile Solutions | Performance Optimization | Engineering Leadership | CI/CD & Cloud Integration',
    quote:
      '"I highly recommend Shariar as a skilled software developer. He consistently impressed me with his ability to quickly grasp new concepts and technologies. Shariar\'s passion for software development is evident in his enthusiastic approach to problem-solving and his dedication to creating high-quality work. He\'s a hard worker who is always willing to go the extra mile to meet deadlines and exceed expectations. On top of that, Shariar brings a positive and upbeat attitude to the team environment. His smile is contagious, and he has a knack for making even the most challenging tasks enjoyable. If you\'re looking for a talented, hardworking, and positive software developer, Shariar is a perfect fit!"',
  },
  {
    image: '/images/marian.jpeg',
    name: 'Marian Kanev',
    title:
      'Chief Marketing Officer at Interplast Group LTD & Public speaker at tech events',
    quote:
      '"Shariar is a very talented web designer/developer. I have worked with him for over 10 years and can recommend him for his hard work, commitment to a project, and good work ethic. If you need more information about Shariar, don\'t hesitate to contact me personally as a reference."',
  },
  {
    image: '/images/m_aumio.jpeg',
    name: 'Muntasir M. Aumio',
    title: 'Full Stack Web Developer',
    quote:
      '"He\'s, in fact, the most dedicated and focused person with his work I have met in my life in person. It\'s a privilege to be able to work with him. Best of luck for your future endeavors."',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const itemRefs = useRef([]);

  // Measure all items and set container to tallest height
  useEffect(() => {
    const measure = () => {
      let tallest = 0;
      itemRefs.current.forEach((el) => {
        if (el) {
          // Temporarily make visible to measure
          const prev = el.style.cssText;
          el.style.position = 'absolute';
          el.style.visibility = 'hidden';
          el.style.opacity = '1';
          el.style.display = 'block';
          tallest = Math.max(tallest, el.offsetHeight);
          el.style.cssText = prev;
        }
      });
      if (tallest > 0) setMaxHeight(tallest);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const changeTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="client" className="section bg-purple">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1 text-white">I Worked With</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4 text-white">
              Peoples Speak
            </h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line text-white" />
          </Slide>
        </div>

        {/* Testimonial Slider */}
        <Fade direction="up" delay={500} triggerOnce>
          <div className="row mb-4 text-white">
            <div className="col-lg-10 col-xl-9 mx-auto">
              {/* Fixed height container */}
              <div
                style={{
                  position: 'relative',
                  minHeight: maxHeight > 0 ? `${maxHeight}px` : 'auto',
                  transition: 'min-height 0.3s ease',
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    ref={(el) => (itemRefs.current[i] = el)}
                    className="text-center px-5"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      opacity: i === current ? 1 : 0,
                      visibility: i === current ? 'visible' : 'hidden',
                      transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s',
                    }}
                  >
                    <img
                      className="img-fluid d-inline-block rounded-circle shadow-md"
                      src={t.image}
                      alt={t.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="text-6 fw-500 mt-3">{t.name}</div>
                    <div className="text-5 mb-4 text-white-50">{t.title}</div>
                    <p className="text-6 mb-0">{t.quote}</p>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  className="btn btn-outline-light btn-sm rounded-circle"
                  onClick={prev}
                  aria-label="Previous"
                  style={{ width: '40px', height: '40px' }}
                >
                  ‹
                </button>
                <div className="d-flex align-items-center gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      onClick={() => changeTo(i)}
                      style={{
                        width: i === current ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>
                <button
                  className="btn btn-outline-light btn-sm rounded-circle"
                  onClick={next}
                  aria-label="Next"
                  style={{ width: '40px', height: '40px' }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;