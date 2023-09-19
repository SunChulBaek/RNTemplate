import Photo from '../model/Photo';

interface NetworkDataSource {
    getPhotos(): Promise<Photo[];
}