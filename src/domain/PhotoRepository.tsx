import Photo from '../model/Photo';
import network from '../network/PhotoNetworkDataSource';

const PhotoRepository = {
    getPhotos: async(): Photos[] => {
       console.debug('getPhotosSelector()');
       const photos = await network.getPhotos();
       return photos;
   }
}

export default PhotoRepository;