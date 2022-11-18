import React, {useState} from "react";
import HeaderAdmin from "./HeaderAdmin";


//Styles

import "./css/AdminRanchitos.css"
import CreateRanchito from "./CreateRanchito";
import EditRanchito from "./EditRanchito";

export default function AdminRanchitos(prop){


    const [interfaz, setUI] = useState(<EditRanchito/>)

    function crearRanchito(event){
        event.preventDefault()
        setUI(<CreateRanchito/>)
    }
    function editarRanchito(event){
        event.preventDefault()
        setUI(<EditRanchito/>)
    }
    return <>
        <HeaderAdmin/>
        <div className={"container menu_options"}>
            <button name={"crear-ranchito-btn"} type={"submit"} className={"btn btn-primary"} style={{marginRight:"10px"}} onClick={crearRanchito}>Crear Ranchito</button>
            <button name={"editar_ranchito_btn"} type={"submit"} className={"btn btn-primary"} onClick={editarRanchito}>Editar Ranchito</button>
        </div>
        {interfaz}
    </>

}
