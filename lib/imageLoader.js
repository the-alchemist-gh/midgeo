import { mediaURL } from './url';
export const getArtwork = (ref) => {
  return {
    portrait: mediaURL + ref + '_port.jpg',
    landscape: mediaURL + ref + '_land.jpg',
  }; 
};

