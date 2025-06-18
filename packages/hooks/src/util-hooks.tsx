import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value, delay) => {
	const [debounce, setDebounce] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebounce(value), delay);
		return () => clearTimeout(handler);
	}, [value, delay]);

	return debounce;
};

export const useDelay = (method = null, listeners = []) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			method();
			setActive(true);
		}, listeners[0]);
	}, [...listeners]);

	return active;
};

export const useFocus = (listeners = []) => {
	const ref = useRef(null);

	useEffect(() => {
		ref.current?.focus();
	}, [...listeners]);

	return ref;
};

export const useInterval = (method, listeners = []) => {
	useEffect(() => {
		setTimeout(() => method(), listeners[0] || 1000);
	}, [...listeners]);
};

export const useLoaded = (method = null, listeners = []) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		loaded && method ? method() : setLoaded(true);
	}, [loaded, ...listeners]);

	return loaded;
};

export const useMount = (method, listeners = []) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		loaded ? method() : setLoaded(true);
	}, [...listeners]);
};
