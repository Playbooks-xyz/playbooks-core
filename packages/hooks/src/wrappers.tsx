import { capitalize } from '@playbooks/utils/transforms';
import { useHooks } from 'src/context';
import { useAction, useConfirm, useDelete, useDeletes, useInit, useQuery, useSave } from 'src/store';

export const useActionWrapper = (model, method) => {
	const { toast } = useHooks();

	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useAction(model, formattedMethod);
};

export const useConfirmWrapper = (model, message, method) => {
	const { toast } = useHooks();

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

export const useDeleteWrapper = (model, modelName, method) => {
	const { toast } = useHooks();

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

export const useDeletesWrapper = (model, modelName, method) => {
	const { toast } = useHooks();

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

export const useInitWrapper = method => {
	const { toast } = useHooks();

	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useInit(formattedMethod);
};

export const useQueryWrapper = method => {
	const { toast } = useHooks();

	// Methods
	const formattedMethod = async (data?) => {
		try {
			await method(data);
		} catch (e) {
			toast.showError(e);
		}
	};

	return useQuery(formattedMethod);
};

export const useSaveWrapper = (model, modelName, method) => {
	const { toast } = useHooks();

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
