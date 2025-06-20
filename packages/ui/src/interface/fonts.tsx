import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';

export const Font = props => {
	switch (props?.size) {
		case 'h1':
			return <H1 {...props} />;

		case 'h2':
			return <H2 {...props} />;

		case 'h3':
			return <H3 {...props} />;

		case 'h4':
			return <H4 {...props} />;

		case 'h5':
			return <H5 {...props} />;

		case 'h6':
			return <H6 {...props} />;

		case 'p':
			return <P {...props} />;

		case 'sm':
			return <Small {...props} />;

		case 'xs':
			return <Small fontSize='text-xs' {...props} />;
	}
};

export const H1 = ({ name = 'H1', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h1();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H1 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H1>
	);
};

export const H2 = ({ name = 'H2', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h2();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H2 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H2>
	);
};

export const H3 = ({ name = 'H3', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h3();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H3 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H3>
	);
};

export const H4 = ({ name = 'H4', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h4();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H4 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H4>
	);
};

export const H5 = ({ name = 'H5', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h5();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H5 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H5>
	);
};

export const H6 = ({ name = 'H6', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.h6();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.H6 name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.H6>
	);
};

export const P = ({ name = 'P', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.p();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.P name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.P>
	);
};

export const Small = ({ name = 'Small', tailwind, className, children, ...props }: types.FontProps) => {
	const base = theme.small();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Small name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Small>
	);
};

// Docs
// https://tailwindcss.com/docs/font-size
