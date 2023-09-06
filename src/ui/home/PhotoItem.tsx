import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const PhotoItem = ({navigation, item}) => {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
                navigation.navigate('Photo', {
                    url: item.url,
                    title: item.title
                });
            }}
        >
            <Image
                source={{uri: item.thumbnailUrl}}
                style={{width: 80, height: 80}}
            />
            <Text style={{padding:8, fontSize:15}}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default PhotoItem;