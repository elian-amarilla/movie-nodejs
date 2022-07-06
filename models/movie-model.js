'use strict';
var conn = require("./movie-connection"),
    Movie = () => {};

    Movie.getAll = (cb) => conn.query('SELECT * FROM movie', cb);

    Movie.getOne = (id, cb) =>conn.query("SELECT * FROM movie WHERE movie_id = ?", id, cb);
    Movie.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb);
    Movie.update = (data, cb) => conn.query("UPDATE movie SET ? WHERE movie_id = ?", [data, data.movie_id], cb);
    Movie.delete = (id, cb) =>conn.query("DELETE FROM movie WHERE movie_id = ?", id, cb);

    module.exports = Movie;