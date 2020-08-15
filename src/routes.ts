import { Router, response } from "express";

const routes = Router()

routes.get('/user', (request, response)=>{
    return response.status(200).send("E o outro sou eu!!!");
});

export{routes}