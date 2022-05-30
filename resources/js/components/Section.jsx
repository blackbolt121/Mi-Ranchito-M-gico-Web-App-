import {Link} from "react-router-dom";

export default function Section(props){
    return <div className={"ranchito__hero"}>
        <img width={"200px"} src={props.imagen}/>
        <h3>{props.ciudad}</h3>
        <h4><i className="fas fa-map-marker-alt map_icon"></i>{props.estado}</h4>
        <p>{props.description.substring(0,150)}...<Link to={`${props.url}/${props.id}`}>Ver más</Link></p>
    </div>
}
