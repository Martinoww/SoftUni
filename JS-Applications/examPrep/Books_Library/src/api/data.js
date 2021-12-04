import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    'allBooks': '/data/books?sortBy=_createdOn%20desc',
    'addBook': '/data/books',
    'bookDetails': '/data/books/',
    'editBook': '/data/books/',
    'deleteBook': '/data/books/',
    'getMyBooks': (userId)=>`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    'getAllLikesForASpecificBook': (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    'getAllUserLikesForASpecificBook': (bookId, userId) =>`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'makeLike': '/data/likes',
}

export async function getAllBooks(){
    return api.get(endpoints.allBooks);
}

export async function createBook(data){
    return api.post(endpoints.addBook, data);
}

export async function getBookById(id){
    return api.get(endpoints.bookDetails + id);
}

export async function editBook(id, data){
    return api.put(endpoints.editBook + id, data);
}

export async function deleteBook(id){
    return api.del(endpoints.editBook + id);
}

export async function getAllMyBooks(userId){
    return api.get(endpoints.getMyBooks(userId));
}

export async function getAllLikesForASpecificBook(bookId){
    return api.get(endpoints.getAllLikesForASpecificBook(bookId));
}

export async function getAllUserLikesForASpecificBook(bookId, userId){
    return api.get(endpoints.getAllUserLikesForASpecificBook(bookId, userId));
}

export async function makeLike(bookId){
    return api.post(endpoints.makeLike, {bookId});
}