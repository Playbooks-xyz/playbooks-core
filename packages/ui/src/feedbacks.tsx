import * as types from '@playbooks/types';
import { useUI } from 'src/context';
import { Font, P, Small } from 'src/fonts';
import { Div } from 'src/html';
import { Icon } from 'src/icons';

export const Feedback = ({ name = 'Feedback', tailwind, className, children, ...props }: types.FeedbackProps) => {
	const context = useUI();
	const base = context?.theme?.feedback();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackHeader = ({
	name = 'FeedbackHeader',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackHeader();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackIcon = ({
	name = 'FeedbackIcon',
	type = 'fad',
	icon,
	tailwind,
	className,
	...props
}: types.FeedbackIconProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Icon type={type} icon={icon} {...computed} />;
};

export const FeedbackBody = ({
	name = 'FeedbackBody',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackBodyProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const FeedbackPretitle = ({
	name = 'SectionPretitle',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTitleProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackPretitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Small {...computed}>{children}</Small>;
};

export const FeedbackTitle = ({
	name = 'FeedbackTitle',
	size = 'h5',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTitleProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const FeedbackText = ({
	name = 'FeedbackText',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackTextProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const FeedbackActions = ({
	name = 'FeedbackActions',
	tailwind,
	className,
	children,
	...props
}: types.FeedbackActionsProps) => {
	const context = useUI();
	const base = context?.theme?.feedbackActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/feedback/empty-states
