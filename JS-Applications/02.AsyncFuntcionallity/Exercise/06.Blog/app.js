function attachEvents() {
    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let viewPostBtn = document.getElementById('btnViewPost');
    let selectMenu = document.getElementById('posts');
    let titleH1 = document.getElementById('post-title');
    let ulPostBody = document.getElementById('post-body');
    let commentsUl = document.getElementById('post-comments');
    viewPostBtn.addEventListener('click', viewPost);
    loadPostsBtn.addEventListener('click', loadPosts);


    async function loadPosts(){
        let url = `http://localhost:3030/jsonstore/blog/posts`;
        let response = await fetch(url);
        try {
            if(response.status != 200){
                throw new Error(`Error!`);
            }else {
                let data = await response.json();
                let dataValues = Object.values(data);

                for(let element of dataValues){
                    let optionElement = document.createElement('option');
                    optionElement.value = element.id;
                    optionElement.textContent = element.title;
                    selectMenu.appendChild(optionElement);
                }

            }
        } catch (error) {
            alert(error.message)
        }

    }


    async function viewPost(ev){
        ulPostBody.replaceChildren();
        commentsUl.replaceChildren();
        titleH1.textContent = `Loading...`;
        let postUrl = `http://localhost:3030/jsonstore/blog/posts/${selectMenu.value}`;
        let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
        document.querySelector('h2').textContent = `Loading...`

        let postResponse = await fetch(postUrl);
        try {
            if(postResponse.status != 200){
                throw new Error(`Error`);
            }else {
                let postData = await postResponse.json();
                titleH1.textContent = postData.title;
                let pElement = document.createElement('p');
                pElement.setAttribute('id', 'post-body');
                pElement.textContent = postData.body;
                ulPostBody.appendChild(pElement);
                
                let commentsResponse = await fetch(commentsUrl);
                if(commentsResponse.status != 200){
                    throw new Error(`Error`);
                }else {
                    let commentsData = await commentsResponse.json();
                    let commentsDataValues = Object.values(commentsData);
                    commentsDataValues = commentsDataValues.filter(e => e.postId == selectMenu.value);
                    document.querySelector('h2').textContent = `Comments`
                    for(let element of commentsDataValues){
                        let liElement = document.createElement('li');
                        liElement.setAttribute('id', `${element.id}`);
                        liElement.textContent = element.text;
                        commentsUl.appendChild(liElement);

                    }
                }
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();