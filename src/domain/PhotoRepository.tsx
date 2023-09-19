import Photo from '../model/Photo';
import NetworkDataSource from '../network/NetworkDataSource';
import PhotoNetworkDataSource from '../network/PhotoNetworkDataSource';

class PhotoRepository {

    private network: NetworkDataSource = new PhotoNetworkDataSource();

    public async getPhotos() {
        console.debug('getPhotosSelector()');
        const photos = await this.network.getPhotos();
        return await Promise.resolve(photos);
    }
}

export default PhotoRepository;