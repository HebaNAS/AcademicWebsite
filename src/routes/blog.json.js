import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown.js'

// load all markdown files from the posts directory
let postFiles = importMarkdowns('src/posts/')

export function get() {
    let posts = postFiles.map((file) => {
      return convertToPostPreview(file)
    });

    // stringify to give it as a result of the get command
    let body = JSON.stringify(posts);

    return {body}
}