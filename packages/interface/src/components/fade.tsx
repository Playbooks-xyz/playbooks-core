import { Transition } from 'react-transition-group';

export type FadeProps = {
	ref?: any;
	show: boolean;
	timeout?: any;
	onEnter?: any;
	onEntering?: any;
	onEntered?: any;
	onExit?: any;
	onExiting?: any;
	onExited?: any;
	mountOnEnter?: boolean;
	unmountOnExit?: boolean;
	children?: any;
};

const Fade = ({
	ref,
	show,
	timeout = 200,
	onEnter,
	onEntering,
	onEntered,
	onExit,
	onExiting,
	onExited,
	mountOnEnter = true,
	unmountOnExit = true,
	children,
}: FadeProps) => {
	return (
		<Transition
			nodeRef={ref}
			in={show}
			appear={show}
			timeout={timeout}
			onEnter={onEnter}
			onEntering={onEntering}
			onEntered={onEntered}
			onExit={onExit}
			onExiting={onExiting}
			onExited={onExited}
			mountOnEnter={mountOnEnter}
			unmountOnExit={unmountOnExit}>
			{children}
		</Transition>
	);
};

export { Fade };

// Docs
// https://reactcommunity.team/react-transition-group/transition
