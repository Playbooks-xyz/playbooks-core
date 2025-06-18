import ReactCurrencyInput from 'react-currency-input-field';

const CurrencyInput = ({ id, value, prefix, placeholder, onChange, className, readOnly }) => {
	// Render
	return (
		<ReactCurrencyInput
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

export { CurrencyInput };

// Docs
// https://www.npmjs.com/package/react-currency-input-field
