import { FormDivInput } from '@playbooks/ui/forms';
import { InputGroup, InputPrepend } from '@playbooks/ui/input-groups';

const DivForm = ({ prevIcon = 'magnifying-glass', children, tailwind }) => {
	// Render
	return (
		<InputGroup {...tailwind?.inputGroup}>
			<InputPrepend icon={prevIcon} {...tailwind?.inputPrepend} />
			<FormDivInput variant='group' spacing='py-2.5' {...tailwind?.input}>
				{children}
			</FormDivInput>
		</InputGroup>
	);
};

export { DivForm };
