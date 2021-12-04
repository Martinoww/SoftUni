const host = 'http://localhost:3030/jsonstore/collections'
async function request(url, method = 'get', data){

const options = {
    method
};
if(data != undefined){
    options.headers = {
        'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(data);
}

    try {
        const response = await fetch(host + url, options);
        if(response.ok != true){
            const err = await response.json();
            throw new Error(err.message);
        }
        if(response.status == 204){
            return response
        }else {
            return response.json();
        }
    } catch (error) {
        alert(error.message);
    }
}


export async function getAllBooks(){
    return request('/books');
}

export async function createBook(data){
    return request('/books','post', data);
}


export async function editBook(id, data){
    return request('/books/'+id, 'put' ,data);
}

export async function deleteBook(id){
    return request('/books/'+id, 'delete');
}
