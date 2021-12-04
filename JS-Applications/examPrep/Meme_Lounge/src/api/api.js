import { notify } from "../views/notify.js";
import { setUserData, getUserData, removeUserData } from "./util.js";

const host = 'http://localhost:3030';

async function request(url, options){
    try {
        const response = await fetch(host + url, options)
        if(response.ok != true){
            if(response.status === 403){
                sessionStorage.removeItem('userData');
            }
        }
        try {
            return await response.json();
        } catch (error) {
            return response;
        }
    } catch (error) {
        notify(error.message);
        throw error;
    }
}


function createOptions(method = 'get', data){
    let options = {
        method,
        headers:{},
    };

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();
    if(userData != null){
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url){
    return request(url, createOptions());
}

export async function post(url, data){
    return request(url, createOptions('post', data));
}

export async function put(url, data){
    return request(url, createOptions('put', data));
}

export async function del(url){
    return request(url, createOptions('delete'));
}

export async function login(email, password){
    const result = await post('/users/login',{email, password});

    const userData = {
        id: result._id,
        email: result.email,
        token: result.accessToken,
        username: result.username,
        gender: result.gender,
    }
    setUserData(userData);
}

export async function register(username, email, password, gender){
    const result = await post('/users/register',{username, email, password, gender});

    console.log(result);
    const userData = {
        id: result._id,
        email: result.email,
        token: result.accessToken,
        username: result.username,
        gender: result.gender,
    }
   setUserData(userData);
}

export async function logout(){
    await get('/users/logout')
    removeUserData();
}