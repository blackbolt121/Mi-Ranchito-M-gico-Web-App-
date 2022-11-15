import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import {Link} from "react-router-dom";
const AdminDashboard = (event) => {


    return <>

        <HeaderAdmin/>
        <div>
            <div className={"container_actions"}>
                <div className={"action_container"}>
                    <img src={"https://mexicorutamagica.mx/wp-content/uploads/2021/11/feria-esfera-tlalpujahua.jpg"} alt={"accion1"}/>
                    <h1><i style={{color: "red"}} className="fas fa-map-marker-alt"></i>Ranchitos</h1>
                    <Link className={"dashboard_btn"} to={"/admin/ranchitos"}>Ir</Link>
                </div>
                <div className={"action_container"}>
                    <img src={"https://img.freepik.com/fotos-premium/jovenes-turistas-descubriendo-ciudad_23-2147643246.jpg?w=2000"} alt={"accion1"}/>
                    <div>
                        <h1><i style={{color: "red"}} className="fas fa-plane"></i>Usuarios</h1>
                    </div>
                    <Link className={"dashboard_btn"} to={"/dashboard/visitar"}>Ir</Link>
                </div>
            </div>
        </div>

    </>
}
export default AdminDashboard;
