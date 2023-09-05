import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import HomeState from './HomeState';
import PhotoItem from './PhotoItem';

const HomeScreen = () => {
    console.debug('HomeScreen()');
    const [homeState, setHomeState] = useState(new HomeState(true, []));

    const getPhotos = async () => {
        console.debug('HomeScreen.getPhotos()');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const photos = await response.json();
            setHomeState(new HomeState(false, photos));
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        console.debug('HomeScreen.useEffect()');
        getPhotos();
    }, []);

    switch(homeState.isLoading) {
        case false:
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={homeState.photos}
                        renderItem={({item}) =>
                            <PhotoItem item={item} />
                        }
                    />
                </View>
            );
        default:
            return (<Text>Loading...</Text>);
    }
}

export default HomeScreen;