import React from 'react';
import {Text} from 'react-native';
import {RecoilRoot} from 'recoil';
import HomeScreen from './src/ui/HomeScreen';

const App = () => {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<Text>Loading...</Text>}>
                <HomeScreen />
            </React.Suspense>
        </RecoilRoot>
    );
}

export default App;