const sessionIdToUser = new Map();

function setUser(id:string , user:any){
    sessionIdToUser.set(id , user);
}
function getUser(id:string ){
    sessionIdToUser.get(id);
}

export {
    setUser,
    getUser
}