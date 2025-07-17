import { useMemo } from 'react';

import * as types from 'types';
import { useUI } from 'src/context';
import { Span } from 'src/html';

export const Command = ({ name = 'CMD', keys = [], tailwind, className, children, ...props }: types.CommandProps) => {
	const context = useUI();
	const base = context?.theme?.command();
	const computed = { ...base, ...props, tailwind, className, name };

	// Computed
	const computedKeys = useMemo(() => {
		const formattedKeys = [];
		keys.map(code => {
			switch (code) {
				case 'command':
				case 'Command':
					return formattedKeys.push('⌘');
				case 'control':
				case 'Control':
					return formattedKeys.push('^');
				case 'enter':
				case 'Enter':
					return formattedKeys.push('↵');
				case 'option':
				case 'Option':
					return formattedKeys.push('⌥');
				case 'shift':
				case 'Shift':
					return formattedKeys.push('⇧');
			}
		});
		return formattedKeys;
	}, [keys]);

	// Render
	return (
		<Span {...computed}>
			{computedKeys.join('')}
			{children}
		</Span>
	);
};
