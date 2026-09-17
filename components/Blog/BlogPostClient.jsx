'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const BlogPostClient = ({ post }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!post) {
    return (
      <div className="text-center py-5" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <h2 className="text-8 fw-600 mb-3">Post Not Found</h2>
        <p className="text-body-secondary text-5 mb-4">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="section py-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Fade direction="up" triggerOnce>
              <Link href="/blog" className="text-primary text-decoration-none text-5 d-inline-block mb-4">
                ← Back to Blog
              </Link>
            </Fade>

            {post.categories.length > 0 && (
              <Fade direction="up" delay={100} triggerOnce>
                <div className="mb-3">
                  {post.categories.map((cat) => (
                    <span key={cat.id} className="badge bg-primary bg-opacity-10 text-primary me-2">
                      {cat.name}
                    </span>
                  ))}
                </div>
              </Fade>
            )}

            <Fade direction="up" delay={200} triggerOnce>
              <h1 className="text-12 fw-600 lh-base mb-3">{post.title}</h1>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <div className="d-flex align-items-center gap-3 text-body-tertiary mb-4 pb-4 border-bottom">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Fade>

            {post.featuredImage && (
              <Fade direction="up" delay={400} triggerOnce>
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="img-fluid rounded mb-5 w-100"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </Fade>
            )}

            <Fade direction="up" delay={500} triggerOnce>
              <div
                className="blog-content text-5 lh-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Fade>

            <Fade direction="up" delay={600} triggerOnce>
              <hr className="my-5" />
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/blog" className="btn btn-outline-primary">
                  ← All Posts
                </Link>
                <div className="d-flex gap-2">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share on LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share on X
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostClient;