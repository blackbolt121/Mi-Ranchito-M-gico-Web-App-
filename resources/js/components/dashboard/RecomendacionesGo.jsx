import {Navigate} from "react-router";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";

import RanchitoMagico from "../RanchitoMagico";
import Header from "../Header";
import CommentText from "./CommentText";
import Comment from "./Comment"


import "../../css/RecomendacionesGo.css";
import network from "../network";



export default function RecomendacionesGo(){
    let {id} = useParams()
    let [comments,setComments] = useState([])
    useEffect(()=>{
        fetch(`http://${network.ip}/api/recomendaciones/${id}`)
            .then(response => response.json())
            .then(comentarios => {
                if(comentarios.length > 0) setComments(comentarios.map(comentario => <Comment comment={comentario.comentario}/>))
            })
    }, [])
    return <>
        {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
        <Header/>
        <RanchitoMagico/>
        <div className={"comment__area"}>
            {comments}
            <CommentText/>
        </div>

    </>
}
