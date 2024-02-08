import { htmlParseAdapter } from "../../plugins/html-parse.adapter";

interface UrlDataUseCase {
    getDataByHtml(html: string, url: string): LinkData;
}

interface LinkData {
    title: string;
    description: string;
    source: string;
    img: string;
    domain: string;
}

export class UrlData implements UrlDataUseCase {

    getDataByHtml(html: string, url: string) {

        const $ = htmlParseAdapter.loadHtml(html)

        const title = htmlParseAdapter.getTitle($);
        const description = htmlParseAdapter.getDescription($);
        const source = url;
        const img = htmlParseAdapter.getImage($);
        const domain = htmlParseAdapter.getDomain(url);

        return { title, description, source, img, domain }

    } 

}

