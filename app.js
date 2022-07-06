"use strict";

var express = require("express"),
    favicon = require("serve-favicon"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    restFul = require("express-method-override")('_method'),
    ejs = require("ejs"),
    routes = require("./routes/movie-router"),
    publicDir = express.static(`${__dirname}/public`),
    faviconURL =`${__dirname}/public/image/javascript-favicon.png`,
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express();


    //Configurando APP
app
    .set('views', viewDir)
    .set('view engine', 'ejs')
    .set("port", port)
    //Ejecutando middlewares...
    .use(favicon(faviconURL))
    //parse application/json
    .use(bodyParser.json())
    //parse application/x-www-form-urlencoded
    .use(bodyParser.urlencoded({extended: false}))
    .use(restFul)
    .use(morgan("dev"))
    .use(publicDir)
    //ejecuto el middleware enrutador...
    .use(routes);

    module.exports = app;