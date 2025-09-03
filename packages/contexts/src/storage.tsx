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
	account?: any;
	session?: any;
	theme?: 'light' | 'dark';
	preference?: 'light' | 'dark' | 'system';
	domain?: string;
	redirect?: string;
	search?: any[];
};

const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY;

const StorageContext = React.createContext<StorageContextProps>(null);

const StorageProvider = ({ contexts, children }) => {
	const cookies = new Cookies();
	const [storage, setStorage] = useState<StorageProps>({
		type: LocalStorage.get(`${storageKey}.type`) || 'User',
		account: LocalStorage.get(`${storageKey}.account`) || {},
		session: LocalStorage.get(`${storageKey}.session`) || {},
		preference: LocalStorage.get(`${storageKey}.preference`) || cookies.get('preference') || 'system',
		theme: LocalStorage.get(`${storageKey}.theme`) || cookies.get('theme') || 'dark',
		redirect: LocalStorage.get(`${storageKey}.redirect`) || '',
		search: LocalStorage.get(`${storageKey}.search`) || [],
	});
	const [loaded, setLoaded] = useState(false);
	const router = contexts.useRouter();

	// Hooks
	useEffect(() => {
		storeValues(storage);
		setLoaded(true);
	}, []);

	useEffect(() => {
		const routes = ['/auth/login', '/auth/register', '/auth/forgot', '/auth/reset'];
		if (storage.redirect && !routes.includes(router.pathname)) removeValue(`redirect`);
	}, [router.pathname]);

	useEffect(() => {
		logger.debug('storageContext: ', storage);
	}, [storage]);

	// Methods
	const getValue = key => {
		return storage[key] ? storage[key] : LocalStorage.get(`${storageKey}.${key}`);
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
		return cookies.set(key, value, {
			domain: process.env.NEXT_PUBLIC_DOMAIN,
			path: '/',
			secure: true,
		});
	};

	const storeCookies = data => {
		return Object.keys(data).map(key => storeCookie(key, data[key]));
	};

	const removeCookie = key => {
		return cookies.remove(key, { domain: process.env.NEXT_PUBLIC_DOMAIN, path: '/', secure: true });
	};

	const removeCookies = keys => {
		return keys.map(key => removeCookie(key));
	};

	// Other
	const onClear = () => {
		LocalStorage.clear();
		removeCookies(['type', 'account', 'token']);
		storeValues({
			type: '',
			account: {},
			session: {},
			preference: 'system',
			theme: 'dark',
			redirect: '',
			search: [],
		});
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
