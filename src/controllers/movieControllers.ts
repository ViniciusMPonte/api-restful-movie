import { Request, Response } from "express"
import { MovieModel } from "../models/Movie"
import { Types } from "mongoose"
import Logger from "../../config/logger"

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find()
    return res.status(200).json(movies)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res
      .status(500)
      .json({ error: "Erro interno. Por favor, tente mais tarde!" })
  }
}

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res
    .status(500)
    .json({ error: "Erro interno. Por favor, tente mais tarde!" })
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id

    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Id inválido." })
    }

    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." })
    } else {
      return res.status(200).json(movie)
    }
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res
      .status(500)
      .json({ error: "Erro interno. Por favor, tente mais tarde!" })
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body

    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Id inválido." })
    }

    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." })
    }

    await MovieModel.updateOne({ _id: id }, data)

    return res.status(200).json(data)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res
      .status(500)
      .json({ error: "Erro interno. Por favor, tente mais tarde!" })
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id

    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Id inválido." })
    }

    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." })
    }

    await movie.deleteOne()

    return res.status(200).json({ msg: "Filme removido com sucesso!" })
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res
      .status(500)
      .json({ error: "Erro interno. Por favor, tente mais tarde!" })
  }
}
