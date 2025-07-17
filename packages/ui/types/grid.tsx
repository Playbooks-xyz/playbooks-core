import { TailwindColProps, TailwindContainerProps } from '@ehubbell/html';
import { HtmlProps } from 'types';

export type ContainerProps = HtmlProps & TailwindContainerProps;

export type GridProps = HtmlProps & {
	cols?: string;
};

export type ColProps = HtmlProps & TailwindColProps;
