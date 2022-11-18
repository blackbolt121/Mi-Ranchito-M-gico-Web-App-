import React from "react";
import "../../css/Login.css";
import Header from "../Header";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";
import network from "../network";
const email_re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const AdminLogin = () =>{

    const adminLogin = (event) => {
        event.preventDefault();
        if(
            email_re.test(document.getElementById("email").value)
            && document
                .getElementById("password")
                .value
                .length > 0) {

            //Aquí se verifica si se tiene asignado un token, de ser así entonces no se hace la petción

            if(!window.localStorage.getItem("x-token")){
                fetch(`http://${network.ip}/api/user/login`, {
                    'Content-Type':"application/json",
                    'Accept':'application/json',
                    'method': 'POST',
                    'body':JSON.stringify({
                        "email":document.getElementById('email').value,
                        "password": document.getElementById('password').value
                    })
                }).then(response => {
                    if(response.status === 202) {
                        response.json().then(response => {
                            window.localStorage.setItem("x-token",response.token);
                            document.location.href = "/admin/dashboard";
                        })
                    }else{
                        window.alert('Credenciales invalidas')
                    }
                }).catch(ex => {
                    console.log(ex.message);
                })
            }else{
                window.alert(`Usted ya tiene un token asignado '${window.localStorage.getItem("x-token")}'`)
            }
        }else{
            window.alert("No funciono")
        }
    }
    return <>
        <title>Inicar Sesión</title>
        <Header main={{"User Login":"/login"}}/>
        {(localStorage.getItem("x-token")!==null)? <Navigate to={"/admin/dashboard"}/>:null}
        <div className="login">
            <h2>Iniciar sesión</h2>
            <form onSubmit={(e) => adminLogin(e)}>
                <div className="field">
                    <label
                        htmlFor="email"
                        className="form-label">
                        <i className="fa-solid fa-at"></i>
                    </label>
                    <input
                        placeholder="correo"
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        name="email"/>
                </div>
                <div className="field">
                    <label
                        htmlFor="password"
                        className="form-label">
                        <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                        placeholder="contraseña"
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        name="password"/>
                </div>
                <div className="something_happen">
                    <Link to={"/iforgot"}>¿Olvidate tu contraseña? <strong>Haz click aquí</strong></Link>
                </div>
                <div className="something_happen">
                    <Link to={"/register"}>¿No tienes cuenta? <strong>Registrate</strong></Link>
                </div>
                <button className="btn btn-primary login_button" type={"submit"}>Iniciar sesión</button>
            </form>
        </div>

    </>
}
export default AdminLogin;
