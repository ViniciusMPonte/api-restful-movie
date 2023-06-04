import { Router } from "express"
import {
  getAllMovies,
  createMovie,
  findMovieById,
  updateMovie,
  removeMovie,
} from "./controllers/movieControllers"
import { validate } from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/movieValidation"

const router = Router()

export default router
  .get("/movie", getAllMovies)
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .patch("/movie/:id", movieCreateValidation(), validate, updateMovie)
  .delete("/movie/:id", removeMovie)
