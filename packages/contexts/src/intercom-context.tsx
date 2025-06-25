import React, { useEffect, useState } from 'react';

import Intercom from '@intercom/messenger-js-sdk';

type IntercomProps = {
	activate: any;
	toggle: any;
	show: any;
	hide: any;
	shutdown: any;
	loaded: boolean;
};

const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

const IntercomContext = React.createContext<IntercomProps>(null);

const IntercomProvider = ({ contexts, children }) => {
	const [active, setActive] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const session = contexts?.useSession();

	// Hooks
	useEffect(() => {
		activate();
	}, []);

	useEffect(() => {
		if (session?.user?.id) update();
	}, [session?.user?.id]);

	// Methods
	const activate = () => {
		Intercom({ app_id: INTERCOM_APP_ID, hide_default_launcher: true });
		setLoaded(true);
	};

	const update = () => {
		Intercom({
			name: session.user?.name,
			email: session.user?.email,
			app_id: INTERCOM_APP_ID,
			hide_default_launcher: active ? false : true,
		});
	};

	const toggle = () => {
		active ? shutdown() : show();
	};

	const show = () => {
		if (window.Intercom) window.Intercom('show');
	};

	const hide = () => {
		if (window.Intercom) window.Intercom('hide');
	};

	const shutdown = () => {
		if (window.Intercom) window.Intercom('shutdown');
		setActive(false);
	};

	// Render
	return (
		<IntercomContext.Provider value={{ activate, toggle, show, hide, shutdown, loaded }}>
			{children}
		</IntercomContext.Provider>
	);
};

const useIntercom = () => {
	return React.useContext(IntercomContext);
};

export { IntercomProvider, useIntercom };

// Docs
// https://developers.intercom.com/installing-intercom/web
// https://developers.intercom.com/installing-intercom/web/installation
// https://developers.intercom.com/installing-intercom/web/methods
// https://developers.intercom.com/installing-intercom/web/attributes-objects
