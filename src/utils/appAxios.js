import axios from "axios";
export const appAxios=axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:false,
    header:{
        tokenX:"myToken",
        "Content-Type":"application/json"
    }
});