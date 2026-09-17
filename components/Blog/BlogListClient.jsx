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

function formatPost(post) {
  return {
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
      id: cat.id, name: cat.name, slug: cat.slug,
    })) || [],
  };
}

const BlogCard = ({ post }) => (
  <div className="card h-100 shadow-sm border-0">
    {post.featuredImage && (
      <Link href={`/blog/${post.slug}`}>
        <img
          src={post.featuredImage}
          className="card-img-top"
          alt={post.title}
          loading="lazy"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Link>
    )}
    <div className="card-body d-flex flex-column">
      {post.categories.length > 0 && (
        <div className="mb-2">
          {post.categories.map((cat) => (
            <span key={cat.id} className="badge bg-primary bg-opacity-10 text-primary me-1">
              {cat.name}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-6 fw-600 mb-2">
        <Link href={`/blog/${post.slug}`} className="text-decoration-none text-body">
          {post.title}
        </Link>
      </h3>

      <p className="text-body-secondary flex-grow-1">
        {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
      </p>

      <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
        <small className="text-body-tertiary">{post.date}</small>
        <small className="text-body-tertiary">{post.readingTime} min read</small>
      </div>
    </div>
  </div>
);

const BlogListClient = ({ initialPosts = [], initialTotalPages = 1, categories = [] }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch posts on page/filter/search change (skip initial load)
  useEffect(() => {
    if (page === 1 && !activeCategory && !searchQuery) {
      setPosts(initialPosts);
      setTotalPages(initialTotalPages);
      return;
    }

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `${WP_API}/posts?_embed&page=${page}&per_page=6&orderby=date&order=desc`;
        if (searchQuery) url += `&search=${encodeURIComponent(searchQuery)}`;
        if (activeCategory) url += `&categories=${activeCategory}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setPosts(data.map(formatPost));
        setTotalPages(parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, activeCategory, searchQuery, initialPosts, initialTotalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <section className="section py-10" style={{ minHeight: '80vh' }}>
      <div className="container">
        <div className="mx-auto text-center mb-5">
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-primary text-4 fw-500 mb-1">Insights & Tutorials</p>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <h1 className="heading-font-family text-uppercase text-10 fw-600 mb-4">Blog</h1>
          </Fade>
          <Slide direction="up" delay={400} triggerOnce>
            <hr className="vr heading-separator-line" />
          </Slide>
        </div>

        <Fade direction="up" delay={500} triggerOnce>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control text-5"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                      setActiveCategory(null);
                    }}
                  />
                </div>
              </div>

              {categories.length > 0 && (
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <button
                    className={`btn btn-sm ${!activeCategory ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => { setActiveCategory(null); setSearchQuery(''); setPage(1); }}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); setPage(1); }}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Fade>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-5">
            <p className="text-body-secondary text-5">Unable to load posts. Please try again later.</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-body-secondary text-5">No posts found.</p>
          </div>
        ) : (
          <div className="row">
            {posts.map((post, i) => (
              <Fade direction="up" delay={200 + i * 100} triggerOnce key={post.id} className="col-lg-4 col-md-6 mb-4">
                <BlogCard post={post} />
              </Fade>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="d-flex justify-content-center mt-5">
            <ul className="pagination">
              <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage((p) => p - 1)}>Previous</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i + 1} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage((p) => p + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        )}

        <div className="text-center mt-4">
          <Link href="/" className="btn btn-outline-primary">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogListClient;