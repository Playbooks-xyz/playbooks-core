import { BtnWrapper } from 'src/buttons';
import { useUI } from 'src/context';
import { FarIcon } from 'src/icons';
import { Nav } from 'src/navs';
import * as types from 'types';

export const Pagination = ({ name = 'Pagination', tailwind, className, children, ...props }: types.PaginationProps) => {
	const context = useUI();
	const base = context?.theme?.pagination();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Nav {...computed}>{children}</Nav>;
};

export const PaginationFirst = ({
	name = 'PaginationFirst',
	alt = 'first page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const context = useUI();
	const base = context?.theme?.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevrons-left' />
		</BtnWrapper>
	);
};

export const PaginationPrev = ({
	name = 'PaginationPrev',
	alt = 'prev page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const context = useUI();
	const base = context?.theme?.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevron-left' />
		</BtnWrapper>
	);
};

export const PaginationBtn = ({
	name = 'PaginationBtn',
	alt = 'specific page',
	active,
	tailwind,
	className = '',
	onClick,
	children,
	...props
}: types.PaginationBtnProps) => {
	const context = useUI();
	const base = context?.theme?.paginationBtn({ active });
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} active={active} onClick={onClick} {...computed}>
			{children}
		</BtnWrapper>
	);
};

export const PaginationNext = ({
	name = 'PaginationNext',
	alt = 'next page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const context = useUI();
	const base = context?.theme?.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevron-right' />
		</BtnWrapper>
	);
};

export const PaginationLast = ({
	name = 'PaginationLast',
	alt = 'last page',
	disabled,
	tailwind,
	className,
	onClick,
	...props
}: types.PaginationBtnProps) => {
	const context = useUI();
	const base = context?.theme?.paginationBtn();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<BtnWrapper name={name} alt={alt} onClick={onClick} disabled={disabled} {...computed}>
			<FarIcon icon='chevrons-right' />
		</BtnWrapper>
	);
};

// Docs:
// https://tailwindui.com/src/application-ui/navigation/pagination
