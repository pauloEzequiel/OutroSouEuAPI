import { Router, response } from "express";
import { webCrawlerController } from "./controllers/webCrawlerController";

const routes = Router();
const crawllerController = new webCrawlerController();

routes.get('/', (request, response)=>{
    return response.status(200).send("E o outro sou eu!!!");
});

routes.get('/extrair', crawllerController.ExtrairElemento);

export{routes}