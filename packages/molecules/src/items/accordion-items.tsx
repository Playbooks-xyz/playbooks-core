import { useState } from 'react';

import { Accordion, AccordionBody } from '@playbooks/ui/accordions';
import { AccentBtn } from '@playbooks/ui/buttons';
import { Li, Span, Ul } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';
import { Skeleton } from 'src/skeletons';

const AccordionItems = ({ keyName, loading, children, tailwind }) => {
	const [open, setOpen] = useState(false);

	// Methods
	const onToggle = () => setOpen(!open);

	// Render
	return (
		<Li border='border-b' display='flex-column' space='' spacing='' {...tailwind?.li}>
			<Accordion open={open}>
				<Span display='flex-between' space='space-x-4' spacing='py-2'>
					<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
					<AccentBtn size='icon' icon={open ? 'chevron-up' : 'chevron-down'} onClick={onToggle} />
				</Span>
				<AccordionBody open={open} spacing='pb-4' animate>
					<Ul border='border' borderRadius='rounded-md' height='min-h-[100px]' spacing='px-4'>
						{loading ? <Skeleton className='w-20' /> : children}
					</Ul>
				</AccordionBody>
			</Accordion>
		</Li>
	);
};

export { AccordionItems };
