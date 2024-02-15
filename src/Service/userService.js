//LLAMADA A LA API Y USAMOS AXIOS
//LE PASAMOSUN ENDPOINT PARA QUE TRAIGA LA DATA
//1.-IMPORTAR AXIOS
import axios from "axios";

//endpoint
const BASE_URL = 'http://localhost:3000' //esto lo podemos cambiar si subimos el github a render
//ocupo mandar informacion
//registrar un usuaio
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data);
//Login
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data);
//informacion de un solo usuario
const getMeUserService = (jwToken) => axios.get(`${BASE_URL}/users/me`, { headers: {Authorization: `Bearer ${jwToken}`}});

export {
    registerUserService,
    loginUserService,
    getMeUserService
}