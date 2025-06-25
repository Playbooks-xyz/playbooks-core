import bytes from 'bytes';

export const computeBytes = (data, unit = 'kb') => {
	return bytes.format(data, { unit });
};

export const displayBytes = (data, unit = 'kb') => {
	return bytes.format(data, { unit });
};
