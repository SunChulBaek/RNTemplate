import Photo from '../model/Photo';

const getPhotos = async(): Photo[] => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await response.json();
    return result;
}

const PhotoNetworkDataSource = {
    getPhotos: getPhotos
}

export default PhotoNetworkDataSource;