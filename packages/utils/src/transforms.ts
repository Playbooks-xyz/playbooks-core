import Accounting from 'accounting';
import { abbreviateNumber } from 'js-abbreviation-number';

export const camelToUnderscore = (data = '') => {
	return data.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export const camelToDash = (data = '') => {
	return data.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const camelToString = (data = '') => {
	return data.replace(/([A-Z])/g, ' $1').toLowerCase();
};

export const dashToCamel = (data = '') => {
	return data.replace(/-([a-z])/g, g => g[1].toUpperCase());
};

export const dashToCapital = (data = '') => {
	return data
		.split('-')
		.map(k => k.replace(k.charAt(0), k.charAt(0).toUpperCase()))
		.join('');
};

export const dashToString = (data = '') => {
	return data.split('-').join(' ').toLowerCase();
};

export const dashToUnderscore = (data = '') => {
	return data.replace(/-([a-z])/g, '_$1').toLowerCase();
};

export const phoneToString = (data = '') => {
	return data ? data.replace(/\D+/g, '') : '';
};

export const capitalize = (data = '') => {
	return data.charAt(0).toUpperCase() + data.slice(1);
};

export const deCapitalize = (data = '') => {
	return data.charAt(0).toLowerCase() + data.slice(1);
};

export const stringToUnderscore = (data = '') => {
	return data.split(' ').join('_').toLowerCase();
};

export const underscoreToString = (data = '') => {
	return data ? data.split('_').join(' ').toLowerCase() : data;
};

export const truncate = (data = '', count = 80, ellipsis = true) => {
	return data ? (data.length >= count && ellipsis ? data.slice(0, count) + '...' : data.slice(0, count)) : null;
};

export const toPhone = (value = '') => {
	if (value.length === 10) {
		return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
	}
	return '--';
};

export const toCurrency = (value, precision = 2) => {
	return Accounting.formatMoney(value, '$', precision);
};

export const toNumber = (value, decimal = 0) => {
	return Accounting.formatNumber(value, decimal);
};

export const toShortNumber = (value = 0, decimal = 1) => {
	return abbreviateNumber(value, decimal);
};

export const toPercent = (value = 0) => {
	return value * 100 + '%';
};

export const toCents = (value = 0) => {
	return value ? parseFloat((value * 100).toFixed(0)) : 0;
};

export const fromCents = (value = 0) => {
	return value ? parseFloat((value / 100).toFixed(2)) : 0;
};
