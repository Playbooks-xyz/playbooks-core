export const addOrRemoveItem = (array: any[] = [], record) => {
	return array.includes(record) ? array.filter(a => a !== record) : array.concat(record);
};

export const moveAndSort = (array: any[], record, dragIndex, hoverIndex, key = 'order') => {
	const pre = dragIndex < hoverIndex ? array.slice(0, hoverIndex + 1) : array.slice(0, hoverIndex);
	const post = dragIndex < hoverIndex ? array.slice(hoverIndex + 1) : array.slice(hoverIndex);
	const formatted = [...pre.filter(v => v.id !== record.id), record, ...post.filter(v => v.id !== record.id)];
	return formatted.map((v, i) => ({ ...v, [key]: i }));
};

export const removeAndSort = (array, index, key = 'order') => {
	const pre = array.slice(0, index);
	const post = array.slice(index + 1);
	const formatted = [...pre, ...post];
	return formatted.map((v, i) => ({ ...v, [key]: i }));
};

export const updateAndSort = (array, record, index, key = 'order') => {
	const pre = array.slice(0, index);
	const post = array.slice(index + 1, array.length);
	const formatted = index >= 0 ? [...pre, record, ...post] : array.concat(record);
	return formatted.map((v, i) => ({ ...v, [key]: i }));
};

export const findRecordAndReplace = (array = [], selectedRecord, newRecord, keyName) => {
	const index = array.findIndex(v => v[keyName] === selectedRecord[keyName]);
	const pre = array.slice(0, index);
	const formattedRecord = { ...array[index], ...newRecord };
	const post = array.slice(index + 1, array.length);
	return [...pre, formattedRecord, ...post];
};
