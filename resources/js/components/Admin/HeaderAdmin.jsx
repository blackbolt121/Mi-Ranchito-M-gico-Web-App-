import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import {useState, Fragment} from "react";
const HeaderAdmin = (props)=>{
    const [menu, setMenu] = useState("hide");
    const [route, setRoutes] = useState({"Ranchito":"/admin/ranchitos","Usuarios":"/admin/usuarios","Cerrar Sesión":"/logout"})
    const [main, setMain] = useState({"Dashboard":"/admin/dashboard"})
    let click = (event) => {
        if(menu === "hide"){
            setMenu("");
        }else{
            setMenu("hide");
        }
    }
    let click2 = (event) => {
        if(menu!=="hide") click(event);
    }

    return <Fragment>
        <header>
            <a onClick={click}><i id={"menu"} className="fa-solid fa-bars"></i></a>
            <nav className="navbar">
                <Link onClick={click2} to={(localStorage.getItem("x-token")===null)?"/":"/admin/dashboard"}><img
                    className="navbar-img"
                    src={logo}
                    alt="Mi ranchito Magico"
                /></Link>
                <ul className={`navbar-ul ${menu}`}>
                    {Object.keys(route).map(x => <li key={route[x]}><Link className={"button btn btn-light"} onClick={click2} to={route[x]}>{x}</Link></li>)}
                    {Object.keys(main).map(x => <li key={main[x]}><Link className={"button btn btn-primary"} onClick={click2} to={main[x]}>{x}</Link></li>)}
                </ul>
            </nav>
        </header>
    </Fragment>



}
export default HeaderAdmin;
