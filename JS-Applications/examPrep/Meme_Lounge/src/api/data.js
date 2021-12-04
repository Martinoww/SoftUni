import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    'getAllMemes':'/data/memes?sortBy=_createdOn%20desc',
    'getAllUserMemes': (userId)=> `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    'getMemeById':'/data/memes/',
    'createMeme': '/data/memes',
    'editMeme': '/data/memes/',
    'deleteMeme': '/data/memes/'
}


export function getAllMemes(){
    return api.get(endpoints.getAllMemes);
}

export function getMemeById(id){
    return api.get(endpoints.getMemeById + id);
}

export function getAllUserMemes(userId){
    return api.get(endpoints.getAllUserMemes(userId));
}

export async function createMeme(data){
    return api.post(endpoints.createMeme, data)
}

export async function editMeme(id, data){
    return api.put(endpoints.editMeme + id, data)
}

export function deleteMeme(id){
    return api.del(endpoints.deleteMeme + id);
}