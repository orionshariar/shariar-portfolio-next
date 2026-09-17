import { getPostBySlug } from '../../../lib/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from '../../../components/Blog/BlogPostClient';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.excerpt.substring(0, 160),
      url: `/blog/${slug}`,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
      type: 'article',
      publishedTime: post.dateRaw,
      authors: [post.author],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.dateRaw,
    image: post.featuredImage,
    url: `https://shariarshishir.com/blog/${slug}`,
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} />
    </div>
  );
}