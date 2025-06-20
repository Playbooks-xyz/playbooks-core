import { capitalize } from '@playbooks/utils';
import { useAction, useConfirm, useDelete, useDeletes, useQuery, useSave } from 'src';

export const useActionWrap = (toast, model, method, state?) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useAction(model, formattedMethod, state);
};

export const useConfirmWrap = (toast, model, message, method) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useConfirm(model, message, formattedMethod);
};

export const useDeleteWrap = (toast, model, modelName, method) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useDelete(model, modelName, formattedMethod);
};

export const useDeletesWrap = (toast, model, modelName, method) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
			toast.showSuccess(200, `${capitalize(modelName)} deleted!`);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useDeletes(model, modelName, formattedMethod);
};

export const useQueryWrap = (toast, method, state?) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useQuery(formattedMethod, state);
};

export const useSaveWrap = (toast, model, modelName, method) => {
	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
			toast.showSuccess(200, `${capitalize(modelName)} saved!`);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useSave(model, formattedMethod);
};

// Usage
// const [fetchData, loading] = useQuery(async () => {})
