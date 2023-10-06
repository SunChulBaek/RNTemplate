import PhotoRepository from './PhotoRepository';
import NetworkDataSource from '../network/NetworkDataSource';
import FetchPhotoNetwork from '../network/FetchPhotoNetwork';
import PhotoNetworkDataSource from '../network/PhotoNetworkDataSource';
import Photo from '../model/Photo';

class NetworkPhotoRepository implements PhotoRepository {

    private static instance: NetworkPhotoRepository;

    public static getInstance() {
        if (this.instance == undefined) {
            console.debug('NetworkPhotoRepository created');
            this.instance = new NetworkPhotoRepository();
        }
        return this.instance;
    }

    private network: NetworkDataSource = new FetchPhotoNetwork();

    public async getPhotos(): Promise<Photo[]> {
        const photos = await this.network.getPhotos();
        return await Promise.resolve(photos);
    }
}

export default NetworkPhotoRepository;