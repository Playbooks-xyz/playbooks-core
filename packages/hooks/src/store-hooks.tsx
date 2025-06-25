import { useState } from 'react';

export const useAction = (model, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'action', running: false });

	// Methods
	const onAction = async (record?) => {
		try {
			setTask({ ...task, id: record?.id ? record.id : model?.id, running: true });
			await method(record);
		} catch (e) {
			setError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onAction, task, error];
};

export const useConfirm = (model, message, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'save', running: false });

	// Methods
	const useConfirm = async (record?) => {
		try {
			setTask({ ...task, id: record?.id ? record.id : model.id, running: true });
			const confirmed = window.confirm(message);
			if (confirmed) await method(record);
		} catch (e) {
			setError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [useConfirm, task, error];
};

export const useDelete = (model, modelName, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: record.id ? record.id : model?.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete this ${modelName}?`);
			if (confirmed) await method(record);
		} catch (e) {
			setError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task, error];
};

export const useDeletes = (model, modelName, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'delete', running: false });

	// Methods
	const onDelete = async (record?) => {
		try {
			setTask({ ...task, id: record?.id ? record.id : model.id, running: true });
			const confirmed = window.confirm(`Are you sure you want to delete ${model.length} ${modelName}?`);
			if (confirmed) await method(record);
		} catch (e) {
			setError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onDelete, task, error];
};

export const useInit = (method): [method: any, loading: boolean, error: any] => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	// Methods
	const onQuery = async (data?) => {
		try {
			setLoading(true);
			await method(data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	return [onQuery, loading, error];
};

export const useQuery = (method): [method: any, loading: boolean, error: any] => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// Methods
	const onQuery = async (data?) => {
		try {
			setLoading(true);
			await method(data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	return [onQuery, loading, error];
};

export const useSave = (model, method): [method: any, task: any, error: any] => {
	const [error, setError] = useState(null);
	const [task, setTask] = useState({ id: '', name: 'save', running: false });

	// Methods
	const onSave = async (record?) => {
		try {
			setTask({ ...task, id: record?.id ? record.id : model.id, running: true });
			await method(record);
		} catch (e) {
			setError(e);
		} finally {
			setTask({ ...task, id: null, running: false });
		}
	};

	return [onSave, task, error];
};

// Usage
// const [onSave, saveTask , error] = useQuery(async () => {})
