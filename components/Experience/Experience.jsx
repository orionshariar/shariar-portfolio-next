'use client';
import { Fade, Slide } from 'react-awesome-reveal';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'KANEV Web Development Limited (Remote)',
    period: '2025 - Present',
    tasks: [
      'Designing and maintaining scalable CMS-based products and SaaS systems used by global customers.'
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Devscred',
    period: '2023 - 2025',
    tasks: [
      'Led development teams across multiple projects',
      'Planned system architecture and development roadmaps',
      'Delivered WordPress-based product solutions',
      'Mentored junior engineers and enforced coding standards',
    ],
  },
  {
    title: 'Senior Software Engineer & System Administrator',
    company: 'Merchant Bay Ltd.',
    period: '2020 - 2024',
    tasks: [
      'Architected and built a service-based SaaS platform from scratch',
      'Led backend development using Laravel',
      'Managed AWS Linux servers and cloud infrastructure',
      'Designed scalable workflows and admin systems',
      'Oversaw deployment, DevOps, and system performance'
    ],
  },
  {
    title: 'Software Developer',
    company: 'KANEV Web Development Limited (Remote)',
    period: '2017 - 2020',
    tasks: [
      'Developed Joomla and WordPress extensions',
      'Engineered UI systems aligned with modern web standards',
      'Built scalable frontend and backend modules',
      'Delivered production-ready features for international clients'
    ],
  },
  {
    title: 'Web Developer',
    company: 'Evatix',
    period: '2009 - 2016',
    tasks: [
      'Developed 100+ responsive websites',
      'Converted PSD designs into pixel-perfect frontends',
      'Built and customized WordPress and Joomla plugins',
      'Optimized cross-browser compatibility and performance',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">My Career</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Experience</h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            {experiences.map((exp, index) => (
              <Fade direction="up" delay={200 + index * 100} triggerOnce key={index}>
                <div>
                  <h3 className="text-6 fw-600">{exp.title}</h3>
                  <div className="text-5 fw-500 text-body-tertiary opacity-75 d-flex justify-content-between">
                    <p>{exp.company}</p>
                    <p>({exp.period})</p>
                  </div>
                  {exp.tasks.map((task, i) => (
                    <p className="text-5 mb-0" key={i}>- {task}</p>
                  ))}
                  <hr className="opacity-1 my-4" />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;