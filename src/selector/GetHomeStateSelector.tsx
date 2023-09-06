import {selector} from 'recoil';
import getPhotosSelector from './GetPhotosSelector';
import HomeState from '../model/HomeState';

const getHomeStateSelector = selector({
    key: 'getHomeState',
    get: async ({get}) => {
        console.debug('getHomeStateSelector()');
        const photos = get(getPhotosSelector);
        if (photos != undefined) {
            return new HomeState(false, photos);
        } else {
            return new HomeState(true, []);
        }
    }
});

export default getHomeStateSelector;