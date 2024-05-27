import { config } from "./config";
import express, { Express, Request, Response } from "express";
import { render } from "./render";
import axios from "axios";

const app: Express = express();

app.use(express.static("dist"));

app.get("/galaxias", async (req: Request, resp: Response) => {
  try {
    const { data } = await axios.get(
      "https://images-api.nasa.gov/search?=q=galaxies"
    );
    const initialProps = { galaxies: data?.collection?.items };
    resp.send(render(req.url, initialProps));
  } catch (error) {
    throw new Error("An error ocurred in /galaxias", error);
  }
});

app.get("*", (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.PORT, () => {
  console.log(`listening in ${config.PORT}`);
});
