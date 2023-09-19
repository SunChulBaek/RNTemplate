import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValueLoadable} from 'recoil';
import Tab1State from './Tab1State';
import getTab1StateSelector from '../../../selector/GetTab1StateSelector';
import PhotoItem from './PhotoItem';
import PhotoScreen from '../../photo/PhotoScreen';
import PhotoRepository from '../../../repository/PhotoRepository';
import NetworkPhotoRepository from '../../../repository/NetworkPhotoRepository';

const Tab1Screen = ({navigation}) => {
    const [tab1State, setTab1State] = useState(new Tab1State('loading', []));
    console.debug(`Tab1Screen(${tab1State.state})`);

    const getPhotos = async () => {
        const repository: PhotoRepository = new NetworkPhotoRepository();
        const photos = await repository.getPhotos();
        setTab1State(new Tab1State('hasValue', photos));
    }

    useEffect(() => {
        getPhotos();
    }, []);

    switch(tab1State.state) {
        case 'loading':
            return (
                <View
                    style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' />
                </View>
            );
        case 'hasValue':
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={tab1State.photos}
                        renderItem={({item}) =>
                            <PhotoItem navigation={navigation} item={item} />
                        }
                    />
                </View>
            );
        case 'hasError':
            return (<Text>Error...</Text>);
        default:
            return (<Text>XXX</Text>);
    }
}

export default Tab1Screen;