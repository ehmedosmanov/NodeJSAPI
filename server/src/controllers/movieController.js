
import express from "express";
import Movies from "../models/movieModel.js";


const getAllMovies = async (req,res) => {
    try {
        const movie = await Movies.find({})
        res.send(movie)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const getMovieById = async (req,res) => {
    try {
        const movie = await Movies.findById(req.params.id)
        if(movie) {
            res.send(movie)
        } else {
            res.status(404).json({message:'Not Found'})
        }
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}


const createMovie = async (req,res) => {
    try {
        const movie = new Movies({
            ...req.body
        })
        movie.save()
        res.send(movie)
    } catch (error) {
        
    }
}

const MovieController = {
    getAllMovies,
    getMovieById,
    createMovie
}

export default MovieController