import { useEffect } from 'react';

export const useKeyDown = (onKeyPress, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keydown', onKeyPress);
		return () => window.removeEventListener('keydown', onKeyPress);
	}, [...listeners]);
};

export const useKeyUp = (onKeyPress, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('keyup', onKeyPress);
		return () => window.removeEventListener('keyup', onKeyPress);
	}, [...listeners]);
};
