//mismo o similar de lo visto en la sesion 2
//useState -> para tener un estado para q me diga q esto logeado
//useEffect -> para ver si hay un token y cargarlo al estado ()
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

//1* crear el contexto
const AuthContext = createContext();

//2* crear el provedor del contexto
function AuthProvider({ children }){
    const [isAuth, setIsAuth] = useState(false); //Estoy autentificado/logueado? si o no
    //¿como decodificamos el payload?
    const [userPayload, setUserPayload] = useState(null);//jwt paylod decodificado-datos del usuario

    const login = (token) =>{
        //guardamos el token en el localSotrage del navegador
        //Este dato permanece aun si el navegador se cierra y se vuelve a abrir
        localStorage.setItem("token", token);
        const decode = jwtDecode(token)//decodifica el payload del token
        setUserPayload(decode);
        setIsAuth(true);// ya iniciamos sesion? si
    };

    const logout = () => {
        //Eliminamos el token del localStorage del navegador
        localStorage.removeItem("token");
        setUserPayload(null);//borro el payload del estado
        setIsAuth(false);//no estoy logueado
    }

    useEffect(() => {
        //RECUPERAR EL TOKEN DEL LOCALSTORAGE,si no existe devolvera null
        const token = localStorage.getItem("token");//para recuperar token es con getItem, y para guardar token es con setItem
        if(token){
            const decode = jwtDecode(token);
            setUserPayload(decode);
            setIsAuth(true);
        }
    },[]);

    //mandamos el objeto
    const data = {
        isAuth,
        userPayload,
        login,
        logout
    };

    return(
        //return de un componente
        //value es el contexto que vas a compartir entre los distinos componentes
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }