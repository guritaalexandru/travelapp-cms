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
            return await strapi.config.utils.getAllPaths('api::places-page.places-page');
        }
        catch (err) {
            logger.error(err);
            return ctx.badRequest('Something went wrong');
        }
    },
}));