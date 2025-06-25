import React, { useEffect, useState } from 'react';

import { logger } from '@playbooks/utils/logger';
import * as Fathom from 'fathom-client';

type FathomProps = {
	trackEvent: any;
	trackPage: any;
};

const FATHOM_ID = process.env.NEXT_PUBLIC_FATHOM_ID;
const FathomContext = React.createContext<FathomProps>(null);

const FathomProvider = ({ contexts, debug = false, children }) => {
	const [loaded, setLoaded] = useState(false);
	const router = contexts.useRouter();

	// Hooks
	useEffect(() => {
		Fathom.load(FATHOM_ID, { auto: false });
		setLoaded(true);
	}, []);

	useEffect(() => {
		trackPage(router.asPath, document.referrer);
	}, [loaded, router.asPath]);

	// Methods
	const trackEvent = (eventName, params) => {
		const formattedParams = {};
		Object.keys(params)
			.filter(key => key === '_value')
			.map(key => (formattedParams[key] = params[key]));
		if (debug) logger.debug('trackEvent: ', { eventName, params: formattedParams });
		Fathom.trackEvent(eventName, params);
	};

	const trackPage = (url, referrer) => {
		if (debug) logger.debug('trackPage: ', { url, referrer });
		Fathom.trackPageview({ url, referrer });
	};

	// Render
	return <FathomContext.Provider value={{ trackEvent, trackPage }}>{children}</FathomContext.Provider>;
};

const useFathom = () => {
	return React.useContext(FathomContext);
};

export { FathomProvider, useFathom };

// Docs
// https://www.npmjs.com/package/fathom-client
