import { capitalize } from '@playbooks/utils';
import { BtnGroup } from 'interface/button-groups';
import { AccentBtn } from 'interface/buttons';
import { Span } from 'interface/html';

const ViewToggle = ({ value, options, onClick, tailwind }) => {
	// Methods
	const isActive = option => value === option;

	// Render
	return (
		<BtnGroup
			borderRadius='rounded-md'
			space='space-x-1'
			divide=''
			spacing='p-1'
			width='w-full'
			{...tailwind?.btnGroup}>
			{options.map((option, i) => (
				<Span key={i} {...tailwind?.span}>
					<AccentBtn
						size='xs'
						active={isActive(option)}
						onClick={() => onClick(option)}
						className='w-full'
						{...tailwind?.btn}>
						{capitalize(option)}
					</AccentBtn>
				</Span>
			))}
		</BtnGroup>
	);
};

export { ViewToggle };
