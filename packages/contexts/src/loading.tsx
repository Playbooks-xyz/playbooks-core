import React, { useEffect } from 'react';

import NProgress from 'nprogress';

// Configuration
NProgress.configure({
	easing: 'ease',
	showSpinner: false,
	speed: 300,
});

// Events
export const LoadingContext = React.createContext(null);

export const LoadingProvider = ({ contexts, children }) => {
	const router = contexts.useRouter();

	// Hooks
	useEffect(() => {
		router.events.on('routeChangeStart', onRouteStart);
		router.events.on('routeChangeComplete', onRouteComplete);
		router.events.on('routeChangeError', () => onRouteError);
		return () => {
			router.events.off('routeChangeStart', onRouteStart);
			router.events.off('routeChangeComplete', onRouteComplete);
			router.events.off('routeChangeError', onRouteError);
		};
	}, [router]);

	// Methods
	const onRouteStart = () => {
		NProgress.start();
	};

	const onRouteComplete = () => {
		NProgress.done();
	};

	const onRouteError = () => {
		NProgress.done();
	};

	// Render
	return <LoadingContext.Provider value={null}>{children}</LoadingContext.Provider>;
};

// Docs
// https://www.npmjs.com/package/nprogress
