import { Btn } from 'src/buttons';
import { useUI } from 'src/context';
import { FormSelect } from 'src/forms';
import { Div } from 'src/html';
import * as types from 'types';

export const TabWrapper = ({ name = 'TabWrapper', tailwind, className, children, ...props }: types.TabWrapperProps) => {
	const context = useUI();
	const base = context?.theme?.tabWrapper();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TabSelect = ({
	name = 'TabSelect',
	activeTab,
	onSelect,
	tabs,
	tailwind,
	className,
	children,
	...props
}: types.TabSelectProps) => {
	const context = useUI();
	const base = context?.theme?.tabSelect();
	const computed = { ...base, ...props, tailwind, className, name };

	return <FormSelect value={activeTab} options={tabs} onChange={onSelect} {...computed} />;
};

export const Tabs = ({
	name = 'Tabs',
	activeTab,
	tabs,
	onSelect,
	tailwind,
	className,
	children,
	...props
}: types.TabPropss) => {
	const context = useUI();
	const base = context?.theme?.tabs();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<TabWrapper>
			<TabSelect activeTab={activeTab} tabs={tabs} onSelect={e => onSelect(e.target.value)} />
			<Div {...computed}>{children}</Div>
		</TabWrapper>
	);
};

export const Tab = ({
	name = 'Tab',
	alt = 'select tab',
	variant = 'accent',
	size = 'p-4',
	active,
	value,
	onSelect,
	tailwind,
	className,
	children,
	...props
}: types.TabProps) => {
	const context = useUI();
	const base = context?.theme?.tab({ active });
	const computed = { ...base, ...props, tailwind, alt, children, className, name };

	return <Btn variant={variant} onClick={() => onSelect(value)} {...computed} />;
};

export const TabPanes = ({ name = 'TabPanes', tailwind, className, children, ...props }: types.TabPanesProps) => {
	const context = useUI();
	const base = context?.theme?.tabPanes();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const TabPane = ({
	name = 'TabPane',
	active,
	value,
	tailwind,
	className,
	children,
	...props
}: types.TabPaneProps) => {
	const context = useUI();
	const base = context?.theme?.tabPane({ active });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/src/application-ui/navigation/tabs
