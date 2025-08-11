import React, { useEffect, useState } from 'react';

import { useLocalStorage } from '@playbooks/hooks/window';
import { logger } from '@playbooks/utils/logger';
import * as LocalStorage from 'local-storage';

type SessionContextProps = {
	user?: any;
	loading: boolean;
	isAuthenticated: () => boolean;
	rootApi: string;
	rootLink: string;
	onAuth: any;
	onUpdate: any;
	onRefresh: any;
	onLogout: any;
	loaded?: any;
};

const params = {
	include: ['location', 'teams.[location]', 'setup', 'settings', 'subscription(usage).[card,price, product]'],
};

const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY;

const SessionContext = React.createContext<SessionContextProps>(null);

const SessionProvider = ({ ssr, contexts, children }) => {
	const [user, setUser] = useState<any>(ssr?.session?.data || {});
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const router = contexts.useRouter();
	const storage = contexts.useStorage();
	const store = contexts.useStore();
	const toast = contexts.useToast();

	// Computed
	const rootApi = `/session`;
	const rootLink = `/${user.uuid}`;
	const isAuthenticated = () => (user.id ? true : false);

	// Hooks
	useEffect(() => {
		const token = storage.getValue('token');
		token ? fetchData() : onClear();
	}, []);

	useEffect(() => {
		if (user.id) logger.debug('sessionContext: ', user);
	}, [user]);

	useLocalStorage(onApply, [user.id]);

	// Actions
	const fetchData = async () => {
		try {
			setLoading(true);
			const token = storage.getValue('token');
			const response = await store.queryRecord({ url: `/session`, params });
			storage.storeValues({ session: response.data });
			storage.storeCookie('token', token);
			setUser(response.data);
		} catch (e) {
			onLogout();
		} finally {
			setLoading(false);
			setLoaded(true);
		}
	};

	// Functions
	function onApply(e) {
		if (!e.key?.includes(`${storageKey}.session`)) return;
		const session = LocalStorage.get(`${storageKey}.session`) as any;
		if (session?.id && session.id !== user.id) return setUser(session);
		if (!session?.id && !user.id) return onLogout(true);
	}

	// Methods
	const onAuth = async user => {
		const headers = { Authorization: user.token?.token };
		const response = await store.queryRecord({ url: `/session`, headers, params });
		storage.storeValues({ type: 'User', session: response.data, token: user.token.token });
		storage.storeCookie('token', user.token.token);
		setUser(response.data);
		return response.data;
	};

	const onUpdate = data => {
		setUser({ ...user, ...data });
	};

	const onRefresh = () => fetchData();

	const onClear = () => {
		storage.onClear();
		setLoaded(true);
	};

	const onLogout = (silent = false) => {
		if (silent) {
			setUser({});
			logger.debug('sessionContext: ', {});
			return storage.onClear();
		}
		setUser({});
		storage.onClear();
		toast.showSuccess(200, `You've been logged out.`);
		logger.debug('sessionContext: ', {});
		router.push('/');
	};

	// Render
	return (
		<SessionContext.Provider
			value={{
				user,
				loading,
				isAuthenticated,
				rootApi,
				rootLink,
				onAuth,
				onUpdate,
				onRefresh,
				onLogout,
				loaded,
			}}>
			{children}
		</SessionContext.Provider>
	);
};

const useSession = () => {
	return React.useContext(SessionContext);
};

export { SessionProvider, useSession };

// Docs
// https://www.npmjs.com/package/local-storage
