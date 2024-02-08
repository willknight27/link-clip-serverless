import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { httpClientAdapter } from "../../../src/plugins/http.adapter";
import { UrlData } from "../../../src/domain/use-cases/url-data.use-case";

// Caso de uso
const urlData = new UrlData();

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

    try {

        const url = event.queryStringParameters?.url;
        if (!url) throw 'Ingresar url';

        const html = await httpClientAdapter.get(url);
        const linkData = urlData.getDataByHtml(html, url);

        return {
            statusCode: 200,
            body: JSON.stringify({...linkData}),
            headers: {
                'Content-Type': 'application/json'
            }
        }


    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al obtener data desde url' }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }


   

};

