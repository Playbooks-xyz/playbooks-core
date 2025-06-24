import ReactPhoneInput from 'react-phone-number-input/input';

const PhoneInput = ({ id, value, placeholder, country = null, onBlur, onChange, readOnly, className }) => (
	<ReactPhoneInput
		id={id}
		value={value}
		placeholder={placeholder}
		country={country}
		onBlur={onBlur}
		onChange={onChange}
		className={className}
		readOnly={readOnly}
	/>
);

export { PhoneInput };

// Docs
// https://www.npmjs.com/package/react-phone-number-input
