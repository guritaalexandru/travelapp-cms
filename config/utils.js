module.exports = {
    async getAllPaths(modelIdString) {
        const entries = await strapi.db.query(modelIdString).findMany();
        const pagesPaths = entries.map(pageEntry => pageEntry.href);

        return {
            paths: pagesPaths
        }
    }
}