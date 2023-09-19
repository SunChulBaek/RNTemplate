import Photo from '../model/Photo';

interface PhotoRepository {
    getPhotos(): Promise<Photo[]>;
}