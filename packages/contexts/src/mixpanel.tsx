import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { env } from '@playbooks/utils/env';
import { logger } from '@playbooks/utils/logger';
import Mixpanel from 'mixpanel-browser';

type MixpanelContext = {
	identify?: any;
	register?: any;
	trackEvent: any;
	trackUser: any;
	trackPage: any;
	reset: any;
};

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const MixpanelContext = React.createContext<MixpanelContext>(null);

const MixpanelProvider = ({ platform, children }) => {
	const router = useRouter();

	// Computed
	const computedParams = { env, platform, pathname: router.asPath };

	// Hooks
	useEffect(() => {
		Mixpanel.init(MIXPANEL_TOKEN, {
			// debug: env === 'development'
		});
	}, []);

	useEffect(() => {
		trackPage({});
	}, [router.asPath]);

	// Methods
	const identify = userId => {
		logger.log('identify: ', { userId });
		Mixpanel.identify(userId);
	};

	const register = (user = {}) => {
		logger.log('register: ', { user });
		Mixpanel.register(user);
	};

	const trackEvent = (eventName, params) => {
		const formattedParams = { ...params, ...computedParams };
		logger.log('trackEvent: ', eventName, formattedParams);
		Mixpanel.track(eventName, formattedParams);
	};

	const trackUser = async user => {
		logger.log('peopleSet: ', user);
		Mixpanel.people.set({
			$name: user.name,
			$email: user.email,
			...user,
		});
	};

	const trackPage = params => {
		const formattedParams = { ...params, ...computedParams };
		// log('trackPage: ', formattedParams);
		Mixpanel.track('pageView', formattedParams);
	};

	const reset = () => {
		Mixpanel.reset();
	};

	// Render
	return (
		<MixpanelContext.Provider value={{ identify, register, trackEvent, trackUser, trackPage, reset }}>
			{children}
		</MixpanelContext.Provider>
	);
};

const useMixpanel = () => {
	return React.useContext(MixpanelContext);
};

export { MixpanelProvider, useMixpanel };

// Docs
// https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript
