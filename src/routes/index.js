const courseRouter = require('./course');
const homeRouter = require('./home');


function route(app) {
    app.use('/course', courseRouter)
    app.use('/', homeRouter)
}

module.exports = route;