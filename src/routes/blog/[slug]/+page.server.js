import { convertMarkdown } from '$lib/handle-markdown.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  try {
    // Ensure the file exists before converting
    const filePath = `src/posts/${params.slug}.md`;
    
    // Optional: You might want to add a check to verify the file exists
    import.meta.glob('../../posts/*.md');
    
    const post = convertMarkdown(filePath);
    return {
      post
    };
  } catch (e) {
    // Log the error for debugging
    console.error(`Error loading post ${params.slug}:`, e);
    
    // Throw a 404 error if the post can't be found
    throw error(404, `Could not find post: ${params.slug}`);
  }
}

export const prerender = true;
