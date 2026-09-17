'use client';

import { Fade, Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 100, suffix: '+', label: 'Projects\nDelivered' },
  { value: 50, suffix: '+', label: 'Clients\nWorldwide' },
  { value: 15, suffix: '+', label: 'Years of\nExperience' },
  { value: 95, suffix: '%', label: 'Client\nRetention Rate' },
];

const StatItem = ({ stat, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="col-12 col-sm-6 col-lg-3" ref={ref}>
      <Fade direction="up" delay={delay} triggerOnce>
        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
          <h4 className="text-15 text-primary mb-0 me-2 me-sm-3">
            {inView ? (
              <CountUp end={stat.value} duration={1.8} />
            ) : (
              '0'
            )}
            {stat.suffix}
          </h4>
          <p className="text-body-secondary text-5 lh-sm mb-0" style={{ whiteSpace: 'pre-line' }}>
            {stat.label}
          </p>
        </div>
      </Fade>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Know Me More</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">About Me</h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row text-center text-lg-start">
          <div className="col-lg-6">
            <Fade direction="up" delay={500} triggerOnce>
              <h2 className="text-body-tertiary fw-600 lh-base mb-4">Engineering Reliable Systems for 16+ Years</h2>
              <h3 className="text-9 fw-600 lh-base mb-4">
                Hi, I'm <span className="text-primary">Shariar Shishir</span> - A Full-Stack software engineer{' '}
                <span className="text-body-tertiary">specializing in CMS architecture, plugin ecosystems, and scalable SaaS platforms.</span>
              </h3>
            </Fade>
            <Fade direction="up" delay={600} triggerOnce>
              <p className="text-6 text-body-secondary">"I don't just write code. I architect solutions."</p>
            </Fade>
          </div>
          <div className="col-lg-6">
            <Fade direction="up" delay={500} triggerOnce>
              <p className="text-7">
                For 16+ years, I've turned complex ideas into stable, high-performing digital products, from marketplace WordPress and Joomla extensions to custom Laravel SaaS platforms on AWS.
                I build scalable systems with clean architecture, performance-first engineering, and strong business alignment, delivered on time and on budget.
              </p>
            </Fade>
          </div>
        </div>

        <div className="row gx-4 gx-sm-5 gy-4 my-0 my-sm-4">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} delay={300 + index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;