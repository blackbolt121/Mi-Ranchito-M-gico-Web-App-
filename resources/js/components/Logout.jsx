import {Navigate} from "react-router";

export default function Logout () {
    if(window.localStorage.getItem("x-token") !== null){
        console.log("Cerrando sesion");
        window.localStorage.clear();
        return <>
            <Navigate to={"/"} />
        </>
    }else{
        return <>
            <Navigate to={"/login"} />
        </>
    }
}
