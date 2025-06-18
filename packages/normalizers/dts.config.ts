const fileNames = ['index', 'normalizers'];

const config = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: fileNames.map(fileName => {
		if (fileName === 'normalizers') {
			return {
				filePath: `./src/normalizers/${fileName}.ts`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: false,
			};
		}
		return {
			filePath: `./src/${fileName}.ts`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: false,
		};
	}),
};

module.exports = config;
