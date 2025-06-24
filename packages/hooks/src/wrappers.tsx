import { useAction, useConfirm, useDelete, useDeletes, useInit, useQuery, useSave } from '@playbooks/hooks';
import { capitalize } from '@playbooks/utils';
import { useContext } from 'src/context';

export const useActionWrapper = (model, method) => {
	const { toast } = useContext();

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
	const { toast } = useContext();

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
	const { toast } = useContext();

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
	const { toast } = useContext();

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
	const { toast } = useContext();

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
	const { toast } = useContext();

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
	const { toast } = useContext();

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
