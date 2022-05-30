import Map from "./Map";
export default function GoRanchitoDiv(props){
    const add = (e) => {
        e.preventDefault()
    }
    return <div className={"ranchito__show"}>
        {props.upper}
        <img width={"400px"} src={props.imagen}/>
        <div className={"ranchito__show--title"}>
            <h3>{props.ciudad}</h3>
            <h4><i className="fas fa-map-marker-alt map_icon"></i>{props.estado}</h4>
        </div>
        <p>{props.description}</p>
        <Map latitud={props.latitud} longitud={props.longitud}/>
        {props.lower}
    </div>
}
GoRanchitoDiv.defaultProps = {
    imagen:"https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg",
    ciudad: "Querétaro",
    estado: "Queretaro",
    description: "una descripcion chafa",
    longitud: 0,
    latitud: 0,
    upper: <></>,
    lower: <></>
}
