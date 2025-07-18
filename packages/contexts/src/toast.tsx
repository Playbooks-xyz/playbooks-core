import React, { Fragment, useEffect, useMemo, useState } from 'react';

import { UIProvider } from '@playbooks/ui/context';
import { ToastWrapper } from '@playbooks/ui/toasts';
import { normalizeError } from '@playbooks/utils/errors';
import { getUUID, isEmpty } from '@playbooks/utils/helpers';
import { logger } from '@playbooks/utils/logger';
import { ErrorToast, InfoToast, SuccessToast } from 'src/molecules/toasts';

export type ToastContextProps = {
	showSuccess: (title, message) => any;
	showInfo: (title, message) => any;
	showError: (v) => any;
};

export type ToastProviderProps = {
	components: any;
	contexts?: any;
	fonts?: any[];
	theme?: any;
	children?: any;
};

export const ToastContext = React.createContext<ToastContextProps>(null);

export const ToastProvider = ({ components, contexts, fonts, theme, children }: ToastProviderProps) => {
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
		setToasts(toasts => toasts.concat({ id: getUUID(), type: 'error', ...normalizeError(error) }));
	};

	const onRemove = toast => {
		setToasts(toasts => toasts.filter(v => v.id !== toast.id));
	};

	const memoizedValues = useMemo(() => {
		return { showSuccess, showInfo, showError };
	}, []);

	// Render
	return (
		<UIProvider components={components} contexts={contexts} fonts={fonts} theme={theme}>
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
		</UIProvider>
	);
};

export const useToast = () => {
	return React.useContext(ToastContext);
};
