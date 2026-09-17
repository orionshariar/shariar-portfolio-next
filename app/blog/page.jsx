import { getPosts, getCategories } from '../../lib/blog';
import BlogListClient from '../../components/Blog/BlogListClient';

export const metadata = {
  title: 'Blog',
  description:
    'Articles and tutorials on WordPress plugin development, Laravel SaaS, React, Joomla extensions, and software engineering best practices.',
  openGraph: {
    title: 'Blog — Shariar Shishir',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const [{ posts, totalPages }, categories] = await Promise.all([
    getPosts(1, 6),
    getCategories(),
  ]);

  return (
    <div style={{ paddingTop: '80px' }}>
      <BlogListClient
        initialPosts={posts}
        initialTotalPages={totalPages}
        categories={categories}
      />
    </div>
  );
}