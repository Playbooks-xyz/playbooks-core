module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: [
		'index',
		'animation',
		'currency-input',
		'fade',
		'font-awesome',
		'google-autocomplete',
		'masked-input',
		'phone-input',
		'scrollspy',
		'skeleton',
		'waypoint',
	].map(fileName => ({
		filePath: `./src/${fileName}.tsx`,
		outFile: `./dist/${fileName}.d.ts`,
		noCheck: true,
	})),
};
