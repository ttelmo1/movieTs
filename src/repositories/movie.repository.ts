import { QueryResult } from "pg";
import { movie } from "../protocols/movie.protocol.ts";
import connectionDb from "../config/database.ts";

export async function insertMovie(body: movie) : Promise<QueryResult<movie>>{
    return await connectionDb.query(`
        INSERT INTO movies (name, platform, genre, status) 
        VALUES ($1, $2, $3, $4)`,
        [body.name, body.platform, body.genre, body.status]
    );
}

export async function findMovieByName(name: string) : Promise<QueryResult<movie>>{
    return await connectionDb.query(`
        SELECT * FROM movies WHERE name = $1`,
        [name]
    );
}

export async function deleteMovieByName(name: string) : Promise<QueryResult<movie>>{
    return await connectionDb.query(`
        DELETE FROM movies WHERE name = $1`,
        [name]
    );
}



