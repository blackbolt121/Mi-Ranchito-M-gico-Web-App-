//Adding react libraries
import {Fragment, useEffect, useState} from "react";
//Adiing componentes
import Header from "../Header";
import RanchitoMagico from "../RanchitoMagico";
//Adding styles
import "../../css/VisitarGo.css";
import {useParams} from "react-router-dom";
import Actividad from "./Actividad";
import network from "../network";

const VisitarGo = () =>{
    const {id} = useParams();
    let [actividades, setActividades] = useState()
    const visit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/visita",{
            method: "POST",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/x-www-form-urlencoded",
            body : new URLSearchParams({
                "x-token" : localStorage.getItem("x-token"),
                "ranchito":id
            })
        }).then(response => {
            if(response.ok){
                alert("Visita agregada a sus rutas");
                location.href="/dashboard/visitar";
            }
            if(response.status === 404){
                return response.text();
            }
        }).then(response => {
            console.log(response)
        }).catch(error =>
            alert(error.message)
        )
    }
    const Add = () => {
        return <form onSubmit={visit} className={"VistGo__add"}>
            <button type={"submit"}><i className="fas fa-plus"></i> Visitar</button>
        </form>
    }
    useEffect(()=>{
        fetch(`http://${network.ip}/api/actividad/${id}`)
            .then(response => response.json())
            .then(response => setActividades(response.map(x=><Actividad
                nombre={x.nombre}
                descripcion={x.descripcion}
                telefono={x.telefono}
                latitud={x.latitud}
                longitud={x.longitud}
                categoria={x.categoria}
            />)))
    },[])
    return <Fragment>
        {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
        <Header/>
        <RanchitoMagico upper={<Add/>}/>
        <div className={"card_container"}>
            {actividades}
        </div>
    </Fragment>
}
export default VisitarGo;
/*


 */
