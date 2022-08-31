module.exports = {
    routes: [
        { // Path defined with an URL parameter
            method: 'GET',
            path: '/places-pages/paths',
            handler: 'places-page.getAllPaths',
        }
    ]
}