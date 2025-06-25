import React, { Fragment, useEffect, useMemo, useState } from 'react';

import { ErrorToast, InfoToast, SuccessToast } from '@playbooks/molecules/toasts';
import { ToastWrapper } from '@playbooks/ui/toasts';
import { formatError } from '@playbooks/utils/errors';
import { getUUID, isEmpty } from '@playbooks/utils/helpers';
import { logger } from '@playbooks/utils/logger';

export type ToastContextProps = {
	showSuccess: (title, message) => any;
	showInfo: (title, message) => any;
	showError: (v) => any;
};

export const ToastContext = React.createContext<ToastContextProps>(null);

export const ToastProvider = ({ contexts, children }) => {
	const [toasts, setToasts] = useState([]);
	const router = contexts.useRouter();

	// Hooks
	useEffect(() => {
		return () => setToasts([]);
	}, [router.pathname]);

	useEffect(() => {
		if (!isEmpty) logger.log('toasts: ', toasts);
	}, [toasts]);

	// Methods
	const showSuccess = (title: string, message?: string) => {
		setToasts(toasts => toasts.concat({ id: getUUID(), type: 'success', status: 200, title, message }));
	};

	const showInfo = (title: string, message?: string) => {
		setToasts(toasts => toasts.concat({ id: getUUID(), type: 'info', status: 'Info', title, message }));
	};

	const showError = (error: { type?: string; status?: string; title?: string; message?: string }) => {
		setToasts(toasts => toasts.concat({ id: getUUID(), type: 'error', ...formatError(error) }));
	};

	const onRemove = toast => {
		setToasts(toasts => toasts.filter(v => v.id !== toast.id));
	};

	const memoizedValues = useMemo(() => {
		return { showSuccess, showInfo, showError };
	}, []);

	// Render
	return (
		<ToastContext.Provider value={memoizedValues}>
			<ToastWrapper className={toasts.length > 0 ? '' : 'hidden'}>
				{toasts.map((t, i) => (
					<Fragment key={i}>
						{t.type === 'success' && <SuccessToast toast={t} onRemove={onRemove} />}
						{t.type === 'info' && <InfoToast toast={t} onRemove={onRemove} />}
						{t.type === 'error' && <ErrorToast toast={t} onRemove={onRemove} />}
					</Fragment>
				))}
			</ToastWrapper>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	return React.useContext(ToastContext);
};
