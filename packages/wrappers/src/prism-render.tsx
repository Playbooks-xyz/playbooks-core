import { Highlight, themes } from 'prism-react-renderer';
import { useMemo } from 'react';

import Prism from 'prismjs';
(typeof global !== 'undefined' ? global : window).Prism = Prism;
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';

const PrismRenderWrapper = ({ content, language, theme, children }) => {
	// Computed
	const computedLanguage = useMemo(() => {
		switch (language) {
			case 'astro':
			case 'mdx':
				return 'md';
			default:
				return language;
		}
	}, [language]);

	// Render
	return (
		<Highlight theme={theme.isDark ? themes.vsDark : themes.vsLight} code={content} language={computedLanguage}>
			{children}
		</Highlight>
	);
};

export { PrismRenderWrapper };

// Docs
// https://shiki.matsu.io/
// https://www.npmjs.com/package/prismjs
// https://www.npmjs.com/package/prism-react-renderer
// https://github.com/PrismJS/prism-themes/blob/master/themes/prism-atom-dark.css
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
// https://github.com/FormidableLabs/prism-react-renderer/tree/master/packages/prism-react-renderer/src/themes
// https://highlightjs.team/usage/
