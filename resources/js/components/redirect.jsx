import {Navigate} from "react-router";

const redirect = ()=>{
    let content = (window.localStorage.getItem("X-TOKEN") !== null)? <Navigate to={"/dashboard"} /> : <><Navigate to={"/login"}/></>;
    return <>{content}</>;
}
export default redirect;
