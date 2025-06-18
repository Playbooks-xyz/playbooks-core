import { useInterface } from 'contexts';
import { Font, P, Small } from 'interface/fonts';
import { Div } from 'interface/html';
import { Icon } from 'interface/icons';
import * as types from 'types/feedback-types';

export const Feedback = ({ name = 'Feedback', tailwind, className, children, ...props }: types.FeedbackProps) => {
	const { theme } = useInterface();
	const base = theme.feedback();
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
	const { theme } = useInterface();
	const base = theme.feedbackHeader();
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
	const { theme } = useInterface();
	const base = theme.feedbackIcon();
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
	const { theme } = useInterface();
	const base = theme.feedbackBody();
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
	const { theme } = useInterface();
	const base = theme.feedbackPretitle();
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
	const { theme } = useInterface();
	const base = theme.feedbackTitle();
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
	const { theme } = useInterface();
	const base = theme.feedbackText();
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
	const { theme } = useInterface();
	const base = theme.feedbackActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/feedback/empty-states
