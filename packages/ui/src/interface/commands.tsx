import { useMemo } from 'react';

import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Span } from 'interface/html';

export const Command = ({ name = 'CMD', keys = [], tailwind, className, children, ...props }: types.CommandProps) => {
	const base = theme.command();
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
