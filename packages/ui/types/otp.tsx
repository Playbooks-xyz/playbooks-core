import { InputProps } from 'types';

export type OtpProps = Omit<InputProps, 'size' | 'onChange'> & {
	id?: string;
	type?: string;
	size?: string;
	variant?: string;
	value?: string;
	length?: number;
	onChange?: any;
};
