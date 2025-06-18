import PhoneInput from 'react-phone-number-input/input';

const PhoneInputWrapper = ({ id, value, placeholder, country = null, onBlur, onChange, readOnly, className }) => (
	<PhoneInput
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

export { PhoneInputWrapper };

// Docs
// https://www.npmjs.com/package/react-phone-number-input
