import React, { useEffect, useState } from 'react';

import { Tab, TabPane, TabPanes, Tabs, TabWrapper } from '@playbooks/ui/tabs';

export const TabElement = ({ tabs, children }) => {
	const [active, setActive] = useState(tabs[0]);

	// Computed
	const panes = React.Children.toArray(children);

	// Hooks
	useEffect(() => {
		// logger.log('TabElement: ', { active, tabs });
	}, []);

	// Render
	return (
		<TabWrapper border='border' bgColor='bg-white dark:bg-gray-800' borderRadius='rounded-md'>
			<Tabs activeTab={active} tabs={tabs} onSelect={setActive} border='border-b'>
				{tabs.map((tab, i) => (
					<Tab key={i} size='xs' value={tab} active={tab === active} onSelect={setActive}>
						{tab.toUpperCase()}
					</Tab>
				))}
			</Tabs>
			<TabPanes>
				{panes.map((pane, i) => (
					<TabPane key={i} value={tabs[i]} active={active === tabs[i]}>
						{pane}
					</TabPane>
				))}
			</TabPanes>
		</TabWrapper>
	);
};
