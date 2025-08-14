import { logger } from '@playbooks/utils/logger';
import Algoliasearch from 'algoliasearch';

const ALGOLIA_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_KEY = process.env.ALGOLIA_APP_KEY;

class AlgoliaApiService {
	/* ----- Computed ----- */
	static get client() {
		return Algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);
	}

	/* ----- Helpers ----- */
	static buildIndex(tableName) {
		return this.client.initIndex(tableName);
	}

	/* ----- Methods ----- */
	static async createIndex(tableName, settings = {}) {
		const index = this.buildIndex(tableName);
		const response = await index.setSettings(settings);
		logger.log('Algolia createIndex: ', tableName);
		return response;
	}

	static async updateIndex(tableName, settings = {}) {
		const index = this.buildIndex(tableName);
		const response = await index.setSettings(settings);
		logger.log('Algolia updateIndex: ', response);
		return response;
	}

	static async createObject(tableName, object) {
		const index = this.buildIndex(tableName);
		const objectID = object.uuid.toString();
		const response = await index.saveObject({ ...object, objectID });
		logger.log('Algolia createObject: ', response);
		return response;
	}

	static async updateObject(tableName, object) {
		const index = this.buildIndex(tableName);
		const objectID = object.uuid.toString();
		const response = await index.partialUpdateObject({ ...object, objectID }, { createIfNotExists: true });
		logger.log('Algolia updateObject: ', response);
		return response;
	}

	static async updateObjects(tableName, objects = []) {
		const index = this.buildIndex(tableName);
		objects.map(object => (object.objectID = object.uuid.toString()));
		const response = await index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true });
		logger.log('Algolia updateObjects: ', { tableName, count: objects.length });
		return response;
	}

	static async deleteObject(tableName, objectId) {
		const index = this.buildIndex(tableName);
		const response = await index.deleteObject(objectId);
		logger.log('Algolia deleteObject: ', response);
		return response;
	}

	static async deleteIndex(tableName) {
		const index = this.buildIndex(tableName);
		const response = await index.delete();
		logger.log('Deleted index: ', response);
		return response;
	}

	static async deleteIndices() {
		const { items } = await this.client.listIndices();
		if (items?.length === 0) return logger.log('No indices to delete.');
		const options = items.map(({ name }) => ({ indexName: name, action: 'delete' }));
		const response = await this.client.multipleBatch(options as any);
		logger.log('Algolia deleteAppIndices: ', response);
		return response;
	}
}

export { AlgoliaApiService };

// Docs
// https://www.npmjs.com/package/algoliasearch
// https://www.algolia.com/doc/api-reference/api-parameters/searchableAttributes/#examples
// https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/#examples
