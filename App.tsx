import React from 'react';
import {RecoilRoot} from 'recoil';
import HomeScreen from './src/ui/HomeScreen';

const App = () => {
    return (
        <RecoilRoot>
            <HomeScreen />
        </RecoilRoot>
    );
}

export default App;