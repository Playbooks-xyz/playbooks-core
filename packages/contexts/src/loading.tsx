import React from 'react';
import Router from 'next/router';

import NProgress from 'nprogress';

// Configuration
NProgress.configure({
	easing: 'ease',
	showSpinner: false,
	speed: 300,
});

// Events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export const LoadingContext = React.createContext(null);

export const LoadingProvider = ({ children }) => {
	// Render
	return <LoadingContext.Provider value={null}>{children}</LoadingContext.Provider>;
};

// Docs
// https://www.npmjs.com/package/nprogress
