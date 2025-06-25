import { useMemo } from 'react';

import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from '@playbooks/ui/breadcrumbs';

const FooterBreadcrumbs = ({ router, tailwind }: { router: any; tailwind?: any }) => {
	// Computed
	const breadcrumbs = useMemo(() => {
		const paths = router.asPath.split('?')[0].split('#')[0].split('/');
		paths.shift();
		return paths;
	}, [router.asPath]);

	// Render
	return (
		<Breadcrumbs
			border='border-y'
			borderRadius=''
			overflow='overflow-x-scroll'
			spacing='px-4 py-8'
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
						{breadcrumb}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumbs>
	);
};

export { FooterBreadcrumbs };
