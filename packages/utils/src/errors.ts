import { isArray } from 'src/helpers';
// import * as logger from 'utils/logger';

export const formatErrors = (errors = []) => {
	return {
		status: errors[0].status,
		title: errors[0].name || errors[0].title,
		message: JSON.stringify(errors.map(e => formattedError(e))),
	};
};

export const formatError = error => {
	// logger.error('error: ', error);
	return isArray(error) ? formattedError(error[0]) : formattedError(error);
};

// Error Types
export const formattedError = e => {
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
