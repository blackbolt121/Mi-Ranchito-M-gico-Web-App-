import {useEffect, useState} from "react";
import Section from "./Section";
import NotFound from "./NotFound";
export default function ListRanchitos(props){
    let [content, setContent] = useState([])
    useEffect(() => {
        fetch("/api/ranchitos", {
            "Content-Type": "application/json",
            "method": "GET",
            "Accept": "application/json"
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                console.log("error")
            }
        }).then(response => {
            setContent(response.map(ranchito => {
                return <Section key={ranchito.ciudad} imagen={ranchito.imagen} ciudad={ranchito.ciudad}
                                estado={ranchito.estado} description={ranchito.descripcion} id={ranchito.id} url={props.url}/>
            }));
        }).catch(error => {
            console.log("error")
            setContent(<NotFound/>)
        });
    }, [])
    return <div className={"ranchito__container"}>
        {content}
    </div>;
}
ListRanchitos.defaultProps = {
    url: "/dashboard/visitar"
}
