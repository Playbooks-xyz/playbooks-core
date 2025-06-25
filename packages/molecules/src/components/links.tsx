import { UIProvider } from '@playbooks/ui/context';
import * as Links from 'src/components';
import { useMolecules } from 'src/context';

export const Link = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.Link {...props} />
		</UIProvider>
	);
};

export const AccentLink = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.AccentLink {...props} />
		</UIProvider>
	);
};

export const BorderLink = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.BorderLink {...props} />
		</UIProvider>
	);
};

export const TabLink = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.TabLink {...props} />
		</UIProvider>
	);
};

export const TextLink = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.TextLink {...props} />
		</UIProvider>
	);
};

export const LinkWrapper = props => {
	const context = useMolecules();
	const components = context?.components;

	return (
		<UIProvider components={components}>
			<Links.LinkWrapper {...props} />
		</UIProvider>
	);
};
