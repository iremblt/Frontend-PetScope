import { appAxios } from "./appAxios"

export function getPetList(
    params = {
        // ileride date'e göre, türe göre, ilan türüne göre listeleme getir
    }
){
    return appAxios.get('/Pet/List',{params})
}
export function getPetDetail(id){
    return appAxios.get(`/Pet/Detail/${id}`)
}
export function postPet(data){
    return appAxios.post(`/Pet/Detail`,data)
}
export function recommendationPet(data){
    return appAxios.post(`/Pet/Recomendation`,data)
}
export function patchPet(id,data){
    return appAxios.put(`/Pet/Update/${id}`,data)
}
export function patchStatusPet(id,status){
    return appAxios.put(`/Pet/Change/Status/${id}`,status)
}
export function deletePet(id){
    return appAxios.delete(`/Pet/Change/Remove/${id}`)
}