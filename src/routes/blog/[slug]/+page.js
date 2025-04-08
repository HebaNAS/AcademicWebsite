export async function entries() {
  // Dynamically import all markdown files
  const posts = import.meta.glob('../../posts/*.md');
  
  return Object.keys(posts).map(path => {
    const slug = path.split('/').pop().replace('.md', '');
    return { slug };
  });
}

export const prerender = true;
