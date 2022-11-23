import {useParams} from "react-router-dom"
import {useState} from "react";
import network from "../network";

export default function CommentText(props){
    let [comment, setComment] = useState("")
    const {id} = useParams()
    function submitComment(event){
        event.preventDefault()
        fetch(`http://${network.ip}/api/comment`,{
            method:"POST",
            "Content-Type":"application/json",
            accept:"application/json",
            body:JSON.stringify({
                "ranchito":id,
                "token":localStorage.getItem("x-token"),
                "comentario":comment
            })
        }).then(response => { return response.json()} )
            .then(response => {
                setComment("")
                window.location.reload(false)
                alert(response.status)
            })
            .catch(error => {
                alert("Fallo en subir tu opinión")
            })
    }

    return <>
        <div className={"comment__line"}>
            <img src={"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}/>
            <form onSubmit={submitComment} className={"comment__line--info"}>
                <p><strong>Tú: </strong></p>
                <textarea placeholder={"Agrega un comentario"} value={comment} onChange={(event)=>setComment(event.target.value)}></textarea>
                <button type={"submit"} className={"btn btn-danger"}>Comment</button>
            </form>
        </div>
    </>
}
