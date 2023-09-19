import Photo from '../model/Photo';
import NetworkDataSource from './NetworkDataSource';

class PhotoNetworkDataSource implements NetworkDataSource {

    private baseUrl: string = 'https://jsonplaceholder.typicode.com/';

    public async getPhotos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await response.json();
        return await Promise.resolve(result);
    }
}

export default PhotoNetworkDataSource;