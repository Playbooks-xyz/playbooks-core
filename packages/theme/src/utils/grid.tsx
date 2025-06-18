export const computeContainer = size => {
	switch (size) {
		case 'xs':
			return 'w-full max-w-xs';

		case 'sm':
			return 'w-full max-w-sm';

		case 'md':
			return 'w-full max-w-md';

		case 'lg':
			return 'w-full max-w-lg';

		case 'xl':
			return 'w-full max-w-xl';

		case 'xxl':
			return 'w-full max-w-xxl';

		default:
			return size;
	}
};

export const computeGrid = value => {
	switch (value) {
		case '2':
			return 'grid-cols-2';

		case '3':
			return 'grid-cols-3';

		case '4':
			return 'grid-cols-4';

		case '5':
			return 'grid-cols-5';

		case '6':
			return 'grid-cols-6';

		case '7':
			return 'grid-cols-7';

		case '8':
			return 'grid-cols-8';

		case '9':
			return 'grid-cols-9';

		case '10':
			return 'grid-cols-10';

		case '11':
			return 'grid-cols-11';

		case '12':
			return 'grid-cols-12';

		default:
			return value;
	}
};

export const computeCol = (type, size) => {
	switch (type) {
		case 'sm':
			return computeColSm(size);

		case 'md':
			return computeColMd(size);

		case 'lg':
			return computeColLg(size);

		case 'xl':
			return computeColXl(size);

		case 'xxl':
			return computeCol2xl(size);

		default:
			return computeColSpan(size);
	}
};

export const computeColSpan = size => {
	switch (size) {
		case '1':
			return 'col-span-1';

		case '2':
			return 'col-span-2';

		case '3':
			return 'col-span-3';

		case '4':
			return 'col-span-4';

		case '5':
			return 'col-span-5';

		case '6':
			return 'col-span-6';

		case '7':
			return 'col-span-7';

		case '8':
			return 'col-span-8';

		case '9':
			return 'col-span-9';

		case '10':
			return 'col-span-10';

		case '11':
			return 'col-span-11';

		case '12':
			return 'col-span-12';

		default:
			return;
	}
};

export const computeColSm = size => {
	switch (size) {
		case '1':
			return 'sm:col-span-1';

		case '2':
			return 'sm:col-span-2';

		case '3':
			return 'sm:col-span-3';

		case '4':
			return 'sm:col-span-4';

		case '5':
			return 'sm:col-span-5';

		case '6':
			return 'sm:col-span-6';

		case '7':
			return 'sm:col-span-7';

		case '8':
			return 'sm:col-span-8';

		case '9':
			return 'sm:col-span-9';

		case '10':
			return 'sm:col-span-10';

		case '11':
			return 'sm:col-span-11';

		case '12':
			return 'sm:col-span-12';

		default:
			return;
	}
};

export const computeColMd = size => {
	switch (size) {
		case '1':
			return 'md:col-span-1';

		case '2':
			return 'md:col-span-2';

		case '3':
			return 'md:col-span-3';

		case '4':
			return 'md:col-span-4';

		case '5':
			return 'md:col-span-5';

		case '6':
			return 'md:col-span-6';

		case '7':
			return 'md:col-span-7';

		case '8':
			return 'md:col-span-8';

		case '9':
			return 'md:col-span-9';

		case '10':
			return 'md:col-span-10';

		case '11':
			return 'md:col-span-11';

		case '12':
			return 'md:col-span-12';

		default:
			return;
	}
};

export const computeColLg = size => {
	switch (size) {
		case '1':
			return 'lg:col-span-1';

		case '2':
			return 'lg:col-span-2';

		case '3':
			return 'lg:col-span-3';

		case '4':
			return 'lg:col-span-4';

		case '5':
			return 'lg:col-span-5';

		case '6':
			return 'lg:col-span-6';

		case '7':
			return 'lg:col-span-7';

		case '8':
			return 'lg:col-span-8';

		case '9':
			return 'lg:col-span-9';

		case '10':
			return 'lg:col-span-10';

		case '11':
			return 'lg:col-span-11';

		case '12':
			return 'lg:col-span-12';

		default:
			return;
	}
};

export const computeColXl = size => {
	switch (size) {
		case '1':
			return 'xl:col-span-1';

		case '2':
			return 'xl:col-span-2';

		case '3':
			return 'xl:col-span-3';

		case '4':
			return 'xl:col-span-4';

		case '5':
			return 'xl:col-span-5';

		case '6':
			return 'xl:col-span-6';

		case '7':
			return 'xl:col-span-7';

		case '8':
			return 'xl:col-span-8';

		case '9':
			return 'xl:col-span-9';

		case '10':
			return 'xl:col-span-10';

		case '11':
			return 'xl:col-span-11';

		case '12':
			return 'xl:col-span-12';

		default:
			return;
	}
};

export const computeCol2xl = size => {
	switch (size) {
		case '1':
			return '2xl:col-span-1';

		case '2':
			return '2xl:col-span-2';

		case '3':
			return '2xl:col-span-3';

		case '4':
			return '2xl:col-span-4';

		case '5':
			return '2xl:col-span-5';

		case '6':
			return '2xl:col-span-6';

		case '7':
			return '2xl:col-span-7';

		case '8':
			return '2xl:col-span-8';

		case '9':
			return '2xl:col-span-9';

		case '10':
			return '2xl:col-span-10';

		case '11':
			return '2xl:col-span-11';

		case '12':
			return '2xl:col-span-12';

		default:
			return;
	}
};

// Docs
// https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine
