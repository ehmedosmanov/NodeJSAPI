import express from 'express'
import CategoryController from '../controllers/categoryController.js'

const categoryRoutes = express.Router()


categoryRoutes.get('/', CategoryController.getAllCategories)

categoryRoutes.get('/:id', CategoryController.getCategoryById)

categoryRoutes.post('/', CategoryController.createCategory)

export default categoryRoutes