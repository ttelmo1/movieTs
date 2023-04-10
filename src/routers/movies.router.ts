import { Router } from "express";
import { createMovie } from "../controller/movie.controller.ts";
import { validateSchema } from "../middlewares/validateSchema.middleware.ts";
import { movieSchema } from "../schemas/movie.schema.ts";

const router = Router();

router.post("/movie", validateSchema(movieSchema), createMovie);
// router.get("/movies", getMovies);
// router.get("/movie/:id", getMovie);
// router.put("/movie/:id", updateMovie);
// router.delete("/movie/:id", deleteMovie);


export default router;