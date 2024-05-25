import { config } from "./config";
import express, { Express, Request, Response } from "express";
import { template } from "./render/template";

const app: Express = express();

app.get('*',(req: Request, res: Response)=>{
    res.send(template("<h1>Joaquin</h1>"))
})

app.listen(config.PORT, () => {
    console.log(`listening in ${config.PORT}`)
})