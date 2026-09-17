'use client';
import { Fade, Slide } from 'react-awesome-reveal';

const skillCategories = [
  {
    image: '/images/ui_ux.png',
    title: 'Design & UX Engineering',
    description: 'Building structured, scalable interface systems that balance aesthetics with usability.',
    skills: [
      'User-centered design principles',
      'Wireframing & prototyping (Figma, Adobe XD)',
      'Design systems & component-based UI',
      'Responsive architecture',
      'Typography & layout systems',
      'Interaction & motion fundamentals',
    ],
  },
  {
    image: '/images/frontend_dev.png',
    title: 'Frontend Engineering',
    description: 'Performance-focused, API-driven interfaces built for modern applications.',
    skills: [
      'HTML5, CSS3',
      'Tailwind CSS, Bootstrap',
      'JavaScript (ES6+), jQuery',
      'React JS',
      'Node JS',
      'REST API Integration',
      'AJAX, JSON, XML',
    ],
  },
  {
    image: '/images/backend_dev.png',
    title: 'Backend & CMS Architecture',
    description: 'Designing scalable extensions and business logic systems.',
    skills: [
      'PHP',
      'WordPress Plugin & Theme Development',
      'WooCommerce Customization',
      'Joomla Components, Modules and Plugins Development',
      'Laravel (SaaS & Service plantforms)',
      'Symfony, CodeIgniter',
      'Custom MVC Architecture',
    ],
  },
  {
    image: '/images/dev_ops.png',
    title: 'Database, DevOps & Infrastructure',
    description: 'Optimizing performance and maintaining production-grade systems.',
    skills: [
      'MySQL, MongoDB',
      'Database & Query Optimization',
      'AWS Linux server management',
      'Cloudways, cPanel',
      'Git, GitHub Actions',
      'Composer, NPM, Yarn',
      'Postman, phpMyAdmin',
      'WP-CLI',
      'CI/CD Workflows',
    ],
  },
];

const SkillCard = ({ cat, delay }) => (
  <div className="col-lg-6">
    <Fade direction="up" delay={delay} className='h-100' triggerOnce>
      <div className="card h-100 shadow-sm">
        <img src={cat.image} className="card-img-top" alt={cat.title} />
        <div className="card-body bg-light">
          <h3 className="text-8 fw-600 text-center m-4">{cat.title}</h3>
          <p className="card-text text-muted">{cat.description}</p>
          <ul className="list-unstyled small">
            {cat.skills.map((skill, j) => (
              <li key={j}>- {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Expertise</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Skills</h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row g-5 mb-4">
          {skillCategories.slice(0, 2).map((cat, i) => (
            <SkillCard key={i} cat={cat} delay={200 + i * 100} />
          ))}
        </div>
        <div className="row g-5">
          {skillCategories.slice(2, 4).map((cat, i) => (
            <SkillCard key={i} cat={cat} delay={400 + i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;