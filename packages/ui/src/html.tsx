import * as HTML from '@ehubbell/html';
import { computeProps } from '@ehubbell/html';
import { useUI } from 'src/context';
import * as types from 'types';

export const Article = ({ name = 'Article', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.article();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Article name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Article>
	);
};

export const Aside = ({ name = 'Aside', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.aside();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Aside name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Aside>
	);
};

export const Blockquote = ({ name = 'Blockquote', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.blockquote();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Blockquote name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Blockquote>
	);
};

export const Body = ({ name = 'Body', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.body();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Body name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Body>
	);
};

export const Caption = ({ name = 'Caption', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.caption();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Caption name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Caption>
	);
};

export const Code = ({ name = 'Code', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.code();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Code name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Code>
	);
};

export const Div = ({ name = 'Div', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.div();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Div name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Div>
	);
};

export const Figure = ({ name = 'Figure', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.figure();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Figure name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Figure>
	);
};

export const Hr = ({ name = 'Hr', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.hr();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Hr name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Hr>
	);
};

export const Html = ({ name = 'Html', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.html();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Html name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Html>
	);
};

export const IFrame = ({ name = 'iFrame', tailwind, className, ...props }: types.IFrameProps) => {
	const context = useUI();
	const base = context?.theme?.iFrame();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return <HTML.Iframe name={name} tailwind={formatted} className={className} {...filtered} />;
};

export const Img = ({ name = 'Img', src, alt = 'photo', tailwind, className, ...props }: types.ImgProps) => {
	const context = useUI();
	const base = context?.theme?.img();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return <HTML.Img name={name} src={src} alt={alt} tailwind={formatted} className={className} {...filtered} />;
};

export const Li = ({ name = 'Li', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.li();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Li name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Li>
	);
};

export const Main = ({ name = 'Main', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.main();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Main name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Main>
	);
};

export const Pre = ({ name = 'Pre', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.pre();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Pre name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Pre>
	);
};

export const Span = ({ name = 'Span', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.span();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Span name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Span>
	);
};

export const Ul = ({ name = 'Ul', tailwind, className, children, ...props }: types.HtmlProps) => {
	const context = useUI();
	const base = context?.theme?.ul();
	const formatted = { ...base, ...props, ...tailwind };
	const filtered = computeProps(props);

	return (
		<HTML.Ul name={name} tailwind={formatted} className={className} {...filtered}>
			{children}
		</HTML.Ul>
	);
};

// Docs
// These are core HTML elements.
