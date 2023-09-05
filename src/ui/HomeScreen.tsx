import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    View
} from 'react-native';
import Photo from '../model/Photo';

const HomeScreen = () => {
    console.debug('HomeScreen()');
    const [isLoading, setLoading] = useState(true);
    const [photos, setPhotos] = useState<Photo[]>([]);

    const getPhotos = async () => {
        console.debug('HomeScreen.getPhotos()');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const photos = await response.json();
            setPhotos(photos);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.debug('HomeScreen.useEffect()');
        getPhotos();
    }, []);

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