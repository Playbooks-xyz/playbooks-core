import { useState } from 'react';

import { capitalize } from '@playbooks/utils/transforms';
import { useHooks } from 'src/context';

export const useInit = (method): [method: any, loading: boolean, error: any] => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const { toast } = useHooks();

	// Methods
	const onQuery = async (data?) => {
		try {
			setLoading(true);
			await method(data);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setLoading(false);
		}
	};

	return [onQuery, loading, error];
};

export const useQuery = (method): [method: any, loading: boolean, error: any] => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { toast } = useHooks();

	// Methods
	const onQuery = async (data?) => {
		try {
			setLoading(true);
			await method(data);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setLoading(false);
		}
	};

	return [onQuery, loading, error];
};

export const useAction = (model, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'action', running: false });
	const { toast } = useHooks();

	// Methods
	const onAction = async (record?) => {
		try {
			setTask({ ...task, id: record?.id || model?.id, running: true });
			await method(record);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onAction, task, error];
};

export const useConfirm = (model, message, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'save', running: false });
	const { toast } = useHooks();

	// Methods
	const useConfirm = async (record?) => {
		try {
			setTask({ ...task, id: record?.id || model?.id, running: true });
			const confirmed = window.confirm(message);
			if (!confirmed) return;
			await method(record);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [useConfirm, task, error];
};

export const useSave = (model, modelName, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'save', running: false });
	const { toast } = useHooks();

	// Methods
	const onSave = async (record?) => {
		try {
			setTask({ ...task, id: record?.id || model?.id, running: true });
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} saved!`);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onSave, task, error];
};

export const useDelete = (model, modelName, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });
	const { toast } = useHooks();

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: record?.id || model?.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete this ${modelName}?`);
			if (!confirmed) return;
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task, error];
};

export const useDeletes = (model, modelName, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });
	const { toast } = useHooks();

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: record?.id || model?.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete ${model.length} ${modelName}?`);
			if (!confirmed) return;
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			setError(e);
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task, error];
};

// Usage
// const [onSave, saveTask , error] = useQuery(async () => {})
