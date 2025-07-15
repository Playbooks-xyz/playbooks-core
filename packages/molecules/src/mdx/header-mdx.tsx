import { Font } from '@playbooks/ui/fonts';
import { Span } from '@playbooks/ui/html';
import { TextLink } from '@playbooks/ui/links';

export const HeaderElement = ({ size, ...props }) => {
	// Render
	switch (size) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
			return (
				<Font id={props.id} size={size} cursor='cursor-pointer' group='group' className='inline-block'>
					<TextLink
						size=''
						href={'#' + props.id}
						tailwind={{ fontFamily: '', fontSize: '', fontWeight: '', hover: '' }}>
						<Span>{props.children}</Span>
						<Span color='text-gray-400 dark:text-gray-600' display='hidden group-hover:inline-block'>
							#
						</Span>
					</TextLink>
				</Font>
			);
		default:
			return (
				<Font size={size} group='group' className='inline-block'>
					{props.children}
				</Font>
			);
	}
};

// Docs
