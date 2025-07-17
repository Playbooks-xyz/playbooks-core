import * as HTML from '@ehubbell/html';
import { computeTailwind } from '@ehubbell/html';
import { isObject } from '@playbooks/utils/helpers';
import { BtnWrapper } from 'src/buttons';
import { useUI } from 'src/context';
import { Div } from 'src/html';
import { FarIcon } from 'src/icons';
import * as types from 'types';

export const Table = ({ name = 'Table', tailwind, className, children, ...props }: types.TableProps) => {
	const context = useUI();
	const base = context?.theme?.table();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.Table name={name} className={classes}>
			{children}
		</HTML.Table>
	);
};

export const TableHeader = ({
	name = 'TableHeader',
	tailwind,
	className,
	children,
	...props
}: types.TableHeaderProps) => {
	const context = useUI();
	const base = context?.theme?.tableHeader();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.THead name={name} className={classes}>
			{children}
		</HTML.THead>
	);
};

export const TableHeaderRow = ({
	name = 'TableHeaderRow',
	tailwind,
	className,
	children,
	...props
}: types.TableHeaderRowProps) => {
	const context = useUI();
	const base = context?.theme?.tableHeaderRow();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return <HTML.TR className={classes}>{children}</HTML.TR>;
};

export const TableHead = ({
	name = 'TableHead',
	alt = 'sort table',
	value,
	params,
	setParams,
	tailwind,
	className,
	children,
	...props
}: types.TableHeadProps) => {
	const context = useUI();
	const base = context?.theme?.tableHead();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });
	const direction = value === params?.sortProp && params?.sortValue === 'asc' ? 'desc' : 'asc';

	return (
		<HTML.TH name={name} className={classes}>
			{isObject(params) ? (
				<BtnWrapper
					alt={alt}
					onClick={() => setParams({ ...params, sortProp: value, sortValue: direction })}
					className='inherit'>
					{children}
					{value === params?.sortProp && params?.sortValue === 'asc' && (
						<FarIcon icon='sort-up' className='text-xs ml-2' />
					)}
					{value === params?.sortProp && params?.sortValue === 'desc' && (
						<FarIcon icon='sort-down' className='text-xs ml-2' />
					)}
					{value !== params?.sortProp && <FarIcon icon='sort' className='text-xs ml-2' />}
				</BtnWrapper>
			) : (
				<Div>{children}</Div>
			)}
		</HTML.TH>
	);
};

export const TableBody = ({ name = 'TableBody', tailwind, className, children, ...props }: types.TableBodyProps) => {
	const context = useUI();
	const base = context?.theme?.tableBody();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.TBody name={name} className={classes}>
			{children}
		</HTML.TBody>
	);
};

export const TableRow = ({ name = 'TableRow', tailwind, className, children, ...props }: types.TableRowProps) => {
	const context = useUI();
	const base = context?.theme?.tableRow();
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.TR name={name} className={classes}>
			{children}
		</HTML.TR>
	);
};

export const TableData = ({
	name = 'TableData',
	title = false,
	value,
	tailwind,
	className,
	children,
	...props
}: types.TableDataProps) => {
	const context = useUI();
	const base = context?.theme?.tableData({ title });
	const classes = computeTailwind({ ...base, ...props, ...tailwind, className });

	return (
		<HTML.TD name={name} className={classes}>
			{value ? value : children}
		</HTML.TD>
	);
};

// Docs:
// https://tailwindui.com/src/application-ui/lists/tables
