import Photo from '../model/Photo';

class HomeState {
    isLoading: boolean;
    photos: Photo[]

    constructor(isLoading: boolean, photos: Photo[]) {
        this.isLoading = isLoading;
        this.photos = photos;
    }
}

export default HomeState;