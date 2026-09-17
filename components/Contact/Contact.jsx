'use client';

import { useState, useRef, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const formLoadedAt = useRef(Math.floor(Date.now() / 1000));

  useEffect(() => {
    formLoadedAt.current = Math.floor(Date.now() / 1000);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const body = new FormData();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('form-message', formData.message);
      body.append('website', honeypot);
      body.append('form_loaded_at', formLoadedAt.current.toString());

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: body,
      });

      const data = await res.json();

      if (data.response === 'success') {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        formLoadedAt.current = Math.floor(Date.now() / 1000);
      } else {
        setStatus({ type: 'error', message: data.Message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Get in Touch</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Contact</h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <Fade direction="up" delay={500} triggerOnce>
              <h2>Let's Build Something Scalable</h2>
              <h3 className="text-9 lh-base mb-5">
                <span className="position-relative d-inline-block me-1 mb-n2">
                  <span className="bg-success position-absolute top-0 end-0 rounded-circle p-1 mt-1 me-1">
                    <i className="spinner-grow spinner-grow-sm text-success text-opacity-50 position-absolute top-0 end-0 mt-n1 me-n1"></i>
                  </span>
                  <img
                    className="img-fluid d-flex rounded-circle mb-n1"
                    src="/images/shariar_image_sm_2.jpeg"
                    height="50"
                    width="50"
                    alt="Shariar"
                  />
                </span>
                <span className="text-primary">I enjoy discussing new product ideas and technical challenges.</span>{' '}
                <span className="text-body-tertiary">
                  Share your vision, and I'll help you architect the solution.
                </span>
              </h3>
              <h4 className="mb-1">Living In:</h4>
              <p className="text-5">Dhaka, Bangladesh</p>
              <h4 className="mb-1">Call:</h4>
              <p className="text-5">(+880) 178 917 4660</p>
            </Fade>
          </div>

          <div className="col-lg-6">
            <Fade direction="up" delay={600} triggerOnce>
              <h3 className="text-10 fw-600 mb-5">Send me a note</h3>

              {status.message && (
                <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {status.message}
                </div>
              )}

              <div className="form-border">
                <div className="mb-4">
                  <label className="form-label text-5" htmlFor="name">Your Name:</label>
                  <input id="name" name="name" type="text" className="form-control text-5 py-0" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label className="form-label text-5" htmlFor="email">Your Email:</label>
                  <input id="email" name="email" type="email" className="form-control text-5 py-0" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label className="form-label text-5" htmlFor="message">Describe what you need:</label>
                  <textarea id="message" name="message" className="form-control text-5 py-0" rows="4" required value={formData.message} onChange={handleChange} />
                </div>

                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <button className="btn btn-primary" type="button" disabled={submitting} onClick={handleSubmit}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;