import { useEffect, useState } from 'react';

import { Toast, ToastBody, ToastHeader, ToastIcon, ToastText, ToastTitle } from '@playbooks/ui/toasts';

const ErrorToast = ({ toast, onRemove }) => {
	const [open, setOpen] = useState(true);

	// Hooks
	useEffect(() => {
		setTimeout(() => setOpen(false), 3000);
	}, []);

	// Render
	return (
		<Toast open={open} setOpen={setOpen} onRemove={() => onRemove(toast)}>
			<ToastHeader onRemove={() => onRemove(toast)}>
				<ToastIcon icon='circle-xmark' color='text-red-500 dark:text-red-500' />
				<ToastTitle>{toast.title}</ToastTitle>
			</ToastHeader>
			{toast.message && (
				<ToastBody>
					<ToastText>{toast.message}</ToastText>
				</ToastBody>
			)}
		</Toast>
	);
};

export { ErrorToast };
