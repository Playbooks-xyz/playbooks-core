const debugStyles = 'color: gray';
const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const warningStyles = 'color: amber';
const successStyles = 'color: aquamarine';

const env = process.env.NEXT_PUBLIC_NODE_ENV;

class logger {
	static log = (title, ...data) => {
		// quick logging
		if (env !== 'development') return;
		return console.log(title, ...data);
	};

	static debug = (title, ...data) => {
		// development (hidden by default)
		if (env !== 'development') return;
		return console.debug(`%c${title}`, debugStyles, ...data);
	};

	static info = (title, ...data) => {
		// development
		if (env !== 'development') return;
		return console.info(`%c${title}`, infoStyles, ...data);
	};

	static success = (title, ...data) => {
		// development
		if (env !== 'development') return;
		return console.info(`%c${title}`, successStyles, ...data);
	};

	static warn = (title, ...data) => {
		// production
		return console.warn(`%c${title}`, warningStyles, ...data);
	};

	static error = (title, ...data) => {
		// production
		return console.error(`%c${title}`, errorStyles, ...data);
	};
}

export { logger };

// Docs:
// https://developer.mozilla.team/en-US/docs/Web/API/Console
