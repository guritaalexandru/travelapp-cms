module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/places-pages/paths',
            handler: 'places-page.getAllPaths',
        },
        {
            method: 'GET',
            path: '/places-pages/:path',
            handler: 'places-page.getPageData',
        }
    ]
}