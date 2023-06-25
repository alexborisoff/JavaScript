export default class APIPhotos {
    getPhoto() {
        const list = document.getElementById('listPosts');
        const photo = document.createElement('p');
        const img = document.createElement('img');

        fetch('https://jsonplaceholder.typicode.com/photos/1')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                list.append(photo);
                photo.append(img);
                img.setAttribute('src', json.url);
            });
    }

    setPhoto() {
        const list = document.getElementById('listPosts');
        const photo = document.createElement('p');
        fetch('https://jsonplaceholder.typicode.com/photos', {
            metod: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            title: JSON.stringify('The best photo in the world'),
        })
            .then((response) => response.json())
            .then((json) => {
                list.append(photo);
                photo.innerHTML = 'Photo Data was updates';
            });
    }

    updatePhoto() {
        const list = document.getElementById('listPosts');
        const photo = document.createElement('p');
        fetch('https://jsonplaceholder.typicode.com/photos/1', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Updated Title for Photo',
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                list.append(photo);
                photo.innerText = `Updated title of Photo: ${json.title}`;
            });
    }

    deletePhoto() {
        fetch('https://jsonplaceholder.typicode.com/photos/1', {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Photo data was deleted');
            });
    }
}
