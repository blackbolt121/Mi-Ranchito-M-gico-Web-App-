import {Fragment} from "react";
import {Navigate} from "react-router";
import {useState} from "react";
import {useEffect} from "react";
//Componentes
import Header from "../Header";

import "../../css/Mapa.css";
import {uniq} from "lodash";


const Mapa = () => {

    const update = () => {
        fetch("http://localhost:8000/api/visitas", {
            method: "POST",
            "Content-Type": "application/x-www-form-urlencode",
            "Accept": "application/x-www-form-urlencode",
            body: new URLSearchParams({
                "x-token": localStorage.getItem("x-token")
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(resopnse => {
                setRanchitos(resopnse.map(ranchito => {
                    return <ListRutas img={ranchito.imagen} nombre={ranchito.nombre} id={ranchito.id}/>
                }))
            })
            .catch(error => console.log(error.message));
    }
    const ListRutas = (props) => {
        let id_component = uniq("visit_list-");
        const visited = (event) => {
            event.preventDefault();
            fetch("http://localhost:8000/api/visited", {
                method: "POST",
                "Content-Type": "x-www-form-urlencoded",
                "Accept": "x-www-form-urlencoded",
                body: new URLSearchParams({
                    "x-token": localStorage.getItem("x-token"),
                    "ranchito": props.id
                })
            }).then(response => {
                if (response.ok) {
                    update();
                }
            })
                .catch(error => console.log(error.message));
        }
        return <div id={id_component} className={"list__rutas"}>
            <img src={props.img} alt={"Imagen de ranchito"}/>
            <div>
                <h2>
                    {props.nombre}
                </h2>
                <div className={"list__rutas--text"}>
                    <form onSubmit={visited}>
                        <button className={"btn btn-primary"}>Visitado</button>
                    </form>
                    <a href={"https://www.google.com"}>Ir</a>
                </div>
            </div>

        </div>
    }
    ListRutas.defaultProps = {
        id: 1,
        img: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2018-01/cuitzeo-michoacan.jpg",
        nombre: "Cuitzeo"
    }

    const [ranchitos, setRanchitos] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/api/visitas", {
            method: "POST",
            "Content-Type": "application/x-www-form-urlencode",
            "Accept": "application/x-www-form-urlencode",
            body: new URLSearchParams({
                "x-token": localStorage.getItem("x-token")
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(resopnse => {
                setRanchitos(resopnse.map(ranchito => {
                    return <ListRutas img={ranchito.imagen} nombre={ranchito.nombre} id={ranchito.id}/>
                }))
            })
            .catch(error => console.log(error.message));
    }, [])
    return <Fragment>
        {(localStorage.getItem("x-token") === null) ? <Navigate to={"/login"}/> : <></>}
        <Header/>
        <h1 className={"awesome__title"}>Mapa</h1>
        {ranchitos}
    </Fragment>
}
export default Mapa;
