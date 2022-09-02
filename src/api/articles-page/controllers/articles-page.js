'use strict';

/**
 * articles-page controller
 */

const logger = require('../../../../helpers/logger');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::articles-page.articles-page', ({ strapi }) => ({
    async getAllPaths(ctx) {
        try {
            logger.info('GET /api/articles-pages/paths');
            return await strapi.config.utils.getAllPaths('api::articles-page.articles-page');
        }
        catch (err) {
            logger.error(err);
            return ctx.badRequest('Something went wrong');
        }
    },
}));
