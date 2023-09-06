import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValue} from 'recoil';
import HomeState from '../model/HomeState';
import getHomeStateSelector from '../selector/GetHomeStateSelector';
import PhotoItem from './PhotoItem';

const HomeScreen = () => {
    console.debug('HomeScreen()');
    const homeState = useRecoilValue(getHomeStateSelector);

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
}

export default HomeScreen;