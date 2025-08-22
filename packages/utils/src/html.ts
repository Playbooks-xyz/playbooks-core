export { computeTailwind } from '@ehubbell/html';
import { convert } from 'html-to-text';

export const htmlToText = (data, options?) => {
	return convert(data, options);
};

// Docs
// https://www.npmjs.com/package/html-to-text
