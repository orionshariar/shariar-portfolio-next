const WP_API = 'https://blog.shariarshishir.com/wp-json/wp/v2';

// Decode HTML entities
function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(num))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D')
    .replace(/&#8216;/g, '\u2018')
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8211;/g, '\u2013')
    .replace(/&#8212;/g, '\u2014');
}

function formatPost(post) {
  return {
    id: post.id,
    title: decodeEntities(post.title.rendered),
    excerpt: decodeEntities(post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()),
    content: post.content.rendered,
    slug: post.slug,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    dateRaw: post.date,
    featuredImage: post.featured_image_url || null,
    author: post.author_name || 'Shariar Shishir',
    readingTime: post.reading_time || 1,
    categories:
      post._embedded?.['wp:term']?.[0]?.map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      })) || [],
  };
}

export async function getPosts(page = 1, perPage = 6) {
  const res = await fetch(
    `${WP_API}/posts?_embed&page=${page}&per_page=${perPage}&orderby=date&order=desc`,
    { next: { revalidate: 300 } } // Cache for 5 minutes
  );

  if (!res.ok) return { posts: [], totalPages: 0, totalPosts: 0 };

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10);
  const totalPosts = parseInt(res.headers.get('X-WP-Total'), 10);

  return { posts: posts.map(formatPost), totalPages, totalPosts };
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${WP_API}/posts?_embed&slug=${slug}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) return null;

  const posts = await res.json();
  if (posts.length === 0) return null;

  return formatPost(posts[0]);
}

export async function getCategories() {
  const res = await fetch(
    `${WP_API}/categories?per_page=50&hide_empty=true`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) return [];

  const categories = await res.json();
  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    count: cat.count,
  }));
}