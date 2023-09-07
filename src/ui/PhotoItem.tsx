import {
    Image,
    Text,
    View
} from 'react-native';

const PhotoItem = ({item}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Image
                source={{uri: item.thumbnailUrl}}
                style={{width: 80, height: 80}}
            />
            <Text style={{padding:8, fontSize:15}}>{item.title}</Text>
        </View>
    );
}

export default PhotoItem;