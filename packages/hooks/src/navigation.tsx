import { useEffect, useState } from 'react';

export const useNavigationStart = (router, method): boolean => {
	const [active, setActive] = useState(false);

	// Hooks
	useEffect(() => {
		router.events.on('routeChangeStart', () => setActive(true));
		if (active) method();
		return () => {
			router.events.off('routeChangeStart', () => setActive(false));
		};
	}, [active, router.asPath]);

	return active;
};

export const useNavigationComplete = (router, method): boolean => {
	const [active, setActive] = useState(false);

	// Hooks
	useEffect(() => {
		router.events.on('routeChangeComplete', () => setActive(true));
		if (active) method();
		return () => {
			router.events.off('routeChangeComplete', () => setActive(false));
		};
	}, [active, router.asPath]);

	return active;
};

export const useNavigationError = (router, method): boolean => {
	const [active, setActive] = useState(false);

	// Hooks
	useEffect(() => {
		router.events.on('routeChangeError', () => setActive(true));
		if (active) method();
		return () => {
			router.events.off('routeChangeError', () => setActive(false));
		};
	}, [active, router.asPath]);

	return active;
};
