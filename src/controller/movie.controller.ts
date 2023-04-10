import { Request, Response } from "express";
import { movie } from "../protocols/movie.protocol.ts";
import { STATUS_CODE } from "../enums/statusCode.ts";
import { create } from "../services/movie.services.ts";

async function createMovie(req: Request, res: Response): Promise<Response> {
  const body = req.body as movie;

  try{
    await create(body);
    return res.sendStatus(STATUS_CODE.CREATED);
    }catch(err){
        return res.status(STATUS_CODE.CONFLICT).send(err.message);
    }
}

export { createMovie };

