import Header from "./Header";
import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
function Section(props){
    return <div className={"ranchito__hero"}>
        <img width={"200px"} src={props.imagen}/>
        <h3>{props.ciudad}</h3>
        <h4><i className="fas fa-map-marker-alt map_icon"></i>{props.estado}</h4>
        <p>{props.description.substring(0,150)}...<Link to={`/go/${props.id}`}>Ver más</Link></p>
    </div>
}


export default function ToGo(){

    let [content, setContent] = useState([])
    useEffect(()=>{
        fetch("/api/ranchitos",{
            "Content-Type":"application/json",
            "method": "GET",
            "Accept": "application/json"
        }).then(response => {
            if(response.status === 200){
                return response.json()
            }else{
                console.log("error")
            }
        }).then(response => {
            setContent(response.map(ranchito => {
                return <Section key={ranchito.ciudad} imagen={ranchito.imagen} ciudad={ranchito.ciudad} estado={ranchito.estado} description={ranchito.descripcion} id={ranchito.id}/>
            }));
        }).catch(error => {
            console.log("error")
            return []
        });
    },[])
    return <>
    <Header/>
        <div className={"ranchito__container"}>
            {content}
        </div>
    </>
}
