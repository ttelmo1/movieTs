import express, { json } from "express";
import router from "./routers/movies.router.ts";


const app = express();
app.use(json());

app.use(router);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

