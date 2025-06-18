import { useEffect } from 'react';

export const useMouseDown = (onMouseDown, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mousedown', onMouseDown);
		return () => window.removeEventListener('mousedown', onMouseDown);
	}, [...listeners]);
};

export const useMouseUp = (onMouseUp, listeners) => {
	// Hooks
	useEffect(() => {
		window.addEventListener('mouseup', onMouseUp);
		return () => window.removeEventListener('mouseup', onMouseUp);
	}, [...listeners]);
};
