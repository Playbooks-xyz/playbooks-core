import React, { useEffect, useState } from 'react';

import { logger } from '@playbooks/utils/logger';
import { loadStripe } from '@stripe/stripe-js';

const StripeContext = React.createContext({});

const StripeProvider = ({ Elements, children }) => {
	const [stripe, setStripe] = useState(null);

	// Hooks
	useEffect(() => {
		const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
		setStripe(stripePromise);
	}, []);

	useEffect(() => {
		if (stripe) logger.debug('stripeContext: ', { loaded: true });
	}, [stripe]);

	// Methods

	// Render
	return (
		<StripeContext.Provider value={stripe}>
			<Elements stripe={stripe}>{children}</Elements>
		</StripeContext.Provider>
	);
};

const useStripe = () => {
	return React.useContext(StripeContext);
};

export { StripeProvider, useStripe };

// Docs
// https://www.npmjs.com/package/@stripe/react-stripe-js
