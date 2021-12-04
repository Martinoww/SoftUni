import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    'getAllItems': '/data/catalog',
    'getItemDetails': '/data/catalog/',
    'getAllUserItems': (userId)=> `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    'createItem': '/data/catalog',
    'deleteItem': '/data/catalog/',
    'editItem': '/data/catalog/',
    
}


export async function getAllFurnitures(){
    return api.get(endpoints.getAllItems);
}
export async function getFurnitureDetails(id){
    return api.get(endpoints.getItemDetails + id);
}
export async function createFurniture(data){
    return api.post(endpoints.createItem, data);
}
export async function editFurniture(id, data){
    return api.put(endpoints.editItem + id, data);
}
export async function deleteFurniture(id){
    return api.del(endpoints.deleteItem + id);
}
export async function getAllUserFurnitures(userId){
    return api.get(endpoints.getAllUserItems(userId));
}