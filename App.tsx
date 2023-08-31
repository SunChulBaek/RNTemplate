import React, {useEffect, useState} from 'react';
import Photo from './src/model/Photo';
import HomeScreen from './src/ui/HomeScreen';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [photos, setPhotos] = useState<Photo[]>([]);

    const getPhotos = async () => {
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
        getPhotos();
    }, []);

    return <HomeScreen photos={photos} />;
}

export default App;
