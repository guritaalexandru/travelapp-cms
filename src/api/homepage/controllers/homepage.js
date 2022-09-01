'use strict';

/**
 * homepage controller
 */
const logger = require('../../../../helpers/logger');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) => ({
    async find(ctx) {
        try {
            logger.info(`GET /api/homepage`);

            const pageEntry = await strapi.config.utils.dynamicSectionPopulate("api::homepage.homepage");

            if (!pageEntry) {
                return ctx.badRequest('Page not found');
            }

            return pageEntry;
        }
        catch (err) {
            logger.error(err);
            return ctx.badRequest('Something went wrong');
        }
    }
}));
