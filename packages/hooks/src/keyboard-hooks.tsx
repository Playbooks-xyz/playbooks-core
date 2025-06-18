import { useEffect } from 'react';

export const useKeyPress = (onKeyPress, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', onKeyPress);
		return () => window.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};

export const useElementKeyPress = (element, onKeyPress, listeners) => {
	useEffect(() => {
		if (element) element.addEventListener('keydown', onKeyPress);
		return () => element && element.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};
