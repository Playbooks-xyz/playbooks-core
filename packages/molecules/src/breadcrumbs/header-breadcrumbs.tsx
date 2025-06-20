import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from '@playbooks/ui/breadcrumbs';

const HeaderBreadcrumbs = ({ tailwind }: { tailwind?: any }) => {
	const router = useRouter();

	// Computed
	const breadcrumbs = useMemo(() => {
		const paths = router.asPath.split('?')[0].split('#')[0].split('/');
		paths.shift();
		return paths;
	}, [router.asPath]);

	// Render
	return (
		<Breadcrumbs
			border='border-b'
			borderRadius=''
			overflow='overflow-x-scroll'
			spacing='p-3'
			{...tailwind?.breadcrumbs}>
			<BreadcrumbItem>
				<BreadcrumbLink icon='house' alt='home' href='/' />
			</BreadcrumbItem>
			{breadcrumbs.map((breadcrumb, i) => (
				<BreadcrumbItem key={i} arrow={breadcrumbs.length !== i + 1}>
					<BreadcrumbLink
						alt={breadcrumb}
						href={'/' + breadcrumbs.slice(0, i + 1).join('/')}
						active={breadcrumbs.length === i + 1}>
						{typeof breadcrumb === 'number' ? `${parseInt(breadcrumb)}` : breadcrumb}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumbs>
	);
};

export { HeaderBreadcrumbs };
