import APIPost from './apiPost.js';
import APIPhotos from './apiPhotos.js';

let post = new APIPost();
let photos = new APIPhotos();

photos.getPhoto();
photos.setPhoto();
setTimeout(() => photos.updatePhoto(), 2000);
setTimeout(() => photos.deletePhoto(), 8000);

post.getPost();
post.setPost();
setTimeout(() => post.updatePost(), 6000);
setTimeout(() => post.deletePost(), 10000);
