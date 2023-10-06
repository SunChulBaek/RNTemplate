import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Photo from '../../../model/Photo';
import MyImage from '../../common/MyImage';

export interface IPhotoItem {
    itemContent({navigation}): JSX.Element;
}

export class PhotoItem implements IPhotoItem {
    private item: Photo;

    public constructor(item: Photo) {
        this.item = item;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <TouchableOpacity
                style={{flexDirection: 'row', backgroundColor: 'white'}}
                onPress={() => {
                    navigation.navigate('Photo', {
                        url: this.item.url,
                        title: this.item.title
                    });
                }}
            >
                <MyImage
                    style={{width: 80, height: 80}}
                    source={{uri: this.item.thumbnailUrl}} />
                <Text style={{padding:8, fontSize:15, color: 'black'}}>
                    {this.item.title}
                </Text>
            </TouchableOpacity>
        );
    }
}