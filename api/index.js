import axios from 'axios';
import check from 'check-types';
import Cache from './Cache';

const cache = new Cache();

/**
 * @param request {Promise}
 * @returns {Promise<*>}
 */
const handleRequest = async (request) => {
    try {
        const response = await request;

        if (check.nonEmptyObject(response.data)) {
            return response.data
        }

        throw new Error('Invalid response.');
    } catch (error) {
        return {
            error: error.message
        }
    }
};

export default {
    /**
     * @type {Function}
     * @returns {Promise<*|void>}
     */
    getPeople: () => handleRequest(axios.get('http://swapi.co/api/people/')),
    getSpeciesByUrl: async (url) => {

        if (cache.has(url)) {
            return cache.get(url);
        }

        const response = await handleRequest(axios.get(url));

        cache.set(url, response);

        return response;
    }
};