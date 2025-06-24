import { useState } from 'react';

import { serialize } from '@playbooks/serializers';
import { AccentBtn } from '@playbooks/ui/buttons';
import { FormDivInput, FormLocationInput } from '@playbooks/ui/forms';
import { InputAppend, InputGroup, InputPrepend } from '@playbooks/ui/input-groups';
import { LocationTag } from 'src/tags/location-tag';

const LocationInput = ({ location = {}, placeholder = 'Where are you based?', setLocation }) => {
	const [query, setQuery] = useState('');

	// Methods
	const onClear = () => {
		setQuery('');
		const input = document.getElementById('google_places_input') as HTMLInputElement;
		if (input) input.value = '';
	};

	const onRemove = () => {
		setLocation(null);
		onClear();
	};

	const onSelect = data => {
		const formattedData = serialize('dash', data, ['id', 'city', 'state', 'country', 'latitude', 'longitude']);
		setLocation(formattedData);
		onClear();
	};

	// Render
	return (
		<InputGroup minHeight='h-[3em]'>
			<InputPrepend icon='location-pin' />
			{Object.keys(location || {}).length > 0 ? (
				<FormDivInput variant='group'>
					<LocationTag size='xxs' location={location} onRemove={onRemove} />
				</FormDivInput>
			) : (
				<FormLocationInput
					id='google_places_input'
					value={query || ''}
					placeholder={placeholder}
					variant='group'
					googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_KEY}
					onChange={e => setQuery(e.target.value)}
					onSelect={onSelect}
				/>
			)}
			<InputAppend spacing='pr-2'>{query && <AccentBtn size='xs' icon='xmark' onClick={onClear} />}</InputAppend>
		</InputGroup>
	);
};

export { LocationInput };
