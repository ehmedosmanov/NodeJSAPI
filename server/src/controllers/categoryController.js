import express from "express";
import Categories from "../models/categoryModel.js";

const getAllCategories = async (req, res) => {
  try {
    const category = await Categories.find({});
    res.send(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (category) {
      res.send(category);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Categories({
      ...req.body,
    });
    category.save();
    res.send(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    if (category) {
      res.send(category);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(req.params.id);
    if (category) {
      category.name = req.body.name;
      category.desc = req.body.desc;
      const catMovieId = category.movie.map((x) => x._id);
      const movie = catMovieId.findByIdAndUpdate(catMovieId);
      if (movie) {
        movie.name = req.body.movie.name
        movie.title = req.body.movie.title
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const CategoryController = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory
};

export default CategoryController;
