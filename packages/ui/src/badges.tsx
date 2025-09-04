import { useUI } from 'src/context';
import { Span } from 'src/html';
import * as types from 'types';

export const Badge = ({
	name = 'Badge',
	type = '',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.badge({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	// Render
	switch (type) {
		case 'draft':
			return <DraftBadge {...computed}>{children}</DraftBadge>;

		case 'info':
			return <InfoBadge {...computed}>{children}</InfoBadge>;

		case 'pending':
			return <PendingBadge {...computed}>{children}</PendingBadge>;

		case 'warning':
			return <WarningBadge {...computed}>{children}</WarningBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...computed}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'paid':
		case 'won':
			return <FinishedBadge {...computed}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
		case 'stopped':
			return <ErrorBadge {...computed}>{children}</ErrorBadge>;

		default:
			return <DefaultBadge {...computed}>{children}</DefaultBadge>;
	}
};

export const DraftBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.draftBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const InfoBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.infoBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const PendingBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.pendingBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const WarningBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.warningBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const SuccessBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.successBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const FinishedBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.finishedBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const ErrorBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.errorBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const DefaultBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const context = useUI();
	const base = context?.theme?.defaultBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

// Docs:
// https://tailwindui.com/src/application-ui/elements/badges
