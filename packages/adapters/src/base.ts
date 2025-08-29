import { timeElapsed } from '@playbooks/utils/dates';
import { env } from '@playbooks/utils/helpers';
import { isArray, isEmpty, isObject, sleep } from '@playbooks/utils/helpers';
import { logger } from '@playbooks/utils/logger';
import fetch from 'cross-fetch';
import Https from 'https';

interface BaseAdapter {
	domain: string;
	user?: string;
	password?: string;
}

export type requestProps = {
	method?: string;
	url?: string;
	headers?: any;
	params?: any;
	data?: any | any[];
};

class BaseAdapter {
	constructor({ domain }) {
		this.domain = domain;
	}

	// Private
	async client(url, options) {
		const response = await fetch(url, options);
		if (!response.ok) {
			const data = await response.json();
			throw data.errors;
		}
		return await response.json();
	}

	formatUrl(url: string, params: any): URL {
		const formattedUrl = new URL(this.domain + url);
		Object.keys(params).map(key => {
			const value = params[key];
			if (isEmpty(value)) return;
			if (isArray(value)) return formattedUrl.searchParams.append(key, value.join(','));
			if (isObject(value)) return Object.keys(value).map(key => formattedUrl.searchParams.append(key, value[key]));
			return formattedUrl.searchParams.append(key, value);
		});
		return formattedUrl;
	}

	formatOptions(method, headers, data?) {
		const formattedOptions = {};
		formattedOptions['method'] = method;
		formattedOptions['headers'] = { ['Content-Type']: 'application/json', ...headers };
		formattedOptions['body'] = JSON.stringify(data);
		if (env === 'development') formattedOptions['agent'] = new Https.Agent({ rejectUnauthorized: false });
		return formattedOptions;
	}

	formatRequest({ method = 'GET', url, headers, params, data }) {
		const date = new Date();
		const formattedUrl = this.formatUrl(url, params);
		const formattedOptions = this.formatOptions(method, headers, data);
		return { date, formattedUrl, formattedOptions };
	}

	async request({ method = 'GET', url, headers, params, data }: requestProps) {
		const { date, formattedUrl, formattedOptions } = this.formatRequest({ method, url, headers, params, data });
		const response = await this.client(formattedUrl, formattedOptions);
		return [timeElapsed(date), response];
	}

	async apiRequest({ method = 'GET', url, headers, params, data }: requestProps) {
		logger.info(`apiRequest: `, { method, url, params, data });
		const [date, response] = await this.request({ method, url, headers, params, data });
		logger.info(`apiResponse (${date}): `, { method, url, params, response });
		return response;
	}

	async storeRequest({ method = 'GET', url, headers, params, data }: requestProps) {
		if (env === 'development') await sleep(300);
		logger.info(`storeRequest: `, { method, url, params, data });
		const [date, response] = await this.request({ method, url, headers, params, data });
		logger.info(`storeResponse (${date}): `, { method, url, params, response });
		return response;
	}

	async downloadRequest({ method = 'GET', url, headers, params, data }: requestProps) {
		if (env === 'development') await sleep(300);
		logger.info(`downloadRequest: `, { method, url, params, data });
		const { date, formattedUrl, formattedOptions } = await this.formatRequest({ method, url, headers, params, data });
		const response = await fetch(formattedUrl, formattedOptions);
		logger.info(`downloadResponse (${date}): `, { method, url, params, response });
		if (!response.ok) {
			const data = await response.json();
			throw data.errors;
		}
		return await response;
	}
}

export { BaseAdapter };

// Docs:
// https://github.github.io/fetch/
// https://www.npmjs.com/package/cross-fetch#usage
// https://developer.mozilla.org/en-US/docs/Web/API/URL
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
