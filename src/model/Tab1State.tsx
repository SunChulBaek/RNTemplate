import Photo from '../model/Photo';

class Tab1State {
    state: string;
    photos: Photo[];

    constructor(state: string, photos: Photo[]) {
        this.state = state;
        this.photos = photos;
    }
}

export default Tab1State;