import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import GoRanchitoDiv from "./GoRanchitoDiv";
import NotFound from "./NotFound";

export default function RanchitoMagico(props){
    let [ranchito, setRanchito] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch(`/api/ranchitos/${id}`)
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }
            })
            .then(response => {
                let city = response[0];
                setRanchito(<GoRanchitoDiv
                    ciudad={city.ciudad}
                    imagen={city.imagen}
                    estado={city.estado}
                    description={city.descripcion}
                    latitud={city.latitud}
                    longitud={city.longitud}
                    upper={props.upper}
                    lower={props.lower}
                />)
            })
            .catch(error => {
                setRanchito(<><NotFound/><Link to={"/go"}>Ver otros pueblitos mágicos</Link></>
            )})
    },[]);
    return ranchito
}
RanchitoMagico.defaultProps = {
    upper: <></>,
    lower: <></>
}
