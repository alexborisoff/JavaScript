const listPosts = document.getElementById('listPosts');
const btnFindPost = document.getElementById('findPost');
const inputValue = document.getElementById('inputValue');


btnFindPost.addEventListener('click', () => {  
    listPosts.innerHTML = '';
    const p = document.createElement('p');
    if (inputValue.value !== '') {
        listPosts.append(p);
        fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.value}`)
            .then(response => {
                response.json()

                    .then(json => {    
                        p.innerHTML = `user Id: ${json.userId} <br>
                                        id: ${json.id} <br>
                                        title: ${json.title} <br>
                                        body: ${json.body} <br>`;
                    });
            })
    }   
})