import check from 'check-types';

export default class Cache {
    constructor() {
        this.data = {};
    }

    /**
     * @param key {String}
     * @returns {*}
     */
    has = (key) => check.not.undefined(this.data[key]);

    /**
     * @param key
     * @param value
     */
    set = (key, value) => {
        check.assert.nonEmptyString(key, 'A cache key is required');
        this.data[key] = value;
    };

    /**
     * @param key
     * @returns {*}
     */
    get = (key) => this.data[key]
};