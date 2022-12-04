export function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function saveLocalStorage(key, value){
    return localStorage.setItem(key, JSON.stringify(value));
}