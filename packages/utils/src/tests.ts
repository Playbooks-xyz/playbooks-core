export const testHTTPS = data => {
	return /(http(s?)):\/\//i.test(data);
};

export const testNumber = data => {
	return /^[0-9]/.test(data);
};

export const testString = data => {
	return /^[a-zA-Z-]/.test(data);
};
