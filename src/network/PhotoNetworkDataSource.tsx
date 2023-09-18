import Photo from '../model/Photo';

const PhotoNetworkDataSource = {
    getPhotos: async(): Photo[] => {
       const response = await fetch('https://jsonplaceholder.typicode.com/photos');
       const result = await response.json();
       return result;
   }
}

export default PhotoNetworkDataSource;