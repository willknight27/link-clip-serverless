
export interface HtmlParse {

    loadHtml: (html: string) => any;

    getDescription: (document: any) => string;

    getImage: (document: any) => string;

    getDomain: (url: string) => string;
}
