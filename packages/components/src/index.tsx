import { useEffect, useState } from 'react';

import Accounting from 'accounting';

export const isEven = (n: number): boolean => {
	return n % 2 === 0;
};

export const isOdd = (n: number): boolean => {
	return n % 2 !== 0;
};

export const toCurrency = (value = 0, precision = 2) => {
	return Accounting.formatMoney(value, '$', precision);
};

export const toNumber = (value = 0, decimal = 0) => {
	return Accounting.formatNumber(value, decimal);
};

export const testState = (data?) => {
	const [value, setValue] = useState(null);

	// Hooks
	useEffect(() => {
		setValue(data);
	}, [data]);

	return value;
};
