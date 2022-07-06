"use strict";

var movieController = require("../controllers/movie-controller"),
    express = require("express"),
    router = express.Router();

router
    .get("/", movieController.getAll)
    .get('/agregar', movieController.addForm)
    .get("/editar/:movie_id",movieController.getOne)
    .post('/', movieController.insert)
    .post("/actualizar/:movie_id", movieController.update)
    .post("/eliminar/:movie_id", movieController.delete)
    .use(movieController.error404)

module.exports = router;