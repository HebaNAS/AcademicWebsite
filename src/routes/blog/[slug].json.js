import { convertMarkdown } from '$lib/handle-markdown.js'

export async function get({ params }) {
  let body = {}
  if (params.slug !== 'logo.svg') {
    const url = params.slug;
    const post = await convertMarkdown(`src/posts/${url}.md`)
    body = JSON.stringify(post);
  }
  return { body }
}