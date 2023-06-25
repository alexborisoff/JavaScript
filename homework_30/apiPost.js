export default class APIPost {
    static getPost() {
        const list = document.getElementById('listPosts');
        const post = document.createElement('p');

        fetch('https://jsonplaceholder.typicode.com/posts/100')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                list.append(post);
                post.innerHTML = json.userId + ' ' + json.body;
            });
    }

    static setPost() {
        const list = document.getElementById('listPosts');
        const post = document.createElement('p');

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likes: '25 likes',
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                list.append(post);
                post.innerHTML = json.likes;
            });
    }

    static updatePost() {
        const list = document.getElementById('listPosts');

        fetch('https://jsonplaceholder.typicode.com/posts/100', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body: 'Updated BODY for Post number 100',
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                list.innerText = `${json.body}`;
            });
    }

    static deletePost() {
        const list = document.getElementById('listPosts');
        const post = document.createElement('p');
        fetch('https://jsonplaceholder.typicode.com/posts/100', {
            method: 'DELETE',
        }).then(() => {
            list.append(post);
            post.innerHTML = 'Post data was deleted successfully';
        });
    }
}
