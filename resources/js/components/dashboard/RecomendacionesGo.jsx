import Header from "../Header";
import RanchitoMagico from "../RanchitoMagico";

import "../../css/RecomendacionesGo.css";
import {Navigate} from "react-router";
function Comment(props){
    return <>
        <div className={"comment__line"}>
            <img src={"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}/>
            <div className={"comment__line--info"}>
                <p><strong>{props.user}: </strong></p>
                <p className={"comment__text"}>{props.comment}</p>
            </div>
        </div>
    </>
}
Comment.defaultProps = {
    comment: "PFP is an acronym for profile picture. It does have other meanings, however, profile pic has become more common in recent years. The acronym has been rapidly adopted across all social networks and messengers across all user groups. Thus today it is mostly associated with one’s avatar or, in other words, profile picture.",
    user: "Usuario"
}
function CommentText(props){
    return <>
        <div className={"comment__line"}>
            <img src={"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}/>
            <form className={"comment__line--info"}>
                <p><strong>Tú: </strong></p>
                <textarea placeholder={"Agrega un comentario"}></textarea>
                <button className={"btn btn-danger"}>Comment</button>
            </form>
        </div>
    </>
}
export default function RecomendacionesGo(){
    return <>
        {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
        <Header/>
        <RanchitoMagico/>
        <div className={"comment__area"}>
            <Comment/>
            <CommentText/>
        </div>

    </>
}
