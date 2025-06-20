import { capitalize } from '@playbooks/utils';
import { useAction, useConfirm, useDelete, useDeletes, useQuery, useSave } from 'src';

export const useActionWrapper = (toast, model, method, state?) => {
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

export const useConfirmWrapper = (toast, model, message, method) => {
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

export const useDeleteWrapper = (toast, model, modelName, method) => {
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

export const useDeletesWrapper = (toast, model, modelName, method) => {
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

export const useQueryWrapper = (toast, method, state?) => {
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

export const useSaveWrapper = (toast, model, modelName, method) => {
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
