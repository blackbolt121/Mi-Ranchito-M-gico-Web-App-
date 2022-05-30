import {Fragment} from "react";
import Header from "../Header";
import ListRanchitos from "../ListRanchitos";
import {Navigate} from "react-router";
const Recomendaciones = () => {
    return <Fragment>
        {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
        <Header routes={{"Rutas":"/dashboard/mapa","Visitar":"/dashboard/visitar","Recomendaciones":"/dashboard/recomendaciones","Dashboard":"/dashboard"}} main={{"Cerrar Sesión":"/logout"}}/>
        <h1 className={"awesome__title"}>Recomendaciones</h1>
        <ListRanchitos url={"/dashboard/recomendaciones"}/>
    </Fragment>
}
export default Recomendaciones;
