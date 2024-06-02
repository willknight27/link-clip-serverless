import * as cheerio from 'cheerio';
import { HtmlParse } from '../../domain/interfaces/adapters/html-parser.interface';

export class HtmlParserAdapter implements HtmlParse {
  
  public loadHtml = (html: string) => cheerio.load(html);

  public getTitle = (document: cheerio.Root) => {
    return document('title').text();
  }

  public getDescription =  (document: cheerio.Root) => {
    return document('meta[name="description"]').attr('content') || '';
  }

  public getImage = (document: cheerio.Root) => {
    return document('meta[property="og:image"]').attr('content') || '';
  };
  
  public getDomain = (url: string) =>{
    const urlObject = new URL(url);
    return urlObject.origin;

  }

}