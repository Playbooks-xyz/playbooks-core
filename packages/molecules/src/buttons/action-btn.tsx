import { Fragment } from 'react';

import { BorderBtn } from '@playbooks/ui/buttons';
import { DropToggle } from '@playbooks/ui/drops';

const ActionsBtn = ({ type = 'detail', open, onToggle }) => {
	// Render
	return (
		<Fragment>
			{type === 'detail' ? (
				<DropToggle variant='primary' open={open} onClick={onToggle}>
					Actions
				</DropToggle>
			) : (
				<BorderBtn size='icon' icon='chevron-down' onClick={onToggle} />
			)}
		</Fragment>
	);
};

export { ActionsBtn };
