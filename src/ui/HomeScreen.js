import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    View
} from 'react-native';

const HomeScreen = ({photos}) => {
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={photos}
                renderItem={({item}) =>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={{uri: item.thumbnailUrl}}
                            style={{width: 80, height: 80}}
                        />
                        <Text style={{padding:8, fontSize:15}}>{item.title}</Text>
                    </View>
                }
            />
        </View>
    );
}

export default HomeScreen;