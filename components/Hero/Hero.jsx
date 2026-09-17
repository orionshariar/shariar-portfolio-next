'use client';

import { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Hero = () => {
  const sceneRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMouseMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      const depth = 0.5;

      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${x * depth * 30}px, ${y * depth * 30}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = 'translate(0px, 0px)';
      }
    };

    scene.addEventListener('mousemove', handleMouseMove);
    scene.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scene.removeEventListener('mousemove', handleMouseMove);
      scene.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home">
      <div className="section d-flex min-vh-100">
        <div className="container my-auto">
          <div className="row section pt-sm-5">
            <div className="col-12">
              <Fade direction="up" triggerOnce>
                <h2 className="text-8 text-center mb-4">Hello, I'm</h2>
              </Fade>
              <div className="row g-3 gy-xl-0 gx-xl-5">

                {/* Left Text */}
                <div className="col align-content-center text-center text-lg-start order-1">
                  <Fade direction="up" delay={200} triggerOnce>
                    <h2 className="text-8 mb-3">
                      WordPress, Joomla & Laravel Product Engineer
                    </h2>
                    <p className="text-5 text-body-secondary lh-sm mb-0">
                      With 16+ years of experience, I design and engineer scalable CMS extensions, SaaS platforms, and custom web systems that power real businesses worldwide.
                    </p>
                  </Fade>
                </div>

                {/* Profile Image with Parallax */}
                <div
                  className="col-12 col-lg-4 col-xl-5 justify-content-center text-center order-2"
                  ref={sceneRef}
                >
                  <Fade triggerOnce>
                    <div
                      ref={imgRef}
                      style={{ transition: 'transform 0.15s ease-out' }}
                    >
                      <div className="d-inline-block rounded-circle p-2 border border-primary border-opacity-25">
                        <div className="d-flex rounded-circle p-2 border border-primary border-opacity-50">
                          <div className="d-flex rounded-circle p-2 border border-primary border-opacity-75">
                            <img
                              className="img-fluid d-flex rounded-circle border border-primary"
                              src="/images/shariar_image_sm_2.jpeg"
                              alt="Shariar Shishir"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>

                {/* Right Text */}
                <div className="col align-content-center text-center text-lg-start order-4 order-lg-3">
                  <Fade direction="up" delay={200} triggerOnce>
                    <h2 className="text-8 mb-3">
                      Based in<br /> Dhaka, Bangladesh.
                    </h2>
                    <p className="text-5 text-body-secondary lh-sm mb-0">
                      Working with clients worldwide - from startups to established businesses.
                    </p>
                  </Fade>
                </div>

                {/* Name */}
                <div className="col-12 text-center order-3 order-lg-4">
                  <Fade direction="up" delay={400} triggerOnce>
                    <h1 className="heading-font-family text-31 text-primary text-nowrap">
                      Shariar Shishir
                    </h1>
                  </Fade>
                  <Fade direction="up" delay={600} triggerOnce>
                    <Link href="/contact" className="btn btn-primary btn-lg mt-3">
                      Let's Discuss Your Project
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#about"
          className="scroll-down-arrow d-flex justify-content-center start-50 translate-middle-x"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 50;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }}
        >
          <span className="animated opacity-50">
            <i className="vr opacity-100"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;