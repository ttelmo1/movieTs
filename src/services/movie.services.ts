import { movie } from "../protocols/movie.protocol.ts";
import { findMovieByName, insertMovie } from "../repositories/movie.repository.ts";

export async function create(body: movie){
    const { rows: [movie] } = await findMovieByName(body.name);

    if(movie){
        throw new Error('Movie already exists');
    }

    await insertMovie(body);
}