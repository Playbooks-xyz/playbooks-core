import { H6, Small } from '@playbooks/ui/fonts';
import { FormGroup } from '@playbooks/ui/forms';
import { Div, Span } from '@playbooks/ui/html';
import { Switch } from '@playbooks/ui/switches';

export const SwitchFormGroup = ({ title = '', text = '', value, onClick, tailwind }) => {
	// Render
	return (
		<FormGroup border='border-b' spacing='py-6' {...tailwind?.formGroup}>
			<Div className='flex-between space-x-8'>
				<Span className='space-y-1'>
					<H6 fontSize='text-base' fontWeight='font-bold'>
						{title}
					</H6>
					<Small>{text}</Small>
				</Span>
				<Switch checked={value || false} onClick={onClick} />
			</Div>
		</FormGroup>
	);
};
