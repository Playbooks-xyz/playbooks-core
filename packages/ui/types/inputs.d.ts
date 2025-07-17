import { FormInputProps } from 'types';

export type InputCurrencyProps = FormInputProps & {
	prefix?: string;
};

export type InputLocationProps = FormInputProps & {
	options?: any;
	googleMapsApiKey: string;
	onSelect: (e: any) => any;
};

export type InputMaskProps = FormInputProps & {
	mask: string;
};

export type InputPhoneProps = FormInputProps & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
};
