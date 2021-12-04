import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    'getAllCars': '/data/cars?sortBy=_createdOn%20desc',
    'createCars': '/data/cars',
    'getCarById': '/data/cars/',
    'deleteCar': '/data/cars/',
    'editCar': '/data/cars/',
    'getAllUserCars': (userId)=>`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    'searchCar': (query) => `/data/cars?where=year%3D${query}`
}

export async function getAllCars(){
    return api.get(endpoints.getAllCars);
}

export async function createCarPost(data){
    return api.post(endpoints.createCars, data);
}

export async function getCarById(id){
    return api.get(endpoints.getCarById + id);
}

export async function deleteCar(id){
    return api.del(endpoints.deleteCar + id);
}

export async function editCar(id, data){
    return api.put(endpoints.editCar + id, data);
}

export async function getAllUserCars(id){
    return api.get(endpoints.getAllUserCars(id));
}

export async function searchCar(query){
    return api.get(endpoints.searchCar(query));
}
