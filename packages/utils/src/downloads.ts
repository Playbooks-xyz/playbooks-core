export const fileDownload = async (filePath, fileName) => {
	const link = document.createElement('a');
	link.href = filePath;
	link.setAttribute('download', fileName);
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
};

export const responseDownload = async (response, fileName) => {
	const blob = await response.blob();
	const newBlob = new Blob([blob]);
	const blobUrl = window.URL.createObjectURL(newBlob);
	const link = document.createElement('a');
	link.href = blobUrl;
	link.setAttribute('download', fileName);
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
	window.URL.revokeObjectURL(blobUrl);
};
