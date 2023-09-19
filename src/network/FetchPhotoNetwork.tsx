import Photo from '../model/Photo';
import NetworkDataSource from './NetworkDataSource';

class FetchPhotoNetwork implements PhotoNetworkDataSource {

    private baseUrl: string = 'https://jsonplaceholder.typicode.com/';

    public async getPhotos(): Promise<Photo[]> {
        const response = await fetch(`${this.baseUrl}photos`);
        const result = await response.json();
        return await Promise.resolve(result);
    }
}

export default FetchPhotoNetwork;