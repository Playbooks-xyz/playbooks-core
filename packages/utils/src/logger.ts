const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const warningStyles = 'color: amber';
const successStyles = 'color: aquamarine';

class logger {
	static log = (title, ...data) => {
		return console.log(title, ...data);
	};

	static error = (title, ...data) => {
		return console.error(`%c${title}`, errorStyles, ...data);
	};

	static warn = (title, ...data) => {
		return console.warn(`%c${title}`, warningStyles, ...data);
	};

	static info = (title, ...data) => {
		return console.info(`%c${title}`, infoStyles, ...data);
	};

	static success = (title, ...data) => {
		return console.info(`%c${title}`, successStyles, ...data);
	};
}

export { logger };

// Docs:
// https://developer.mozilla.team/en-US/docs/Web/API/Console
