import * as types from 'types';
import { useUI } from 'src/context';

export const Head = (props: types.HeadProps) => {
	const context = useUI();
	const NextHead = context?.components?.Head;
	// Render
	return (
		<NextHead>
			<title>{props.title}</title>
			<link rel='icon' href={props.favicon} />
			<link rel='canonical' href={props.url} />
			<meta name='description' content={props.description} />
			<meta name='keywords' content={props.keywords} />
			<meta name='author' content={props.author} />
			<meta name='og:type' content={props.type} />
			<meta name='og:logo' content={props.logo} />
			<meta name='og:site_name' content={props.siteName} />
			<meta name='og:locale' content={props.locale} />
			<meta name='og:image' content={props.photo} />
			<meta name='og:title' content={props.title} />
			<meta name='og:description' content={props.description} />
			<meta name='og:url' content={props.url} />
			<meta name='twitter:card' content={props.card} />
			<meta name='twitter:image' content={props.photo} />
			<meta name='twitter:title' content={props.title} />
			<meta name='twitter:description' content={props.description} />
			<meta name='twitter:site' content={props.site} />
			<meta name='robots' content={props.robots ? 'all' : 'none'} />
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			{props.children}
		</NextHead>
	);
};

// Docs
// https://www.advancedwebranking.com/blog/meta-tags-important-in-seo
// https://ogp.me/#types
// https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
