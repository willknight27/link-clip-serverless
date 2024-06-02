import axios from 'axios';
import { HttpClient } from '../../domain/interfaces/adapters/httpClient.interface';

export class HttpClientAdapter implements HttpClient {

    public get = async (url: string) => {
        const { data } = await axios.get(url); 
        return data;
    }

}