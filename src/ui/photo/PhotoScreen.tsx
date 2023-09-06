import {
    View,
    Image,
    Text
} from 'react-native';

const PhotoScreen = ({navigation, route}) => {
    return (
        <View>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: route.params.url}}
            />
            <Text>{route.params.title}</Text>
        </View>
    );
}

export default PhotoScreen;