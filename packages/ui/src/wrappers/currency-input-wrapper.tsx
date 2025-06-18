import CurrencyInput from 'react-currency-input-field';

const CurrencyInputWrapper = ({ id, value, prefix, placeholder, onChange, className, readOnly }) => {
	// Render
	return (
		<CurrencyInput
			id={id}
			type='text'
			prefix={prefix}
			decimalsLimit={2}
			value={value}
			placeholder={placeholder}
			className={className}
			onValueChange={onChange}
			readOnly={readOnly}
		/>
	);
};

export { CurrencyInputWrapper };

// Docs
// https://www.npmjs.com/package/react-currency-input-field
