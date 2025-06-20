import { useEffect } from 'react';
import { onlyText } from 'react-children-utilities';

import { AccentBtn } from '@playbooks/ui/buttons';
import { Div, Pre, Span } from '@playbooks/ui/html';

export const CodeElement = props => {
	// const toast = useToast();

	// Hooks
	useEffect(() => {
		// logger.log('CodeElement: ', props);
	}, []);

	// Methods
	const onClick = () => {
		const code = onlyText(props.children.props.children);
		window.navigator.clipboard.writeText(code);
		// toast.showSuccess(200, 'Copied to clipboard');
	};

	// Render
	return (
		<Pre position='relative'>
			{(props.filename || props.copy) && (
				<Div display='block'>
					<Span display='flex-between' space='space-x-4'>
						{props.filename && <Span>{props.filename}</Span>}
						{props.copy && <AccentBtn size='icon' icon='clipboard' onClick={onClick} />}
					</Span>
				</Div>
			)}
			{props.children}
		</Pre>
	);
};

// Docs
// https://github.com/fernandopasik/react-children-utilities/blob/main/docs/filter.md
