import { useEffect } from 'react';

export const useMouseDown = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mousedown', method);
		return () => window.removeEventListener('mousedown', method);
	}, [...listeners]);
};

export const useMouseEnter = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mouseenter', method);
		return () => window.removeEventListener('mouseenter', method);
	}, [...listeners]);
};

export const useMouseLeave = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mouseleave', method);
		return () => window.removeEventListener('mouseleave', method);
	}, [...listeners]);
};

export const useMouseUp = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mouseup', method);
		return () => window.removeEventListener('mouseup', method);
	}, [...listeners]);
};

export const useMouseMenu = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('contextmenu', method);
		return () => window.removeEventListener('contextmenu', method);
	}, [...listeners]);
};
