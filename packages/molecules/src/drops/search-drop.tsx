import { useMemo, useRef, useState } from 'react';

import { Drop, DropBtn, DropItem, DropList, DropMenu } from '@playbooks/ui/drops';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';
import { capitalize } from '@playbooks/utils';
import { DivForm, SearchForm } from 'src/forms';
import { SearchTag } from 'src/tags/search-tag';

const FilterSearchDrop = ({ id, keyName, prevIcon = 'filter', value, placeholder, options, onChange, tailwind }) => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	// Computed
	const computedValue = value ? value[keyName] : value;

	const computedOptions = useMemo(() => {
		return options?.filter(v => v[keyName]?.toLowerCase().includes(query?.toLowerCase()));
	}, [options, query]);

	const isActive = options?.includes(value);

	// Methods
	const onClose = () => setOpen(false);

	const onOpen = () => setOpen(true);

	const onClick = option => {
		setOpen(false);
		setQuery('');
		onChange(option);
	};

	// Render
	return (
		<Drop ref={ref} open={open} onClose={onClose} {...tailwind?.drop}>
			{value ? (
				<DivForm prevIcon={prevIcon} tailwind={tailwind.search}>
					<SearchTag result={value} options={{ keyName }} onRemove={() => onClick(null)} />
				</DivForm>
			) : (
				<SearchForm
					id={id}
					delay={100}
					prevIcon={prevIcon}
					query={query}
					setQuery={setQuery}
					placeholder={placeholder}
					onFocus={onOpen}
					tailwind={tailwind?.search}
				/>
			)}
			<DropMenu ref={ref} open={open} maxHeight='max-h-[300px]' style={{ width: ref?.current?.scrollWidth }}>
				<DropList>
					{computedOptions?.map((option, i) => (
						<DropItem key={i}>
							<DropBtn
								onClick={() => onClick(option)}
								tailwind={{ span: { display: 'flex-between', width: 'w-full' } }}>
								<Span>{capitalize(option[keyName])}</Span>
								{computedValue === option[keyName] && <FarIcon icon='check' />}
							</DropBtn>
						</DropItem>
					))}
					{isActive && (
						<DropItem>
							<DropBtn
								nextIcon='xmark'
								onClick={() => onClick('')}
								tailwind={{ span: { display: 'flex-between', width: 'w-full' } }}>
								Clear
							</DropBtn>
						</DropItem>
					)}
				</DropList>
			</DropMenu>
		</Drop>
	);
};

export { FilterSearchDrop };
