import express from 'express'
import MovieController from '../controllers/movieController.js'

 const movieRoutes = express.Router()


movieRoutes.get('/', MovieController.getAllMovies)

movieRoutes.get('/:id', MovieController.getMovieById)

movieRoutes.post('/', MovieController.createMovie)

export default movieRoutes
