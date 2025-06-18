import { useInterface } from 'contexts';
import { Btn } from 'interface/buttons';
import { FormSelect } from 'interface/forms';
import { Div } from 'interface/html';
import * as types from 'types/tab-types';

export const TabWrapper = ({ name = 'TabWrapper', tailwind, className, children, ...props }: types.TabWrapperProps) => {
	const { theme } = useInterface();
	const base = theme.tabWrapper();
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
	const { theme } = useInterface();
	const base = theme.tabSelect();
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
	const { theme } = useInterface();
	const base = theme.tabs();
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
	const { theme } = useInterface();
	const base = theme.tab({ active });
	const computed = { ...base, ...props, tailwind, alt, children, className, name };

	return <Btn variant={variant} onClick={() => onSelect(value)} {...computed} />;
};

export const TabPanes = ({ name = 'TabPanes', tailwind, className, children, ...props }: types.TabPanesProps) => {
	const { theme } = useInterface();
	const base = theme.tabPanes();
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
	const { theme } = useInterface();
	const base = theme.tabPane({ active });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs
// https://tailwindui.com/interface/application-ui/navigation/tabs
