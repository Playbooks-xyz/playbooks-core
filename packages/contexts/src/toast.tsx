import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { ErrorToast, InfoToast, SuccessToast } from '@playbooks/molecules/toasts';
import { ToastWrapper } from '@playbooks/ui/toasts';
import { formatError, getUUID, isEmpty, logger } from '@playbooks/utils';

export interface ToastProps {
	showSuccess: (title, message) => any;
	showInfo: (title, message) => any;
	showError: (v) => any;
}

const ToastContext = React.createContext<ToastProps>(null);

interface iError {
	type?: string;
	status?: number;
	title?: string;
	message?: string;
}

const ToastProvider = ({ children }) => {
	const [toasts, setToasts] = useState([]);
	const router = useRouter();

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

	const showError = (error: iError) => {
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

const useToast = () => {
	return React.useContext(ToastContext);
};

export { ToastProvider, useToast };
