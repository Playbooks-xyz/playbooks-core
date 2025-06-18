import { useState } from 'react';

import { useToast } from 'contexts';
import { capitalize } from 'utils';

export const useQuery = (method, state = false): [method: any, loading: boolean, error: any] => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(state);
	const toast = useToast();

	// Methods
	const onQuery = async (data?) => {
		try {
			setLoading(true);
			await method(data);
		} catch (e) {
			toast.showError(e);
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	return [onQuery, loading, error];
};

export const useAction = (model, method, state = false): [method: any, task: any] => {
	const [task, setTask] = useState({ id: '', name: 'action', running: state });
	const toast = useToast();

	// Methods
	const onAction = async (record?) => {
		try {
			setTask({
				...task,
				id: model.id ? model.id : record?.id,
				running: true,
			});
			await method(record);
		} catch (e) {
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onAction, task];
};

export const useSave = (model, modelName, method): [method: any, task: any] => {
	const [task, setTask] = useState({ id: '', name: 'save', running: false });
	const toast = useToast();

	// Methods
	const onSave = async (record?) => {
		try {
			setTask({ ...task, id: model.id ? model.id : record?.id, running: true });
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} saved!`);
		} catch (e) {
			toast.showError(e);
			console.log(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onSave, task];
};

export const useConfirm = (model, message, method): [method: any, task: any] => {
	const [task, setTask] = useState({ id: '', name: 'save', running: false });
	const toast = useToast();

	// Methods
	const useConfirm = async (record?) => {
		try {
			setTask({ ...task, id: model.id ? model.id : record?.id, running: true });
			const confirmed = window.confirm(message);
			if (!confirmed) return;
			await method(record);
		} catch (e) {
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [useConfirm, task];
};

export const useDelete = (model, modelName, method): [method: any, task: any] => {
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });
	const toast = useToast();

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: record.id ? record.id : model?.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete this ${modelName}?`);
			if (!confirmed) return;
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task];
};

export const useDeletes = (model, modelName, method): [method: any, task: any] => {
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });
	const toast = useToast();

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: model.id ? model.id : record?.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete ${model.length} ${modelName}?`);
			if (!confirmed) return;
			await method(record);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			toast.showError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task];
};

// Usage
// const [onSave, saveTask] = useQuery(async () => {})
