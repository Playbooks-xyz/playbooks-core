import { useEffect, useState } from 'react';

// Keyboard
export const useElementKeyDown = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('keydown', method);
		return () => element && element.removeEventListener('keydown', method);
	}, [...listeners]);
};

// Mouse
export const useElementMouseMenu = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('contextmenu', method);
		return () => element && element.removeEventListener('contextmenu', method);
	}, [...listeners]);
};

export const useElementMouseEnter = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('mouseenter', method);
		return () => element && element.removeEventListener('mouseenter', method);
	}, [...listeners]);
};

export const useElementMouseLeave = (element, method, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('mouseleave', method);
		return () => element && element.removeEventListener('mouseleave', method);
	}, [...listeners]);
};

// Resize
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
		if (element) observer.observe(element);
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
		if (element) observer.observe(element);
		return () => observer.disconnect();
	}, [...listeners]);
};

export const useElementWidth = (element, method, listeners) => {
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const item = entries[0];
			method(item.contentRect.width);
		});
		if (element) observer.observe(element);
		return () => observer.disconnect();
	}, [...listeners]);
};

// Docs
// https://usehooks.com/usekeypress
