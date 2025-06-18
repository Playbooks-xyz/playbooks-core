const fileNames = ['index', 'normalizers', 'serializers'];

const config = {
	entries: fileNames.map(fileName => {
		if (fileName === 'normalizers') {
			return {
				filePath: `./src/normalizers/${fileName}.ts`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: false,
			};
		}
		if (fileName === 'serializers') {
			return {
				filePath: `./src/serializers/${fileName}.ts`,
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
