import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    View
} from 'react-native';
import HomeState from './HomeState';

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
        default:
            return (<Text>Loading...</Text>);
    }
}

export default HomeScreen;