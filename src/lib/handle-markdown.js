import { readFileSync } from 'fs';
import { globSync } from 'glob';
import fm from 'front-matter';

/**
 * import all markdown files in specified path, extract front matter and convert to html
 * @param {string} markdownPath path to folder containing the markdown files (ends on /)
 * @returns [{path, attributes, body}]
 */
export function importMarkdowns(markdownPath) {
    const fileNames = globSync(`${markdownPath}*.md`);
    return fileNames.map((path) => convertMarkdown(path));
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns 
 */
export function convertMarkdown(path) {
    // read file
    const file = readFileSync(path, 'utf8');
    // extract frontmatter and body with the front-matter package
    const { attributes, body } = fm(file);
    
    return { path, attributes, html: body};
}

export function convertToPostPreview(object) {
  const slug = object.path.split('/').pop().replace('.md', '');
  return {...object.attributes, url: `blog/${slug}`};
}
