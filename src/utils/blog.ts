import { sanityClient, urlFor } from './sanity';
import { toHTML } from '@portabletext/to-html';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  mainImage: any;
  publishedAt: string;
  bodyHtml: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      "id": slug.current,
      title,
      excerpt,
      mainImage,
      publishedAt,
      body
    }`;
    const data = await sanityClient.fetch(query);
    
    if (!data) return [];

    return data.map((post: Omit<BlogPost, 'bodyHtml'> & { body?: any }) => ({
      ...post,
      bodyHtml: post.body ? toHTML(post.body) : '',
    }));
  } catch (error) {
    console.warn("Sanity fetch failed for posts", error);
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      "id": slug.current,
      title,
      excerpt,
      mainImage,
      publishedAt,
      body
    }`;
    const post = await sanityClient.fetch(query, { slug });
    
    if (!post) return null;

    return {
      ...post,
      bodyHtml: post.body ? toHTML(post.body) : '',
    };
  } catch (error) {
    console.error("Sanity fetch failed for post", error);
    return null;
  }
}
