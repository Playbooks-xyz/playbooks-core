const fileNames = [
	'index',
	'accordions',
	'alerts',
	'avatars',
	'badges',
	'banners',
	'breadcrumbs',
	'button-groups',
	'buttons',
	'cards',
	'commands',
	'drops',
	'feedbacks',
	'fonts',
	'footers',
	'forms',
	'grid',
	'head',
	'headers',
	'heros',
	'html',
	'icons',
	'input-groups',
	'links',
	'list-groups',
	'loaders',
	'menus',
	'modals',
	'navbars',
	'navs',
	'paginations',
	'prefooters',
	'progress-bars',
	'radios',
	'ranges',
	'routes',
	'sections',
	'slides',
	'spinners',
	'switches',
	'tables',
	'tabs',
	'tags',
	'toasts',
	'tooltips',
];

const config = {
	compilationOptions: { preferredConfigPath: './tsconfig.json' },
	entries: fileNames.map(fileName => {
		if (fileName === 'index') {
			return {
				filePath: `./src/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		if (fileName === 'components') {
			return {
				filePath: `./src/components/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		if (fileName === 'contexts') {
			return {
				filePath: `./src/contexts/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		if (fileName === 'hooks') {
			return {
				filePath: `./src/hooks/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		if (fileName === 'molecules') {
			return {
				filePath: `./src/molecules/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		if (fileName === 'interface') {
			return {
				filePath: `./src/interface/${fileName}.tsx`,
				outFile: `./dist/${fileName}.d.ts`,
				noCheck: true,
			};
		}
		return {
			filePath: `./src/interface/${fileName}.tsx`,
			outFile: `./dist/${fileName}.d.ts`,
			noCheck: true,
		};
	}),
};

module.exports = config;
