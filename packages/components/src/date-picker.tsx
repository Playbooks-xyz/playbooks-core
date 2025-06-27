import { DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

import { dayjs, toDate } from '@playbooks/utils/dates';

const DatePicker = ({ value, disabledDays, components, onChange }) => {
	// Methods
	const onSelect = date => {
		const currentHour = value ? dayjs(value).hour() : 8;
		onChange(date ? dayjs(date).hour(currentHour).toJSON() : null);
	};

	// Computed
	const modifierClassNames = {
		disabled: 'DayPicker-Day-Disabled',
		outside: 'DayPicker-Day-Outside',
		selected: 'DayPicker-Day-Selected',
		today: 'DayPicker-Day-Today',
		range_start: 'DayPicker-Day-RangeStart',
		range_middle: 'DayPicker-Day-RangeMiddle',
		range_end: 'DayPicker-Day-RangeEnd',
	};

	const classNames = {
		...styles,
		// root: 'DayPicker-Root',
		caption_label: 'DayPicker-MonthCaption',
		button_previous: 'DayPicker-NavButton DayPicker-NavButton--prev',
		button_next: 'DayPicker-NavButton DayPicker-NavButton--next',
		chevron: 'DayPicker-Chevron',
		day: 'DayPicker-Day',
		day_button: 'DayPicker-DayBtn',
		footer: 'DayPicker-Footer',
		months: 'DayPicker-Months',
		month: 'DayPicker-Month',
		month_caption: 'DayPicker-MonthCaption',
		month_grid: 'DayPicker-MonthGrid',
		nav: 'DayPicker-Nav',
		weeks: 'DayPicker-Weeks',
		week: 'DayPicker-Week',
		weekday: 'DayPicker-Weekday',
		weekdays: 'DayPicker-Weekdays',
	};

	// Render
	return (
		<DayPicker
			mode='single'
			disabled={disabledDays}
			components={components}
			selected={value ? toDate(value) : null}
			onSelect={onSelect}
			modifiersClassNames={modifierClassNames}
			classNames={classNames}
		/>
	);
};

export { DatePicker };

// Docs:
// https://react-day-picker.js.team/docs/getting-started
// https://react-day-picker.js.team/api/DayPicker#navbarElement
// https://github.com/gpbl/react-day-picker/blob/v7/src/classNames.js
// https://github.com/gpbl/react-day-picker/blob/v7/src/style.css
