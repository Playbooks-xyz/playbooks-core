export const computeAvatarSize = size => {
	switch (size) {
		case 'xs':
			return 'w-6';

		case 'sm':
			return 'w-8';

		case 'md':
			return 'w-10';

		case 'lg':
			return 'w-12';

		case 'xl':
			return 'w-14';

		default:
			return size;
	}
};

export const computeBadgeSize = size => {
	switch (size) {
		case 'xs':
			return 'px-2 py-0.5';

		case 'sm':
			return 'px-2 py-1';

		case 'md':
			return 'px-4 py-1.5';

		case 'lg':
			return 'px-5 py-2';

		case 'xl':
			return 'px-6 py-2.5';

		default:
			return size;
	}
};

export const computeBtnSize = size => {
	switch (size) {
		case 'icon':
			return 'w-10 h-10';

		case 'xxs':
			return 'px-2 py-1.5';

		case 'xs':
			return 'px-3 py-2';

		case 'sm':
			return 'px-4 py-2.5 min-w-[75px]';

		case 'md':
			return 'px-5 py-3 min-w-[100px]';

		case 'lg':
			return 'px-6 py-4 min-w-[150px]';

		case 'xl':
			return 'px-8 py-5 min-w-[200px]';

		default:
			return size;
	}
};

export const computeHeroSize = size => {
	switch (size) {
		case 'xs':
			return 'min-h-[10vh]';

		case 'sm':
			return 'min-h-[20vh]';

		case 'md':
			return 'min-h-[30vh]';

		case 'lg':
			return 'min-h-[40vh]';

		case 'xl':
			return 'min-h-[60vh]';

		case 'full':
			return 'min-h-[100vh] -mt-20';

		default:
			return size;
	}
};

export const computeThumbnailSize = size => {
	switch (size) {
		case 'xs':
			return 'w-10';

		case 'sm':
			return 'w-16';

		case 'md':
			return 'w-20';

		case 'lg':
			return 'w-20 md:w-24';

		case 'xl':
			return 'w-24 md:w-32';

		default:
			return size;
	}
};

export const computeInputSize = size => {
	switch (size) {
		case 'xxs':
			return { fontSize: 'text-sm', spacing: 'p-2' };

		case 'xs':
			return { fontSize: 'text-sm', spacing: 'p-2.5' };

		case 'sm':
			return { fontSize: 'text-sm', spacing: 'p-3' };

		case 'md':
			return { fontSize: 'text-sm', spacing: 'p-3.5' };

		case 'lg':
			return { fontSize: 'text-base', spacing: 'p-4' };

		case 'xl':
			return { fontSize: 'text-base', spacing: 'p-4.5' };

		default:
			return size;
	}
};

export const computeModalSize = size => {
	switch (size) {
		case 'xs':
			return 'min-h-[150px]';

		case 'sm':
			return 'min-h-[250px]';

		case 'md':
			return 'min-h-[400px]';

		case 'lg':
			return 'min-h-[600px]';

		case 'xl':
			return 'min-h-[800px]';

		case 'full':
			return 'min-h-[100vh]';

		default:
			return size;
	}
};

export const computeSectionSize = size => {
	switch (size) {
		case 'xs':
			return 'min-h-[150px]';

		case 'sm':
			return 'min-h-[250px]';

		case 'md':
			return 'min-h-[400px]';

		case 'lg':
			return 'min-h-[600px]';

		case 'xl':
			return 'min-h-[800px]';

		case 'full':
			return 'min-h-[100vh]';

		default:
			return size;
	}
};

export const computeSlideAnimation = direction => {
	switch (direction) {
		case 'top':
			return 'translate-y-full';

		case 'left':
			return '-translate-x-full';

		case 'right':
			return 'translate-x-full';

		case 'bottom':
			return '-translate-y-full';
	}
};

export const computeTagSize = size => {
	switch (size) {
		case 'xxs':
			return 'px-1.5 py-0.5';

		case 'xs':
			return 'px-2 py-1';

		case 'sm':
			return 'px-3 py-1.5';

		case 'md':
			return 'px-4 py-2';

		case 'lg':
			return 'px-5 py-2.5';

		case 'xl':
			return 'px-6 py-3';

		default:
			return size;
	}
};

export const computeTagImgSize = size => {
	switch (size) {
		case 'xs':
			return 'w-4 h-4';

		case 'sm':
			return 'w-6 h-6';

		case 'md':
			return 'w-8 h-8';

		case 'lg':
			return 'w-10 h-10';

		case 'xl':
			return 'w-12 h-12';

		default:
			return size;
	}
};

export const computeToastAnimation = direction => {
	switch (direction) {
		case 'top':
			return '-translate-y-12';

		case 'left':
			return '-translate-x-12';

		case 'right':
			return 'translate-x-12';

		case 'bottom':
			return 'translate-y-12';
	}
};

export const computeTooltipAnimation = placement => {
	switch (placement) {
		case 'top':
			return 'translate-y-2';

		case 'left':
			return 'translate-x-2';

		case 'right':
			return '-translate-x-2';

		case 'bottom':
			return '-translate-y-2';
	}
};
