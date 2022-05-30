import { Fragment }from "react";
import logo from "../images/logo.png";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Header(props) {

    const [menu, setMenu] = useState("hide");
    const [route, setRoutes] = useState(props.routes)
    const [main, setMain] = useState(props.main)
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
    useEffect(() => {
        setRoutes((localStorage.getItem("x-token")===null)?{"Donde Ir":"/go","Que hacer":"/todo"}:{"Rutas":"/dashboard/mapa","Visitar":"/dashboard/visitar","Recomendaciones":"/dashboard/recomendaciones"});
        let def = {"Cerrar Sesión":"/logout"}
        if(localStorage.getItem("x-token")===null){
            def = (location.pathname !=="/login")?{"Iniciar Sesión":"/login"}:{"Registrar":"/register"};
        }
        setMain(def)
    }, []);

    return <Fragment>
        <header>
            <a onClick={click}><i id={"menu"} className="fa-solid fa-bars"></i></a>
            <nav className="navbar">
                <Link onClick={click2} to={(localStorage.getItem("x-token")===null)?"/":"/dashboard"}><img
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
Header.defaultProps = {
    routes: (localStorage.getItem("x-token")===null)?{"Donde Ir":"/go","Que hacer":"/todo"}:{"Rutas":"/dashboard/mapa","Visitar":"/dashboard/visitar","Recomendaciones":"/dashboard/recomendaciones","Cerrar Sesión":"/logout"},
    main: (localStorage.getItem("x-token")===null)?{"Iniciar Sesión":"/login"}:{"Dashboard":"/dashboard"}
}
