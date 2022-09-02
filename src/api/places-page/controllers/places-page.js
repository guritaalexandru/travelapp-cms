'use strict';

/**
 * places-page controller
 */

const logger = require('../../../../helpers/logger');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::places-page.places-page', ({ strapi }) => ({
    async getAllPaths(ctx) {
        try {
            logger.info('GET /api/places-pages/paths');
            const entries = await strapi.db.query("api::places-page.places-page").findMany();
            const placesPaths = entries.map(placeEntry => placeEntry.href);

            return {
                placesPaths
            }
        }
        catch (err) {
            logger.error(err);
            return ctx.badRequest('Something went wrong');
        }
    },
}));