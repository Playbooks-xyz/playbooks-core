import pluralize from 'pluralize';
import uniqid from 'uniqid';

export const env = process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV;

export const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const getSeconds = () => {
	return Math.floor(Date.now() / 1000);
};

export const getRandomInt = (max = 1000000) => {
	return Math.floor(Math.random() * max);
};

export const getUUID = (v = 36) => {
	return uniqid();
};

export const getPlural = value => {
	return pluralize.plural(value);
};

export const getSingular = value => {
	return pluralize.singular(value);
};

export const formatUUID = (url, index = 2) => {
	const paths = url.split('?')[0].split('#')[0].split('/');
	const name = paths[index];
	return name?.toLowerCase();
};

export const mapChildren = (data, key) => {
	const formattedData = [];
	data.map(record => {
		const value = record[key];
		if (isArray(value)) {
			const childData = mapChildren(value, key);
			childData.map(v => formattedData.push(v));
		}
		return formattedData.push(record);
	});
	return formattedData;
};

export const chunkArray = (array, chunkSize) => {
	let index = 0;
	const chunks = [];
	while (index < array.length) {
		const chunk = array.slice(index, index + chunkSize);
		index += chunkSize;
		chunks.push(chunk);
	}
	return chunks;
};

export const shuffleArray = array => {
	let randomIndex;
	let currentIndex = array.length;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
};

export const listBuilder = (count = 1) => {
	return [...new Array(count)].map((v, i) => i);
};

export const stripHtmlEntities = (data = '') => {
	return data.replace(/(<([^>]+)>)/gi, '');
};

export const isArray = data => {
	return Array.isArray(data);
};

export const isDate = data => {
	return isObject(data) && typeof data.getMonth === 'function';
};

export const isFunction = data => {
	return data ? typeof data === 'function' : false;
};

export const isObject = data => {
	return data !== null && data && typeof data === 'object';
};

export const isString = data => {
	return typeof data === 'string';
};

export const isEmpty = data => {
	if (data === null || data === undefined || data === 'undefined') return true;
	if (isArray(data)) return data.length === 0 ? true : false;
	if (isObject(data)) return Object.keys(data).length === 0 ? true : false;
	return data.length === 0 ? true : false;
};

// Docs
//
