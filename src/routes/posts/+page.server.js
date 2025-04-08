import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown.js';

export function load() {
    // load all markdown files from the posts directory
    const postFiles = importMarkdowns('src/posts/');
    
    // Convert post files to preview format
    const posts = postFiles.map(file => convertToPostPreview(file));
    
    return {
        posts
    };
}

export const prerender = true;
