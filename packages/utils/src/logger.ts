const debugStyles = 'color: gray';
const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const warningStyles = 'color: amber';
const successStyles = 'color: aquamarine';

class logger {
	static log = (title, ...data) => {
		// quick logging
		return console.log(title, ...data);
	};

	static debug = (title, ...data) => {
		// development (hidden by default)
		return console.debug(`%c${title}`, debugStyles, ...data);
	};

	static info = (title, ...data) => {
		// development
		return console.info(`%c${title}`, infoStyles, ...data);
	};

	static success = (title, ...data) => {
		// development
		return console.info(`%c${title}`, successStyles, ...data);
	};

	static warn = (title, ...data) => {
		// user-facing
		return console.warn(`%c${title}`, warningStyles, ...data);
	};

	static error = (title, ...data) => {
		// user-facing
		return console.error(`%c${title}`, errorStyles, ...data);
	};
}

export { logger };

// Docs:
// https://developer.mozilla.team/en-US/docs/Web/API/Console
