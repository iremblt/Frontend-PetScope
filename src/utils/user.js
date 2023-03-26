import { appAxios } from "./appAxios"

export function getUserList(){
    return appAxios.get('/User/List')
}
export function getUserDetail(id){
    return appAxios.get(`/User/Detail/${id}`)
}
export function getUserPetFlyers(id){
    return appAxios.get(`/User/${id}/Get/Flyers`)
}
export function getActiveUser(token){
    return appAxios.get(`User/Active/User`,token)
}
export function register(data){
    return appAxios.post(`/User/Add`,data)
}
export function login(data){
    return appAxios.post(`/User/Login`,data)
}
export function logout(token){
    return appAxios.post(`/User/Logout`,token)
}
export function patchUser(id,data){
    return appAxios.put(`/User/Update/${id}`,data)
}
export function patchPasswordUser(id,password){
    return appAxios.put(`/User/${id}/Change/Password`,password)
}
export function patchStatusUser(id,status){
    return appAxios.put(`/User/${id}/Change/Status`,status)
}
export function patchEmailUser(id,email){
    return appAxios.put(`/User/${id}/Change/Email`,email)
}
export function deleteUser(id){
    return appAxios.delete(`/User/Change/Remove/${id}`)
}