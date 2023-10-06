import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import Tab1ViewModel from './Tab1ViewModel';
import Tab1State from './Tab1State';

const Tab1Screen = ({navigation}) => {
    const [tab1State, setTab1State] = useState(new Tab1State('loading', []));
    const [viewModel, setViewModel] = useState(new Tab1ViewModel(setTab1State));
    console.debug(`Tab1Screen(${tab1State.state})`);

    useEffect(() => {
        viewModel.init();
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
                        data={tab1State.items}
                        renderItem={({item, index, separators}) =>
                            item.itemContent({navigation: navigation})
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