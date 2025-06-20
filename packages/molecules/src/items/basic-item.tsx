import { Li } from '@playbooks/ui/html';
import { SectionSubtitle } from '@playbooks/ui/sections';

export const BasicItem = ({ keyName, loading, children, tailwind }) => {
	// Render
	return (
		<Li border='border-b' display='flex-between' space='space-x-8' spacing='py-4' {...tailwind?.li}>
			<SectionSubtitle fontSize='text-sm'>{keyName}</SectionSubtitle>
			{children}
		</Li>
	);
};
