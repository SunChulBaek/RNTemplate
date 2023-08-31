/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    View
} from 'react-native';

type Photo = {
    albumId: int,
    id: int,
    title: string,
    url: string,
    thumbnailUrl: string
};

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Photo[]>([]);

    const getPhotos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const json = await response.json();
            setData(json);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={data}
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

export default App;
