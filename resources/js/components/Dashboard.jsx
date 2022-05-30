import Header from "./Header";
import {Fragment} from "react";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";
import "../css/Dashboard.css";

const Dashboard = () => {


    {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
    return <div>
        <Header routes={{"Rutas":"/dashboard/mapa","Visitar":"/dashboard/visitar","Recomendaciones":"/dashboard/recomendaciones"}} main={{"Cerrar Sesión":"/logout"}}/>
        <div className={"container_actions"}>
            <div className={"action_container"}>
                <img src={"https://www.beetrack.com/hs-fs/hubfs/Rutas%20punto%20a%20punto.jpg?width=720&name=Rutas%20punto%20a%20punto.jpg"} alt={"accion1"}/>
                <h1><i style={{color: "red"}} className="fas fa-map-marker-alt"></i>Mi Ruta</h1>
                <Link className={"dashboard_btn"} to={"/dashboard/mapa"}>Ir</Link>
            </div>
            <div className={"action_container"}>
                <img src={"https://diarioresponsable.com/images/opinion/turismo%200_4487044039.jpg"} alt={"accion1"}/>
                <div>
                    <h1><i style={{color: "red"}} className="fas fa-plane"></i>Visitar</h1>
                </div>
                <Link className={"dashboard_btn"} to={"/dashboard/visitar"}>Ir</Link>
            </div>
            <div className={"action_container"}>
                <img src={"https://foodandtravel.mx/wp-content/uploads/2021/11/ChignahuapanPueblosMagicos.jpg"} alt={"accion1"}/>
                <h1><i style={{color: "red"}} className="fas fa-heart"></i>Recomendanciones</h1>
                <Link className={"dashboard_btn"} to={"/dashboard/recomendaciones"}>Ir</Link>
            </div>
        </div>
    </div>
}
export default Dashboard;
