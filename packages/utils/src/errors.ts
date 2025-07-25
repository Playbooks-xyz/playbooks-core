import HttpError from 'http-errors';
import { isArray, isEmpty } from 'src/helpers';
// import * as logger from 'utils/logger';

export const normalizeError = error => {
	// logger.warn('error: ', error);
	const e = isArray(error) ? error[0] : error;
	switch (e.status) {
		case 401:
			return { status: e.status, title: e.name || e.title, message: e.detail || e.message };

		case 403:
			return { status: e.status, title: e.name || e.title, message: e.detail || e.message };

		case 404:
			return { status: e.status, title: e.name || e.title, message: e.detail || e.message };

		case 422:
			return { status: e.status, title: e.name || e.title, message: e.detail || e.message };

		case 429:
			return { status: e.status, title: e.name || e.title, message: e.detail || e.message };

		default:
			return { status: 500, title: e.name || e.title, message: e.detail || e.message };
	}
};

export const serializeError = error => {
	// logger.warn('formatError: ', error);
	const code = error.status || error.statusCode || error.code || 500;
	const data = error.data;
	const message = error.message;
	const source = error.stack || error.framework || 'Stack unavailable';
	switch (code) {
		case 400:
			return error.data
				? objectionError({ code, data, message, source })
				: jsonApiError(error.code, 'Unprocessable entity', message, source);

		case 401:
			return jsonApiError(code, 'Not authorized', message, source);

		case 403:
			return jsonApiError(code, 'Not authorized', message, source);

		case 404:
			return jsonApiError(code, 'Not found', message, source);

		case 422:
			return jsonApiError(code, 'Unprocessable entity', message, source);

		case 429:
			return jsonApiError(code, 'Too many requests', message, source);

		default:
			return jsonApiError(code, 'Server error', message, source);
	}
};

export const objectionError = e => {
	const messages = [];
	if (!isEmpty(e.data)) {
		Object.keys(e.data).forEach(key => {
			messages.push(`${key}: ${e.data[key][0].message}`);
		});
	} else {
		messages.push(e.message);
	}
	return jsonApiError(e.code, 'Validation Failed', messages[0], e.source);
};

export const jsonApiError = (status, title, detail, source) => {
	return { status, title, detail, source };
};

export const httpError = HttpError;

// Docs
// https://github.com/SeyZ/jsonapi-serializer#error-serialization
