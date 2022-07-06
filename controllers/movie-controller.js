'use strict';
var MovieModel = require("../models/movie-model"),
    MovieController = () => {};

    MovieController.getAll = (req,res,next) =>{
        MovieModel.getAll((err, rows)=>{
            if(err) {
                let locals = {
                    title: "Error al consultar la base de datos",
                    description: "Error de sintaxis SQL",
                    error:err
                }
                res.render("error", locals)
            }
            else {
                let locals = {
                    title: 'Lista de películas',
                    data: rows
                }
                res.render('index', locals);
            }
        });
    };
    MovieController.getOne = (req,res,next) =>{
        let movie_id = req.params.movie_id;
        MovieModel.getOne(movie_id, (err, rows)=>{
            if(err){
                let locals = {
                    title: `Error al buscar el registro con id ${movie.movie_id}`,
                    description: `Error de sintaxis SQL`,
                    error: err
                }
                res.render("error",locals);
            }
           else{
                let locals = {
                    title: 'Editar película',
                    data: rows
                }
                res.render("edit-movie",locals);
           }
        });
    };
    MovieController.insert = (req,res,next) =>{
            let movie = {
                movie_id: req.body.movie_id,
                title: req.body.title,
                release_year: req.body.release_year,
                rating: req.body.rating,
                img: req.body.image
            }
            MovieModel.insert(movie, (err, data)=>{
                if(err){
                    let locals = {
                        title: `Error al agregar el registro con id ${movie.movie_id}`,
                        description: `Error de sintaxis SQL`,
                        error: err
                    }
                    res.render("error",locals);
                }
                else res.redirect("/");
            })
    };
    MovieController.update = (req,res,next) =>{
        let movie = {
            movie_id: req.body.movie_id,
            title: req.body.title,
            release_year: req.body.release_year,
            rating: req.body.rating,
            img: req.body.image
        }
        MovieModel.update(movie, (err,data)=>{
            if(err){
                let locals = {
                    title: `Error al actualizar el registro de ID: ${movie.movie_id}`,
                    description: `Error de sintaxis SQL`,
                    error: err
                }
                res.render("error",locals);
            }
            else res.redirect("/");
        });
    };
    MovieController.delete = (req,res,next) =>{
        MovieModel.delete(req.params.movie_id, (err, rows)=>{
            if(err){
                let locals = {
                    title: `Error al eliminar el registro con id ${movie.movie_id}`,
                    description: `Error de sintaxis SQL`,
                    error: err
                }
                res.render("error",locals);
            }
            else res.redirect("/");
            
        })
    };
    MovieController.addForm = (req,res,next) => res.render('add-movie', {title: "Agregar una película"})
    MovieController.editForm = (req,res,next) =>{};
    MovieController.error404 = (req,res,next) =>{
        let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'File not found',
            error: error
        };
        error.status = 404;
        res.render('error', locals);
        next(); 
    };

    module.exports = MovieController;