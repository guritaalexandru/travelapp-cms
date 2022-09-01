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

    async getPageData(ctx) {
        try {
            const path = ctx?.params?.path;
            logger.info(`GET /api/places-pages/${path}`);
            if (!path) {
                return ctx.badRequest('Path is required');
            }

            console.log(strapi.config.functions);

            const pageEntry = await strapi.config.utils.dynamicSectionPopulate('api::places-page.places-page', { href: path });

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