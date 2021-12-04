import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    'getAllAlbums': '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'getAlbumById': '/data/albums/',
    'createAlbum': '/data/albums',
    'deleteAlbum': '/data/albums/',
    'editAlbum': '/data/albums/',
    'searchAlbum': (query) => `/data/albums?where=name%20LIKE%20%22${encodeURIComponent(query)}%22`
}


export function getAllAlbums(){
    return api.get(endpoints.getAllAlbums);
}

export function getAlbumById(id){
    return api.get(endpoints.getAlbumById + id);
}

export function searchAlbum(query){
    return api.get(endpoints.searchAlbum(query));
}

export function createAlbum(data){
    return api.post(endpoints.createAlbum, data);
}

export function deleteAlbum(id){
    return api.del(endpoints.deleteAlbum + id);
}

export function editAlbum(id, data){
    return api.put(endpoints.editAlbum + id, data);
}