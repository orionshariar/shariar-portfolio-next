'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal';

const WP_API = 'https://blog.shariarshishir.com/wp-json/wp/v2';

function decodeEntities(text) {
  if (typeof document === 'undefined') return text;
  const el = document.createElement('textarea');
  el.innerHTML = text;
  return el.value;
}

const LatestBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${WP_API}/posts?_embed&per_page=2&orderby=date&order=desc`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        setPosts(
          data.map((post) => ({
            id: post.id,
            title: decodeEntities(post.title.rendered),
            excerpt: decodeEntities(post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()),
            slug: post.slug,
            date: new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            }),
            featuredImage: post.featured_image_url || null,
            readingTime: post.reading_time || 1,
            categories: post._embedded?.['wp:term']?.[0]?.map((cat) => ({
              id: cat.id, name: cat.name,
            })) || [],
          }))
        );
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!loading && posts.length === 0) return null;

  return (
    <section id="latest-blog" className="section">
      <div className="container">
        <div className="mx-auto text-center mb-4">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Insights & Tutorials</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="heading-font-family text-uppercase text-10 fw-600 mb-4">
              Latest From Blog
            </h2>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row g-4 justify-content-center">
              {posts.map((post, i) => (
                <div className="col-lg-6" key={post.id}>
                  <Fade direction="up" delay={300 + i * 150} triggerOnce>
                    <div className="card h-100 shadow-sm border-0 bg-light">
                      {post.featuredImage && (
                        <Link href={`/blog/${post.slug}`}>
                          <img
                            src={post.featuredImage}
                            className="card-img-top"
                            alt={post.title}
                            loading="lazy"
                            style={{ height: '220px', objectFit: 'cover' }}
                          />
                        </Link>
                      )}
                      <div className="card-body d-flex flex-column p-4">
                        {post.categories.length > 0 && (
                          <div className="mb-2">
                            {post.categories.map((cat) => (
                              <span key={cat.id} className="badge bg-primary bg-opacity-10 text-primary me-1">
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        )}

                        <h3 className="text-7 fw-600 mb-2">
                          <Link href={`/blog/${post.slug}`} className="text-decoration-none text-body">
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-body-secondary flex-grow-1">
                          {post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + '...' : post.excerpt}
                        </p>

                        <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                          <small className="text-body-tertiary">{post.date}</small>
                          <small className="text-body-tertiary">{post.readingTime} min read</small>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              ))}
            </div>

            <Fade direction="up" delay={600} triggerOnce>
              <div className="text-center mt-5">
                <Link href="/blog" className="btn btn-outline-primary">
                  See More Articles →
                </Link>
              </div>
            </Fade>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestBlog;