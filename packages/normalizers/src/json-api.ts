import { isArray, isObject } from '@playbooks/utils/helpers';
import { dashToCamel, dashToUnderscore } from '@playbooks/utils/transforms';

// Helpers
const attrs = {
	type: { normalize: false, serialize: false },
	updatedAt: { serialize: false },
	createdAt: { serialize: false },
};

const relationships = {};

// Helpers
const formatLookup = type => {
	switch (type) {
		case 'camel':
			return dashToCamel;
		case 'underscore':
			return dashToUnderscore;
	}
};

// Methods
const checkAttrs = key => {
	const keys = Object.keys(attrs);
	return keys.includes(key) ? attrs[key] : {};
};

const checkRelationships = key => {
	const keys = Object.keys(relationships);
	return keys.includes(key) ? relationships[key] : {};
};

// normalize
export const jsonApiNormalizeArray = (data = [], included = [], meta = {}): { data: any[]; meta: any } => {
	const normalizedArray = { data: [], meta: {} };
	data.map(v => normalizedArray.data.push(jsonApiNormalizeCompound(v, included)));
	normalizedArray.meta = jsonApiNormalizeMeta(meta);
	return normalizedArray;
};

export const jsonApiNormalize = (data: any = {}, included: any[] = []): { data: any } => {
	const normalizedData = { data: {} };
	normalizedData.data = jsonApiNormalizeCompound(data, included);
	return normalizedData;
};

export const jsonApiNormalizeCompound = (data: any = {}, included: any[] = []) => {
	const normalizedAttrs = {};
	Object.keys(data).map(key => {
		switch (key) {
			case 'attributes':
				return Object.assign(normalizedAttrs, jsonApiNormalizeAttrs(data[key]));

			case 'relationships':
				return Object.assign(normalizedAttrs, jsonApiNormalizeRelationships(data[key], included));

			default:
				return (normalizedAttrs[dashToCamel(key)] = data[key]);
		}
	});
	return normalizedAttrs;
};

export const jsonApiNormalizeAttrs = (data: any = {}) => {
	const formatter = formatLookup('camel');
	const normalizedAttrs = {};
	Object.keys(data).map(key => {
		if (checkAttrs(key).normalize === false) return;

		if (isArray(data[key]) && isObject(data[key][0])) {
			return (normalizedAttrs[formatter(key)] = data[key].map(jsonApiNormalizeAttrs));
		}
		if (isArray(data[key])) {
			return (normalizedAttrs[formatter(key)] = data[key]);
		}
		if (isObject(data[key])) {
			return (normalizedAttrs[formatter(key)] = jsonApiNormalizeAttrs(data[key]));
		}
		return (normalizedAttrs[formatter(key)] = data[key]);
	});
	return normalizedAttrs;
};

export const jsonApiNormalizeRelationships = (data: any[] = [], included) => {
	const normalizedAttrs = {};

	Object.keys(data).map(key => {
		const relationship = data[key].data;

		if (isArray(relationship)) {
			return (normalizedAttrs[dashToCamel(key)] = relationship.map(v => jsonApiNormalizeRelationship(v, included)));
		}
		if (isObject(relationship)) {
			return (normalizedAttrs[dashToCamel(key)] = jsonApiNormalizeRelationship(relationship, included));
		}
	});
	return normalizedAttrs;
};

export const jsonApiNormalizeRelationship = (data, included = []) => {
	const relationship = included.find(v => v.type === data.type && v.id === data.id);
	return jsonApiNormalizeAttrs(relationship);
};

export const jsonApiNormalizeMeta = (meta = {}) => {
	const normalizedMeta = {};
	Object.keys(meta).map(key => (normalizedMeta[dashToCamel(key)] = parseInt(meta[key])));
	return normalizedMeta;
};

// Docs
// https://jsonapi-resources.com/
