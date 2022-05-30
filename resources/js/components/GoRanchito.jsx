import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NotFound from "./NotFound";
import GoRanchitoDiv from "./GoRanchitoDiv";
export default function GoRanchito(){
    let [ranchito, setRanchito] = useState(<div className={"container"}>Cargando...</div>)
    let {id} = useParams();
    useEffect(() => {
        fetch(`/api/ranchitos/${id}`)
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }
            })
            .then(response => {
                console.log(response);
                let city = response[0];
                setRanchito(<GoRanchitoDiv
                    ciudad={city.ciudad}
                    imagen={city.imagen}
                    estado={city.estado}
                    description={city.descripcion}
                    latitud={city.latitud}
                    longitud={city.longitud}/>)
            })
            .catch(error => setRanchito(<><NotFound/><Link to={"/go"}>Ver otros pueblitos mágicos</Link></>))
    },[]);
    return <>
        {ranchito}
    </>
}
