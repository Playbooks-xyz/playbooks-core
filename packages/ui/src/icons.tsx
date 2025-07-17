import { FontAwesome } from '@playbooks/components/font-awesome';
import * as types from 'types';
import { useUI } from 'src/context';
import { Div } from 'src/html';

export const Icon = props => {
	switch (props?.type) {
		case 'fab':
			return <FabIcon {...props} />;

		case 'fad':
			return <FadIcon {...props} />;

		case 'fal':
			return <FalIcon {...props} />;

		case 'far':
			return <FarIcon {...props} />;

		case 'fas':
			return <FasIcon {...props} />;

		case 'wrapped-fab':
			return <WrappedFabIcon {...props} />;

		case 'wrapped-fad':
			return <WrappedFadIcon {...props} />;

		case 'wrapped-fal':
			return <WrappedFalIcon {...props} />;

		case 'wrapped-far':
			return <WrappedFarIcon {...props} />;

		case 'wrapped-fas':
			return <WrappedFasIcon {...props} />;

		default:
			return <FarIcon {...props} />;
	}
};

export const FabIcon = ({ name = 'FabIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FontAwesome type='fab' icon={icon} {...computed} />;
};

export const FadIcon = ({ name = 'FadIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FontAwesome type='fad' icon={icon} {...computed} />;
};

export const FalIcon = ({ name = 'FalIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FontAwesome type='fal' icon={icon} {...computed} />;
};

export const FarIcon = ({ name = 'FarIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FontAwesome type='far' icon={icon} {...computed} />;
};

export const FasIcon = ({ name = 'FasIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.icon();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FontAwesome type='fas' icon={icon} {...computed} />;
};

export const WrappedFabIcon = ({ name = 'WrappedFabIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className, name };
	return (
		<Div {...computed}>
			<FontAwesome type='fab' icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFadIcon = ({ name = 'WrappedFadIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className, name };
	return (
		<Div {...computed}>
			<FontAwesome type='fad' icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFalIcon = ({ name = 'WrappedFalIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FontAwesome type='far' icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFarIcon = ({ name = 'WrappedFarIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FontAwesome type='far' icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

export const WrappedFasIcon = ({ name = 'WrappedFasIcon', icon, tailwind, className, ...props }: types.IconProps) => {
	const context = useUI();
	const base = context?.theme?.wrappedIcon();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Div {...computed}>
			<FontAwesome type='far' icon={icon} tailwind={tailwind?.icon} />
		</Div>
	);
};

// Docs
// https://tailwindui.com/src/application-ui/overlays/notifications
