import { Autocomplete, LoadScriptNext, LoadScriptProps } from '@react-google-maps/api';
import { useState } from 'react';

const LIBRARIES: LoadScriptProps['libraries'] = ['places'];

const GoogleAutocompleteWrapper = ({ options = {}, googleMapsApiKey, onSelect, children }) => {
	const [autocomplete, setAutocomplete] = useState(null);

	// Computed
	const computed = {
		options: { types: ['(regions)'] }, // geocode, establishment
		fields: ['name', 'formatted_address', 'geometry', 'address_component'],
		...options,
	};

	// Methods
	const onPlaceChanged = () => {
		const data = {
			addressLineOne: '',
			addressLineTwo: '',
			city: '',
			state: '',
			country: '',
			postalCode: null,
			latitude: 0,
			longitude: 0,
		};
		const google = autocomplete.getPlace();
		const address = google.address_components;
		const streetComponent = address.find(component => component.types[0] === 'street_number');
		const routeComponent = address.find(component => component.types[0] === 'route');
		const subpremiseComponent = address.find(component => component.types[0] === 'subpremise');
		const city = address.find(component => component.types[0] === 'locality');
		const state = address.find(component => component.types[0] === 'administrative_area_level_1');
		const country = address.find(component => component.types[0] === 'country');
		const postalCode = address.find(component => component.types[0] === 'postal_code');

		data.addressLineOne = streetComponent?.long_name + ' ' + routeComponent?.long_name;
		data.addressLineTwo = subpremiseComponent?.long_name;
		data.city = city?.long_name;
		data.state = state?.short_name;
		data.country = country?.short_name;
		data.postalCode = postalCode?.long_name;
		data.latitude = google.geometry.location.lat();
		data.longitude = google.geometry.location.lng();

		onSelect(data);
	};

	// Render
	return (
		<LoadScriptNext googleMapsApiKey={googleMapsApiKey} libraries={LIBRARIES}>
			<Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged} className='w-full' {...computed}>
				{children}
			</Autocomplete>
		</LoadScriptNext>
	);
};

export { GoogleAutocompleteWrapper };

// Docs:
// https://github.com/JustFly1984/react-google-maps-api
// https://github.com/JustFly1984/react-google-maps-api/tree/develop/packages/react-google-maps-api
// https://developers.google.com/maps/documentation/javascript/places-autocomplete
