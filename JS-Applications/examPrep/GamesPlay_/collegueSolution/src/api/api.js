import { clearUserData, getUserData, setUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (response.ok !== true) {
            if (response.status === 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        try{
            return response.json()
        } catch(err){
            return response;
        }
    }
    catch (err) {
        alert(err.message);
        throw err;
    }
}

function createOptions(method = "get", body) {
    const options = {
        method,
        headers: {}
    };

    if (body !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    const userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }
    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, body) {
    return request(url, createOptions('post', body));
}

export async function put(url, body) {
    return request(url, createOptions('put', body));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password });
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    setUserData(userData);
    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    setUserData(userData);
    return result;
}

export async function logout() {
    await get('/users/logout')
    clearUserData();
}