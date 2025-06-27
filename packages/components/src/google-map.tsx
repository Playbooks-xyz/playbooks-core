import { GoogleMap as GoogleMapWrapper, LoadScriptNext, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

import { computeTailwind } from '@ehubbell/html';

const GoogleMap = ({ model, googleMapsApiKey, styles = [], ...tailwind }) => {
	const [position, setPosition] = useState({ lat: 40.885164, lng: -74.3808085 });
	const classes = computeTailwind(tailwind);

	const options = {
		zoom: 5,
		mapTypeControl: false,
		streetViewControl: false,
		fullscreenControl: false,
		styles,
	};

	// Hooks
	useEffect(() => {
		if (model?.id) setPosition({ lat: model.latitude, lng: model.longitude });
	}, [model?.id]);

	// Render
	return (
		<LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
			<GoogleMapWrapper center={position} options={options} mapContainerClassName={classes}>
				<Marker position={position} />
			</GoogleMapWrapper>
		</LoadScriptNext>
	);
};

export { GoogleMap };

// Docs
// https://react-google-maps-api-docs.netlify.app/
// https://github.com/JustFly1984/react-google-maps-api/tree/develop/packages/react-google-maps-api
