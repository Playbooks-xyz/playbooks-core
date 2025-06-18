import ReactMaskedInput from 'react-input-mask';

const MaskedInput = ({ id, mask = '99/9999', value, placeholder, readOnly, onBlur, onChange, className }) => (
	<ReactMaskedInput
		id={id}
		mask={mask}
		maskChar={null}
		value={value}
		placeholder={placeholder}
		onBlur={onBlur}
		onChange={onChange}
		className={className}
		readOnly={readOnly}
	/>
);

export { MaskedInput };

// Docs
// https://github.com/sanniassin/react-input-mask
