import { useEffect, useMemo, useState } from 'react';

import { TextLink } from 'src/components';

export const TocElement = ({ size, ...props }) => {
	const [show, setShow] = useState(false);

	// Computed
	const spacing = useMemo(() => {
		switch (size) {
			case 'h2':
				return 'pl-2';
			case 'h3':
				return 'pl-4';
			case 'h4':
				return 'pl-6';
			case 'h5':
				return 'pl-8';
			case 'h6':
				return 'pl-10';
		}
	}, [props]);

	// Hooks
	useEffect(() => {
		// logger.log('TocElement: ', props);
	}, []);

	switch (size) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
			return (
				<TextLink
					size=''
					href={'#' + props.id}
					tailwind={{
						align: 'text-left',
						color: 'text-gray-600 dark:text-gray-400',
						display: 'block',
						fontSize: 'text-sm',
						spacing,
					}}>
					<span data-scrollspy={props.id}>{props.children}</span>
				</TextLink>
			);
		default:
			return null;
	}
};

// Docs
// scrollspy
// id generation
