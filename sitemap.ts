import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Example: fetch dynamic blog posts from your API or CMS
  const posts = await fetch('https://rankraze.uk/api/posts')
    .then(res => res.json())
    .catch(() => [])

  return [
    {
      url: 'https://rankraze.uk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://rankraze.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rankraze.uk/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rankraze.uk/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://rankraze.uk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    // Dynamically add blog posts
    ...posts.map((post: any) => ({
      url: `https://rankraze.uk/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
  ]
}