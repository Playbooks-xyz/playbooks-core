import { useEffect } from 'react';

export const useLocalStorage = (method, listeners) => {
	useEffect(() => {
		window.addEventListener('storage', method);
		return () => window.removeEventListener('storage', method);
	}, [...listeners]);
};

export const useOffline = (method, listeners) => {
	useEffect(() => {
		method();
		window.addEventListener('offline', method);
		return () => window.removeEventListener('online', method);
	}, [...listeners]);
};

export const useOnline = (method, listeners) => {
	useEffect(() => {
		method();
		window.addEventListener('online', method);
		return () => window.removeEventListener('online', method);
	}, [...listeners]);
};

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
