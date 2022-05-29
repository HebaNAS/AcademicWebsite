import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import katex from 'katex';
import visit from 'unist-util-visit';

const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};

export const mdsvex_config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	remarkPlugins: [katex_blocks, remarkHtml, remarkParse, remarkMath, remarkRehype],
	rehypePlugins: [correct_hast_tree, rehypeKatex, rehypeStringify]
};