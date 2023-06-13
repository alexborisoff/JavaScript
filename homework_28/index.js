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
                        p.textContent = `user Id: ${json.userId} 
                                        id: ${json.id} 
                                        title: ${json.title}
                                        title: ${json.body}`;
                    });
            });
    }   
})