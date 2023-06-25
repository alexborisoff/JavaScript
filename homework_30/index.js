import APIPost from './apiPost.js';
import APIPhotos from './apiPhotos.js';

let photos = new APIPhotos();

photos.getPhoto();
photos.setPhoto();
setTimeout(() => photos.updatePhoto(), 2000);
setTimeout(() => photos.deletePhoto(), 8000);

APIPost.getPost();
APIPost.setPost();
setTimeout(() => APIPost.updatePost(), 6000);
setTimeout(() => APIPost.deletePost(), 10000);
