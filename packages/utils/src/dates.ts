import Dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import QuarterOfYear from 'dayjs/plugin/quarterOfYear';
import RelativeTime from 'dayjs/plugin/relativeTime';
import Timezone from 'dayjs/plugin/timezone';
import UTC from 'dayjs/plugin/utc';

Dayjs.extend(AdvancedFormat);
Dayjs.extend(QuarterOfYear);
Dayjs.extend(RelativeTime);
Dayjs.extend(Timezone);
Dayjs.extend(UTC);

export const dayjs = Dayjs;

export const zonedDayjs = (value?: any, timezone = 'America/Denver') => {
	return dayjs(value).tz(timezone);
};

export const fromUnix = (value?: number) => {
	return Dayjs.unix(value);
};

export const formatDate = (value?: any, format?: string) => {
	return Dayjs(value).format(format || 'MMM Do, YYYY @ hh:mmA');
};

export const formatTimestamp = (value?: any) => {
	return Dayjs(value).fromNow(true);
};

export const toDate = (value?: any) => {
	return Dayjs(value).toDate();
};

export const toJson = (value?: any) => {
	return Dayjs(value).toJSON();
};

export const toYear = (value?: any) => {
	return Dayjs(value).year();
};

export const toUnix = (value?: any) => {
	return Dayjs(value).valueOf();
};

export const toStartOfTime = () => {
	return Dayjs().subtract(10, 'y').startOf('d').toJSON();
};

export const toEndOfTime = () => {
	return Dayjs().add(10, 'y').endOf('d').toJSON();
};

export const toTimezone = (value?: any, timezone = 'America/Denver') => {
	return Dayjs(value).tz(timezone);
};

export const timeElapsed = (startDate, endDate = new Date()) => {
	return Dayjs(endDate).diff(startDate, 'ms') + 'ms';
};
