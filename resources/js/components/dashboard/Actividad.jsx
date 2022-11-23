
export default function Actividad(props){

    let map = `https://maps.google.com/?q=${props.latitud},${props.longitud}`
    let telefono = "("+props.telefono.substring(0,3)+") "+props.telefono.substring(3,props.telefono.length)
    let telefonoRender = <a target={"_blank"} className={"card-text"} href={`tel:+52${props.telefono}`}><i className="fa-solid fa-phone"></i> {telefono}</a>
    return <>

        <div className={"visit_card"}>
            <div className={"card-title visit_title visit_card--title"}>{props.nombre}</div>
            <div className={"card-text"}>{props.descripcion}</div>
            <div className={"card-text"}>{props.categoria}</div>
            {(props.telefono != "")?telefonoRender:<></>}
            <a target={"_blank"} href={map}>Ubicación</a>
        </div>
    </>
}
Actividad.defaultProps = {
    nombre: "Actividad",
    descripcion: "descripcion",
    categoria: "categoria",
    telefono: "3232121812",
    latitud: "0.0",
    longitud: "0.0"
}
