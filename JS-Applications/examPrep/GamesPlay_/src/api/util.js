export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}
export function setUserData(user){
    return sessionStorage.setItem('userData', JSON.stringify(user));
}
export function removeUserData(){
    return sessionStorage.removeItem('userData');
}