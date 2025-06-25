import { BorderBtn, Btn } from '@playbooks/ui/buttons';
import { Span } from '@playbooks/ui/html';
import { Slide, SlideBody, SlideFooter, SlideHeader, SlideTitle } from '@playbooks/ui/slides';

const FacetSlide = ({
	title = 'Filters',
	open,
	setOpen,
	placement = 'left',
	onClear,
	onSave,
	children,
	tailwind = null,
}) => {
	// Methods
	const onToggle = () => setOpen(!open);

	// Render
	return (
		<Slide open={open} placement={placement} onClose={onToggle}>
			<SlideHeader onClose={onToggle}>
				<SlideTitle>{title}</SlideTitle>
			</SlideHeader>
			<SlideBody {...tailwind?.body}>{children}</SlideBody>

			<SlideFooter display='flex-between' space='space-x-4'>
				<Span width='w-1/2'>
					<Btn onClick={onSave} className='w-full'>
						Save
					</Btn>
				</Span>
				<Span width='w-1/2'>
					<BorderBtn onClick={onClear} className='w-full'>
						Clear
					</BorderBtn>
				</Span>
			</SlideFooter>
		</Slide>
	);
};

export { FacetSlide };
