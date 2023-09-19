import PhotoRepository from './PhotoRepository';
import NetworkDataSource from '../network/NetworkDataSource';
import FetchPhotoNetwork from '../network/FetchPhotoNetwork';
import PhotoNetworkDataSource from '../network/PhotoNetworkDataSource';
import Photo from '../model/Photo';

class NetworkPhotoRepository implements PhotoRepository {

    private network: NetworkDataSource = new FetchPhotoNetwork();

    public async getPhotos(): Promise<Photo[]> {
        console.debug('getPhotosSelector()');
        const photos = await this.network.getPhotos();
        return await Promise.resolve(photos);
    }
}

export default NetworkPhotoRepository;