import { LinkData } from '../dto/link-data.interface';

export interface UrlDataUseCase {
    
  getDataByHtml(html: string, url: string): LinkData;
}
