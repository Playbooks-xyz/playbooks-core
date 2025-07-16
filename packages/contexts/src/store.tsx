import React from 'react';

import { jsonApiNormalize, jsonApiNormalizeArray } from '@playbooks/normalizers';
import { jsonApiSerialize, jsonApiSerializeArray } from '@playbooks/serializers';
import { isArray } from '@playbooks/utils/helpers';

type StoreContextProps = {
	query?: any;
	queryRecord?: any;
	createRecord?: any;
	updateRecord?: any;
	saveRecord?: any;
	saveRecords?: any;
	deleteRecord?: any;
	request?: any;
	download?: any;
};

type StoreProps = {
	method: string;
	url: string;
	headers?: any;
	params?: any;
	data?: any;
};

const StoreContext = React.createContext<StoreContextProps>(null);

const StoreProvider = ({ client, contexts, children }) => {
	const router = contexts.useRouter();
	const storage = contexts.useStorage();

	// Computed
	const computeHeaders = headers => {
		if (!storage.storage.token) return { ...headers };
		const isAdmin = window.location.href?.includes(process.env.NEXT_PUBLIC_ADMIN_DOMAIN);

		const account = storage.storage.account.uuid || '';
		const token = storage.storage.token;
		const tempAccount = storage.storage.tempAccount.uuid || '';
		const tempToken = storage.storage.tempToken;
		return {
			Account: tempAccount && !isAdmin ? tempAccount : account,
			Authorization: tempToken && !isAdmin ? tempToken : token,
			...headers,
		};
	};

	const computeParams = params => {
		const context = params?.context || [];
		const isAdmin = window.location.href?.includes(process.env.NEXT_PUBLIC_ADMIN_DOMAIN);

		if (isAdmin) {
			context.push(`admin`);
			return context.length > 0 ? { ...params, context } : { ...params };
		}
		return context.length > 0 ? { ...params, context } : { ...params };
	};

	// Methods
	const query = async ({ method = 'GET', url, headers, params }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const response = await client.storeRequest({ method, url, headers: formattedHeaders, params: formattedParams });
		return jsonApiNormalizeArray(response.data, response.included, response.meta);
	};

	const queryRecord = async ({ method = 'GET', url, headers, params }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const response = await client.storeRequest({ method, url, headers: formattedHeaders, params: formattedParams });
		return jsonApiNormalize(response.data, response.included);
	};

	const saveRecord = async ({ url, headers, params, data }: StoreProps) => {
		return data.id
			? await updateRecord({ method: 'PUT', url, headers, params, data })
			: await createRecord({ method: 'POST', url, headers, params, data });
	};

	const saveRecords = async ({ method = 'PUT', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const formattedData = jsonApiSerializeArray(data);
		const response = await client.storeRequest({
			method,
			url,
			headers: formattedHeaders,
			params: formattedParams,
			data: formattedData,
		});
		return jsonApiNormalizeArray(response.data, response.included);
	};

	const createRecord = async ({ method = 'POST', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		const response = await client.storeRequest({
			method,
			url,
			headers: formattedHeaders,
			params: formattedParams,
			data: formattedData,
		});
		return jsonApiNormalize(response.data, response.included);
	};

	const updateRecord = async ({ method = 'PUT', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		const response = await client.storeRequest({
			method,
			url,
			headers: formattedHeaders,
			params: formattedParams,
			data: formattedData,
		});
		return jsonApiNormalize(response.data, response.included);
	};

	const deleteRecord = async ({ method = 'DELETE', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		const response = await client.storeRequest({
			method,
			url,
			headers: formattedHeaders,
			params: formattedParams,
			data: formattedData,
		});
		return jsonApiNormalize(response.data, response.included);
	};

	const request = async ({ method = 'GET', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		return await client.apiRequest({ method, url, headers: formattedHeaders, params: formattedParams, data });
	};

	const download = async ({ method = 'GET', url, headers, params, data }: StoreProps) => {
		const formattedHeaders = computeHeaders(headers);
		const formattedParams = computeParams(params);
		const formattedData = isArray(data) ? jsonApiSerializeArray(data) : jsonApiSerialize(data);
		return await client.downloadRequest({
			method,
			url,
			headers: formattedHeaders,
			params: formattedParams,
			data: formattedData,
		});
	};

	// Render
	return (
		<StoreContext.Provider
			value={{
				query,
				queryRecord,
				saveRecord,
				saveRecords,
				createRecord,
				updateRecord,
				deleteRecord,
				request,
				download,
			}}>
			{children}
		</StoreContext.Provider>
	);
};

const useStore = () => {
	return React.useContext(StoreContext);
};

export { StoreProvider, useStore };
