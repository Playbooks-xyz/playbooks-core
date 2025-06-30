import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const MarkdownWrapper = ({ children }) => {
	// Render
	return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
};

export { MarkdownWrapper };

// Docs
// https://www.npmjs.com/package/react-markdown
// https://www.npmjs.com/package/@wcj/markdown-to-html
