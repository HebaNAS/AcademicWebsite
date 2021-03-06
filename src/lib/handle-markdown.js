import fs from 'fs';
import glob from 'glob';
import fm from 'front-matter';
// import { compile } from 'mdsvex';
// import { remark } from 'remark';
// import html from 'remark-html';
// import rehypePrism from '@mapbox/rehype-prism';
// import { rehype } from 'rehype';

/**
 * import all markdown files in specified path, extract front matter and convert to html
 * @param {string} markdownPath path to folder containing the markdown files (ends on /)
 * @returns [{path, attributes, body}]
 */
export function importMarkdowns(markdownPath) {
    let fileNames = glob.sync(`${markdownPath}*.md`);
    return fileNames.map((path) => convertMarkdown(path));
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns 
 */
export function convertMarkdown(path) {
    // read file
    let file = fs.readFileSync(path, 'utf8');
    // extract frontmatter and body with the front-matter package
    let { attributes, body } = fm(file);
    
    // const res = (async(body) => {
    //   let r = await compile(body).then((final) => {
    //     return final
    //   })
    // })

    // parse the body to html with the remark/rehype pipeline
    // let result = remark().use(html).processSync(body); //.contents;
    // result = rehype().use(rehypePrism).processSync(result);
    return { path, attributes, html: body};
}

export function convertToPostPreview(object) {
  const url = object.path.replace('.md', '').replace('src/', '').replace('posts', 'blog');
  return {...object.attributes, url};
}
