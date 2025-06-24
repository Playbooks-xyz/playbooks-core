import { useState } from 'react';

import { Accordion, AccordionBody, AccordionText, AccordionTitle, AccordionToggle } from '@playbooks/ui/accordions';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';

const FaqAccordion = ({ title, text, defaultValue = false }) => {
	const [open, setOpen] = useState(defaultValue);

	// Methods
	const onToggle = () => setOpen(!open);

	// Render
	return (
		<Accordion open={open} border='border' borderRadius='rounded-md' spacing='mb-4'>
			<AccordionToggle size='' open={open} onClick={onToggle} borderRadius='' spacing='p-6'>
				<Span display='flex-start' space='space-x-4'>
					<FarIcon icon='circle-question' fontSize='text-lg' />
					<AccordionTitle fontSize='text-base'>{title}</AccordionTitle>
				</Span>
			</AccordionToggle>

			<AccordionBody open={open} spacing='px-4 py-6' animate>
				<AccordionText>{text}</AccordionText>
			</AccordionBody>
		</Accordion>
	);
};

export { FaqAccordion };
