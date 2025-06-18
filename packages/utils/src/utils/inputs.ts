export const clearInput = element => {
	const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
	nativeInputValueSetter.call(element, '');
	const inputEvent = new Event('input', { bubbles: true });
	element.dispatchEvent(inputEvent);
};
