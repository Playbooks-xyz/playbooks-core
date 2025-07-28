export const otp = () => ({
	display: 'flex-between',
	space: 'space-x-2',
});

export const otpInput = ({ index, length }) => ({
	align: 'text-center',
	bordrRadius: index === 0 ? 'rounded-tl-md rounded-bl-md' : length === index + 1 ? 'rounded-tr-md rounded-br-md' : '',
});
