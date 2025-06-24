import { IconStat, TextStat } from 'src/stats';

export const Stat = ({ type = 'text', stat, icon, text, loading }) => {
	const computed = { stat, icon, text, loading };
	// Render
	switch (type) {
		case 'icon':
			return <IconStat {...computed} />;

		case 'text':
			return <TextStat {...computed} />;
	}
};
