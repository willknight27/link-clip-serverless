import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { functionHeaders } from "../../../src/config/headers.config";

import { HtmlParserAdapter } from "../../../src/infrastructure/adapters/html-parse.adapter";
import { UrlData } from "../../../src/application/use-cases/get-url-data-use-case";
import { HttpClientAdapter } from "../../../src/infrastructure/adapters/http.adapter";

// Inyeccion de dependencias
const httpClientAdapter = new HttpClientAdapter()
const htmlParserAdapter = new HtmlParserAdapter()
const urlData = new UrlData(htmlParserAdapter);

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

    try {

        const url = event.queryStringParameters?.url;
        if (!url) throw 'Ingresar url';

        const html = await httpClientAdapter.get(url);
        const linkData = urlData.getDataByHtml(html, url);

        return {
            statusCode: 200,
            body: JSON.stringify({...linkData}),
            headers: functionHeaders
        }


    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al obtener data desde url' }),
            headers: functionHeaders

        };
    }


   

};

