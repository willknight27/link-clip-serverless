import * as cheerio from 'cheerio';

export const htmlParseAdapter = {

  loadHtml: (html: string) => cheerio.load(html),

  getTitle: ($: cheerio.Root): string => {
    return $('title').text();
  },

  getDescription: ($: cheerio.Root): string => {
    return $('meta[name="description"]').attr('content') || '';
  },

  getImage: ($: cheerio.Root): string => {
    return $('meta[property="og:image"]').attr('content') || '';
  },

  getDomain: (url: string): string => {
    const urlObject = new URL(url);
    return urlObject.origin;
  },
};
