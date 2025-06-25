import React, { useEffect, useState } from 'react';

import { logger } from '@playbooks/utils/logger';

type ThemeProps = {
	preference: 'light' | 'dark' | 'system';
	setPreference: any;
	isDark: boolean;
	loaded: boolean;
};

const ThemeContext = React.createContext<ThemeProps>(null);

const ThemeProvider = ({ contexts, children }) => {
	const storage = contexts?.useStorage();
	const [preference, setPreference] = useState(storage.storage.preference || '');
	const [theme, setTheme] = useState(storage.storage.theme || '');
	const [loaded, setLoaded] = useState(false);

	// Computed
	const isDark = loaded && theme === 'dark';

	// Hooks
	useEffect(() => {
		setLoaded(true);
	}, []);

	useEffect(() => {
		changePreference(preference);
	}, [preference]);

	useEffect(() => {
		if (loaded) logger.debug('themeContext:', { theme });
	}, [loaded, theme]);

	// Methods
	const changePreference = preference => {
		storage.storeValue('preference', preference);
		storage.storeCookie('preference', preference);
		if (preference === 'system') {
			const systemPreference = window.matchMedia('(prefers-color-scheme:dark)').matches;
			changeTheme(systemPreference ? 'dark' : 'light');
		} else {
			changeTheme(preference);
		}
	};

	const changeTheme = theme => {
		storage.storeValue('theme', theme);
		storage.storeCookie('theme', theme);
		theme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
		setTheme(theme);
	};

	return (
		<ThemeContext.Provider value={{ preference, setPreference, isDark, loaded }}>{children}</ThemeContext.Provider>
	);
};

const useTheme = () => {
	return React.useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
