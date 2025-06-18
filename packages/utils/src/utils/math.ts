export const avg = (array = []) => {
	return array.reduce((a, b) => a + b, 0) / array.length;
};

export const max = (array = []) => {
	return Math.max(...array);
};

export const min = (array = []) => {
	return Math.min(...array);
};

export const sum = (array = []) => {
	return array.reduce((a, b) => a + b, 0);
};
