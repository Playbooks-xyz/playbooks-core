import { isArray, sleep } from '@playbooks/utils/helpers';
import { logger } from '@playbooks/utils/logger';
import Algoliasearch from 'algoliasearch/lite';

const ALGOLIA_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_KEY = process.env.NEXT_PUBLIC_ALGOLIA_APP_KEY;

interface AlgoliaService {
	tableName: string;
	tableNames: string[];
}

class AlgoliaService {
	constructor(props) {
		this.tableName = props?.tableName;
		this.tableNames = props?.tableNames || [];
	}

	/* ----- Computed ----- */
	get client() {
		return Algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);
	}

	/* ----- Helpers ----- */
	buildIndex(tableName) {
		return this.client.initIndex(tableName);
	}

	buildIndices(tableNames, query, params) {
		const serializedParams = this.serializeParams(params);
		return tableNames.map(indexName => ({ indexName, query, params: serializedParams }));
	}

	serializeParams(params) {
		const searchParams = {};
		searchParams['page'] = params.page || 0;
		searchParams['hitsPerPage'] = params.pageSize || 5;
		searchParams['aroundLatLng'] = params.aroundLatLng || '';
		searchParams['aroundRadius'] = params.aroundRadius || 'all';
		searchParams['facets'] = params.facetNames || [];
		const filters = [];
		Object.keys(params)
			.filter(key => key !== 'include')
			.filter(key => key !== 'page')
			.filter(key => key !== 'pageSize')
			.filter(key => key !== 'sortProp')
			.filter(key => key !== 'sortValue')
			.filter(key => key !== 'view')
			.filter(key => params[key] !== null)
			.map(key => {
				const value = params[key];
				if (isArray(value)) return filters.push(`(${value.map(v => `${key}:"${v}"`).join(' OR ')})`);
				if (parseFloat(value) >= 0) return filters.push(`${key} >= ${value}`);
				return filters.push(`${key}:"${value}"`);
			});
		searchParams['filters'] = filters.join(' AND ');
		return searchParams;
	}

	normalizeData(response, params) {
		return params.sorting ? this.sortData(response, params.sorting) : response;
	}

	normalizeMeta(response) {
		return {
			page: response.page,
			pageSize: response.hitsPerPage,
			totalRecords: response.nbHits,
		};
	}

	sortData(data, params) {
		const { sortProp, sortValue } = params;
		const asc = sortValue === 'asc';
		return data.sort((a, b) => (asc ? (a[sortProp] < b[sortProp] ? -1 : 1) : a[sortProp] > b[sortProp] ? 1 : 1));
	}

	/* ----- Methods ----- */
	async queryIndex(query, params) {
		await sleep(300);
		const index = this.buildIndex(this.tableName);
		const serializedParams = this.serializeParams(params);
		const response = await index.search(query, serializedParams);
		const facets = response.facets;
		const data = this.normalizeData(
			response.hits.map(v => ({ ...v, index: index.indexName })),
			params,
		);
		const meta = this.normalizeMeta(response);
		logger.log('Algolia queryIndex: ', { data, facets, meta });
		return { index, data, facets, meta };
	}

	async queryFacet(facet, query, params) {
		await sleep(300);
		const index = this.buildIndex(this.tableName);
		const response = await index.searchForFacetValues(facet, query, params);
		logger.log('Algolia queryFacet: ', response);
		return response;
	}

	async queryIndices(query, params) {
		await sleep(300);
		const formattedQueries = this.buildIndices(this.tableNames, query, params);
		// @ts-ignore
		const response = await this.client.multipleQueries(formattedQueries);
		logger.log('Algolia queryIndices: ', response);
		return response.results.map(result => ({
			index: result,
			facets: result.facets,
			data: this.normalizeData(
				result.hits.map(v => ({ ...v, index: result.index })),
				params,
			),
			meta: this.normalizeMeta(result),
		}));
	}
}

export { AlgoliaService };

// Docs
// https://www.algolia.com/doc/api-client/methods/search
// https://www.algolia.com/doc/api-reference/api-parameters/facets/
// https://www.algolia.com/doc/api-reference/api-parameters/filters/
// https://www.algolia.com/doc/api-reference/api-parameters/attributesForFaceting/
