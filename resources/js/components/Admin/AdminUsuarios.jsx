import React, {react, useState,} from "react";
import HeaderAdmin from "./HeaderAdmin";
import ViewRanchitosSeleccionados from "./ViewRanchitosSeleccionados";
import ViewComments from "./ViewComments";

const AdminUsuarios = (props) => {
    const [interfaz, setUI] = useState(<EditRanchito/>)

    function verRanchitosSeleccinoados(event){
        event.preventDefault()
        setUI(<ViewRanchitosSeleccionados/>)
    }
    function verComentariosUsuarios(event){
        event.preventDefault()
        setUI(<ViewComments/>)
    }
    return <>
        <HeaderAdmin/>
        <div className={"container menu_options"}>
            <button name={"crear-ranchito-btn"} type={"submit"} className={"btn btn-primary"} style={{marginRight:"10px"}} onClick={verRanchitosSeleccinoados}>Ver destinos</button>
            <button name={"editar_ranchito_btn"} type={"submit"} className={"btn btn-primary"} onClick={verComentariosUsuarios}>Ver comentarios</button>
        </div>
        {interfaz}
    </>
}
export default AdminUsuarios;
