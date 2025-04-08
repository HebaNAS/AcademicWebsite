import { convertMarkdown } from '$lib/handle-markdown.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  try {
    const post = convertMarkdown(`src/posts/${params.slug}.md`);
    return {
      post
    };
  } catch (e) {
    throw error(404, `Could not find post: ${params.slug}`);
  }
}

export const prerender = true;
