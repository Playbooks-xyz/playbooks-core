import { useEffect, useState } from 'react';

export const useElementKeyDown = (element, onKeyPress, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('keydown', onKeyPress);
		return () => element && element.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};

export const useElementResize = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('resize', method);
		return () => element && element.removeEventListener('resize', method);
	}, [...listeners]);
};

export const useElementObserver = (element, listeners) => {
	const [item, setItem] = useState(null);

	useEffect(() => {
		const observer = new ResizeObserver(entries => setItem(entries[0]));
		observer.observe(element);
		return () => observer.disconnect();
	}, [...listeners]);

	return item;
};

export const useElementHeight = (element, method, listeners) => {
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const item = entries[0];
			method(item.contentRect.height);
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [...listeners]);
};

export const useElementWidth = (element, method, listeners) => {
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const item = entries[0];
			method(item.contentRect.width);
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [...listeners]);
};

// Docs
// https://usehooks.com/usekeypress
