import { useEffect, useState } from 'react';

import { AccentBtn } from '@playbooks/ui/buttons';
import { FormInput } from '@playbooks/ui/forms';
import { InputAppend, InputGroup, InputPrepend } from '@playbooks/ui/input-groups';
import { sleep } from '@playbooks/utils/helpers';

type SearchFormProps = {
	id?: string;
	ref?: any;
	delay?: number;
	length?: number;
	prevIcon?: string;
	placeholder?: string;
	loading?: boolean;
	query: string;
	setQuery: any;
	hasBlur?: boolean;
	onFocus?: () => any;
	onClear?: () => any;
	elements?: any;
	tailwind?: any;
};

const SearchForm = ({
	id,
	ref,
	delay = 300,
	length = 3,
	prevIcon = 'magnifying-glass',
	placeholder,
	query,
	setQuery,
	loading,
	hasBlur,
	onFocus,
	onClear,
	elements,
	tailwind,
}: SearchFormProps) => {
	const [localQuery, setLocalQuery] = useState(query || '');
	const [queue, setQueue] = useState([]);
	const [loaded, setLoaded] = useState(false);

	// Hooks
	useEffect(() => {
		setLocalQuery(query);
		setLoaded(true);
	}, [query]);

	useEffect(() => {
		if (loaded) addQuery();
	}, [loaded, localQuery]);

	useEffect(() => {
		if (queue.length > 0) processQuery();
	}, [queue]);

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	// Methods
	const onBlur = () => {
		if (hasBlur) setLocalQuery('');
	};

	const onKeyDown = e => {
		if (e.keyCode === 27) clearSearch();
	};

	const addQuery = async () => {
		await sleep(delay);
		if (localQuery.length === 0) clearSearch();
		if (localQuery.length >= length && !queue.includes(localQuery)) setQueue([...queue, localQuery]);
	};

	const processQuery = () => {
		const nextQuery = queue[0];
		if (queue.length > 0) {
			if (localQuery === nextQuery) setQuery(nextQuery);
			setQueue(queue.filter(v => v !== nextQuery));
		}
	};

	const clearSearch = () => {
		setQuery('');
		setLocalQuery('');
		setQueue([]);
		if (onClear) onClear();
		const Form = document.getElementById(id) as HTMLFormElement;
		if (Form) Form.value = '';
	};

	// Render
	return (
		<InputGroup overflow='overflow-hidden' {...tailwind?.FormGroup}>
			<InputPrepend icon={prevIcon} {...tailwind?.InputPrepend} />
			<FormInput
				id={id}
				ref={ref}
				value={localQuery}
				variant='group'
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={e => setLocalQuery(e.target.value)}
				onFocus={onFocus ? onFocus : null}
				spacing='py-3.5'
				{...tailwind?.Form}
			/>
			{elements?.InputAppend ? (
				elements?.InputAppend
			) : (
				<InputAppend spacing='pl-0' {...tailwind?.InputAppend}>
					{query?.length >= length && (
						<AccentBtn size='icon' icon='xmark' taskRunning={loading} onClick={clearSearch} />
					)}
				</InputAppend>
			)}
		</InputGroup>
	);
};

export { SearchForm };
