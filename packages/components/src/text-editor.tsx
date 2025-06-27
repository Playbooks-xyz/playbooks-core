import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill-new';

import { computeTailwind } from '@ehubbell/html';
import { formInput } from '@playbooks/theme';

const TextEditor = ({
	value,
	placeholder,
	size = 'sm',
	onBlur = () => null,
	onChange,
	onFocus = () => null,
	className,
	tailwind,
}) => {
	const base = { ...formInput({ size }), overflow: 'overflow-hidden', spacing: '' };
	const classes = computeTailwind({ ...base, ...tailwind, className });
	const ref = useRef(null);

	// Computed
	const modules = useMemo(() => {
		return { keyboard: { bindings: {} }, toolbar: null };
	}, []);

	const formats = useMemo(() => {
		return ['code', 'indent', 'list', 'link'];
	}, []);

	// Render
	return (
		<ReactQuill
			ref={ref}
			value={value}
			placeholder={placeholder}
			formats={formats}
			modules={modules}
			onBlur={onBlur}
			onChange={onChange}
			onFocus={onFocus}
			className={classes}
		/>
	);
};

export { TextEditor };

// Docs
// https://www.npmjs.com/package/react-quill
// https://github.com/zenoamaro/react-quill/issues/762
