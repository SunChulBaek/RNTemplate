import Photo from '../model/Photo';

interface PhotoNetworkDataSource {
    getPhotos(): Promise<Photo[];
}