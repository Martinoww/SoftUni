import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
   'getLatestGames': '/data/games?sortBy=_createdOn%20desc&distinct=category',
   'getAllGames': '/data/games?sortBy=_createdOn%20desc',
   'createGame': '/data/games',
   'getGameById': '/data/games/',
   'editGame': '/data/games/',
   'deleteGame': '/data/games/',
   'getAllCommentsForASpecificGame': (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
   'createComment': '/data/comments',   
}

export async function loadGames(){
    return api.get(endpoints.getLatestGames);
}

export async function getAllGames(){
    return api.get(endpoints.getAllGames);
}

export async function createGame(data){
    return api.post(endpoints.createGame, data);
}
export async function getGameById(id){
    return api.get(endpoints.getGameById + id);
}

export async function editGame(id, data){
    return api.put(endpoints.editGame + id, data);
}

export async function deleteGame(id){
    return api.del(endpoints.deleteGame + id);
}

export async function getAllCommentsForASpecificGame(gameId){
    return api.get(endpoints.getAllCommentsForASpecificGame(gameId));
}

export async function createComment(data){
    return api.post(endpoints.createComment, data);
}
