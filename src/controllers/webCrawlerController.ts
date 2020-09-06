import puppeteer from 'puppeteer';
  
import { Request, Response } from 'express';

export class webCrawlerController {

    async ExtrairElemento(request:Request, response: Response): Promise<Response>{

        const browser = await puppeteer.launch()
        const page = await browser.newPage();
        await page.goto('https://www.lewuathe.com/simple-crawling-with-puppeteer-in-typescript.html');
        await page.screenshot({path:'testando.png'})
      
        await browser.close();

        return response.status(200).send("E o outro sou eu!!!");
    }
}