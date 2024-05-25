import { config } from "./config";
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('*',(req: Request, res: Response)=>{
    res.send(`<h1>Hola ${req.url}</h1>`)
})

app.listen(config.PORT, () => {
    console.log(`listening in ${config.PORT}`)
})