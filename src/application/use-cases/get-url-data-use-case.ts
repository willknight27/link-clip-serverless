import { LinkData } from "../../domain/interfaces/dto/link-data.interface";
import { UrlDataUseCase } from "../../domain/interfaces/use-cases/url-data-use-case.interface";
import { HtmlParserAdapter } from "../../infrastructure/adapters/html-parse.adapter";


export class UrlData implements UrlDataUseCase {

    constructor(private readonly htmlParseAdapter: HtmlParserAdapter) { }

    getDataByHtml(html: string, url: string): LinkData {

        const document = this.htmlParseAdapter.loadHtml(html);
        const title = this.htmlParseAdapter.getTitle(document);
        const description = this.htmlParseAdapter.getDescription(document);
        const img = this.htmlParseAdapter.getImage(document);
        const domain = this.htmlParseAdapter.getDomain(url);

        return { title, description, img, domain, source: url }

    }

}