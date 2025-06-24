module.exports = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: ['index', 'brand', 'loaders', 'patterns'].map(fileName => {
		if (fileName === 'index') {
			return {
				filePath: `./src/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			}
		}
		return {
			filePath: `./src/${fileName}/${fileName}.tsx`,
			outFile: `./dist/${fileName}/${fileName}.d.ts`,
			noCheck: true,
		}
	})
};
