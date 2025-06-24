import { Btn } from '@playbooks/ui/buttons';
import { Slide, SlideBody, SlideFooter, SlideHeader, SlideTitle } from '@playbooks/ui/slides';

const AppSlide = ({
	title = 'Filters',
	btnText = 'Save',
	placement = 'right',
	open,
	setOpen,
	onClear,
	onSave,
	children,
	tailwind,
}) => {
	// Methods
	const toggleOpen = () => setOpen(!open);

	// Render
	return (
		<Slide open={open} placement={placement} onClose={toggleOpen}>
			<SlideHeader onClose={toggleOpen}>
				<SlideTitle>{title}</SlideTitle>
			</SlideHeader>
			<SlideBody {...tailwind?.body}>{children}</SlideBody>

			<SlideFooter>
				<Btn onClick={onSave} className='w-full'>
					{btnText}
				</Btn>
			</SlideFooter>
		</Slide>
	);
};

export { AppSlide };
