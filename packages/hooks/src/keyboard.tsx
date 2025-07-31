import { useEffect } from 'react';

export const useKeyDown = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', method);
		return () => window.removeEventListener('keydown', method);
	}, [...listeners]);
};

export const useKeyUp = (method, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keyup', method);
		return () => window.removeEventListener('keyup', method);
	}, [...listeners]);
};
