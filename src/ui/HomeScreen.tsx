import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValueLoadable} from 'recoil';
import HomeState from '../model/HomeState';
import getHomeStateSelector from '../selector/GetHomeStateSelector';
import PhotoItem from './PhotoItem';

const HomeScreen = () => {
    console.debug('HomeScreen()');
    const homeState = useRecoilValueLoadable(getHomeStateSelector);

    if (homeState == null || homeState == undefined) {
        return (<Text>Init...</Text>);
    }

    switch(homeState.state) {
        case 'loading':
            return (<Text>Loading...</Text>);
        case 'hasValue':
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={homeState.contents.photos}
                        renderItem={({item}) =>
                            <PhotoItem item={item} />
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

export default HomeScreen;