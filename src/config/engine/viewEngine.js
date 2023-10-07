const path = require('path')
const express = require('express')
const engHandlebars = require('express-handlebars')

const viewEngine = (app) => {
    app.engine('handlebars', engHandlebars.engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join('./src', 'resources', 'views'));

    app.use(express.static(path.join('./src', 'public')))
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );
    app.use(express.json());
}

module.exports = viewEngine;
