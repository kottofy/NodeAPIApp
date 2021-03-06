'use strict';
var dataProvider = require('../data/add.js');
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
     */
    post: function contacts_post(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
