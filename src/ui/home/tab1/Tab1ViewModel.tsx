import PhotoRepository from '../../../repository/PhotoRepository';
import NetworkPhotoRepository from '../../../repository/NetworkPhotoRepository';
import Tab1State from './Tab1State';
import {PhotoItem} from './PhotoItem';

{/* TODO : 엄밀하게는 ViewModel이라고 할 수 없는 친구인데, ts에서 stream을 사용 할 수 있는 방법을 찾아야겠다. */}
class Tab1ViewModel {
    private setTab1State: (state: Tab1State) => any;

    public constructor(
        setTab1State: (state: Tab1State) => any
    ) {
        this.setTab1State = setTab1State;
    }

    public async init() {
        const repository: PhotoRepository = NetworkPhotoRepository.getInstance();
        const photos: Photo[] = await repository.getPhotos();
        this.setTab1State(new Tab1State('hasValue', photos.map((photo) => new PhotoItem(photo))));
    }
}

export default Tab1ViewModel;