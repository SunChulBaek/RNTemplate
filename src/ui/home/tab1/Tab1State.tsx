import IPhotoItem from './PhotoItem';

class Tab1State {
    private state: string;
    private items: IPhotoItem[];

    constructor(state: string, items: IPhotoItem[]) {
        this.state = state;
        this.items = items;
    }
}

export default Tab1State;