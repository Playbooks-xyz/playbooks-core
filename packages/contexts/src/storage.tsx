import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

import { logger } from '@playbooks/utils/logger';
import * as LocalStorage from 'local-storage';

type StorageContextProps = {
	storage: any;
	getValue: any;
	storeValue: any;
	storeValues: any;
	removeValue: any;
	removeValues: any;
	getCookie: any;
	storeCookie: any;
	storeCookies: any;
	removeCookie: any;
	removeCookies: any;
	onClear: any;
	loaded: boolean;
};

type StorageProps = {
	type?: string;
	session?: any;
	account?: any;
	theme?: 'light' | 'dark';
	preference?: 'light' | 'dark' | 'system';
	domain?: string;
	redirect?: string;
	search?: any[];
	token?: any;
	tempAccount?: any;
	tempToken?: any;
};

const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY;

const StorageContext = React.createContext<StorageContextProps>(null);

const StorageProvider = ({ contexts, children }) => {
	const [storage, setStorage] = useState<StorageProps>({
		type: LocalStorage.get(`${storageKey}.type`) || 'User',
		session: LocalStorage.get(`${storageKey}.session`) || {},
		account: LocalStorage.get(`${storageKey}.account`) || {},
		preference: LocalStorage.get(`${storageKey}.preference`) || 'system',
		theme: LocalStorage.get(`${storageKey}.theme`) || 'dark',
		redirect: LocalStorage.get(`${storageKey}.redirect`) || '',
		search: LocalStorage.get(`${storageKey}.search`) || [],
		token: LocalStorage.get(`${storageKey}.token`) || {},
		tempAccount: LocalStorage.get(`${storageKey}.tempAccount`) || {},
		tempToken: LocalStorage.get(`${storageKey}.tempToken`) || {},
	});
	const [loaded, setLoaded] = useState(false);
	const router = contexts.useRouter();
	const cookies = new Cookies();

	// Hooks
	useEffect(() => {
		setLoaded(true);
	}, []);

	useEffect(() => {
		const routes = ['/auth/login', '/auth/register', '/auth/forgot', '/auth/reset'];
		if (storage.redirect && !routes.includes(router.pathname)) removeValue(`redirect`);
	}, [router.pathname]);

	useEffect(() => {
		if (loaded) logger.debug('storageContext: ', storage);
	}, [storage]);

	// Methods
	const getValue = key => {
		return storage[key] ? LocalStorage.get(`${storageKey}.${key}`) : storage[key];
	};

	const storeValue = (key, value) => {
		LocalStorage.set(`${storageKey}.${key}`, value);
		setStorage({ ...storage, [key]: value });
	};

	const storeValues = data => {
		Object.keys(data).map(key => LocalStorage.set(`${storageKey}.${key}`, data[key]));
		setStorage({ ...storage, ...data });
	};

	const removeValue = key => {
		setStorage({ ...storage, [key]: null });
		LocalStorage.remove(`${storageKey}.${key}`);
	};

	const removeValues = keys => {
		return keys.map(key => removeValue(key));
	};

	// Cookies
	const getCookie = key => {
		return cookies.get(key);
	};

	const storeCookie = (key, value) => {
		return cookies.set(key, value, { path: '/', secure: true });
	};

	const storeCookies = data => {
		return Object.keys(data).map(key => storeCookie(key, data[key]));
	};

	const removeCookie = key => {
		return cookies.remove(key);
	};

	const removeCookies = keys => {
		return keys.map(key => removeCookie(key));
	};

	// Other
	const onClear = () => {
		removeCookies(['type', 'account', 'preference', 'token']);
		storeValues({
			type: '',
			account: {},
			preference: 'system',
			theme: 'dark',
			redirect: '',
			search: [],
			session: {},
			token: {},
			tempAccount: {},
			tempToken: {},
		});
		LocalStorage.clear();
	};

	// Render
	return (
		<StorageContext.Provider
			value={{
				storage,
				getValue,
				getCookie,
				storeCookie,
				storeCookies,
				storeValue,
				storeValues,
				removeValue,
				removeValues,
				removeCookie,
				removeCookies,
				onClear,
				loaded,
			}}>
			{children}
		</StorageContext.Provider>
	);
};

const useStorage = () => {
	return React.useContext(StorageContext);
};

export { StorageProvider, useStorage };

// Docs:
// https://www.npmjs.com/package/local-storage
// https://www.npmjs.com/package/react-cookie
