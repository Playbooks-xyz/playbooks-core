import { isArray, isObject } from '@playbooks/utils/helpers';
import { dashToCamel, dashToUnderscore } from '@playbooks/utils/transforms';

// Helpers
const formatLookup = type => {
	switch (type) {
		case 'camel':
			return dashToCamel;
		case 'underscore':
			return dashToUnderscore;
	}
};

// normalize
export const normalizeArray = (data = [], meta = {}, attrs = [], type = 'camel'): any => {
	const normalizedArray = { data: [], meta: {} };
	data.map(v => normalizedArray.data.push(normalizeAttrs(v, attrs, type)));
	normalizedArray.meta = normalizeMeta(meta);
	return normalizedArray;
};

export const normalize = (data, attrs = [], type = 'camel'): { data: any } => {
	const normalizedData = { data: {} };
	Object.assign(normalizedData.data, normalizeAttrs(data, attrs, type));
	return normalizedData;
};

export const normalizeAttrs = (data, attrs = [], type) => {
	const formatter = formatLookup(type);
	const normalizedAttrs = {};
	Object.keys(data).map(key => {
		if (attrs.includes(key)) return;
		if (isArray(data[key])) {
			return (normalizedAttrs[formatter(key)] = data[key].map(v => normalizeAttrs(v, attrs, type)));
		}
		if (isObject(data[key])) {
			return (normalizedAttrs[formatter(key)] = normalizeAttrs(data[key], attrs, type));
		}
		return (normalizedAttrs[formatter(key)] = data[key]);
	});
	return normalizedAttrs;
};

export const normalizeMeta = meta => {
	const formatter = formatLookup('camel');
	const normalizedMeta = {};
	Object.keys(meta).map(key => (normalizedMeta[formatter(key)] = parseInt(meta[key])));
	return normalizedMeta;
};

// Docs
//
