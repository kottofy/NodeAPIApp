'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /add
 */
module.exports = {
    /**
     * summary: Creates a new contact
     * description: 
     * parameters: contact
     * produces: 
     * responses: 200
     * operationId: contacts_post
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/add',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
