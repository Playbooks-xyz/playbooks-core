import { useEffect } from 'react';

export const useResize = (method, listeners) => {
	useEffect(() => {
		method();
		window.addEventListener('resize', method);
		return () => window.removeEventListener('resize', method);
	}, [...listeners]);
};

export const useResizeTarget = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('resize', method);
		return () => element && element.removeEventListener('resize', method);
	}, [...listeners]);
};

// Docs
// https://usehooks.com/usekeypress
