import { getPosts } from '../lib/blog';

export default async function sitemap() {
  // Static pages
  const staticPages = [
    { url: 'https://shariarshishir.com/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://shariarshishir.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://shariarshishir.com/experience', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://shariarshishir.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://shariarshishir.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://shariarshishir.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://shariarshishir.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Dynamic blog posts
  let blogPages = [];
  try {
    const { posts } = await getPosts(1, 50);
    blogPages = posts.map((post) => ({
      url: `https://shariarshishir.com/blog/${post.slug}`,
      lastModified: new Date(post.dateRaw),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch {
    // Silently fail — static pages still included
  }

  return [...staticPages, ...blogPages];
}