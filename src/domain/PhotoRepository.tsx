import Photo from '../model/Photo';
import network from '../network/PhotoNetworkDataSource';

const getPhotos = async(): Photos[] => {
    console.debug('getPhotosSelector()');
    const photos = await network.getPhotos();
    return photos;
}

const PhotoRepository = {
    getPhotos: getPhotos
}

export default PhotoRepository;