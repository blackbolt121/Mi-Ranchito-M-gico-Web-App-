import "../css/Register.css";
import {Fragment, useState} from "react";
import Campo from "./Campo";
import SelectEstadosMunicipios from "./SelectEstadosMunicipios";
import Header from "./Header";
import redirect from "./redirect";
import {Navigate} from "react-router";

export default function Register()
{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [direccion2, setDireccion2] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [estado, setEstado] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [ccontraseña, setCContraseña] = useState("");
    const [navigate, setNavigate] = useState(null);

    const validateDir = ()=>{
        let direcciones = [document.getElementsByName("direccion")[0],document.getElementsByName("direccion2")[0]]
        if(direcciones.map(x => x.value).reduce((a,b) => a + b).length <= 1) {
            direcciones.forEach(dir => dir.classList.add("register_campo_invalid"))
        }else{
            direcciones.forEach(dir => dir.classList.remove("register_campo_invalid"))
        }
    }
    const validateName = (event) => {
        if (event.value.length < 2) {
            event.classList.add("register_campo_invalid")
        }else{
            event.classList.remove("register_campo_invalid")
        }
    }
    const validateEmail = (event) => {
        if(!event.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            event.classList.add("register_campo_invalid")
        }else {
            event.classList.remove("register_campo_invalid");
        }
    }
    const validateCompare = (target, compare) =>{
        console.log(target.value)
        if(target.value == compare){
            target.classList.add("register_campo_invalid")
        }else{
            target.classList.remove("register_campo_invalid");
            console.log("Todo bien")
        }
    }
    const validateDate = (target) => {
        console.log(/\d{4}-\d{1,2}-\d{1,2}$/.test(target.value))
        if(!/\d{4}-\d{1,2}-\d{1,2}$/.test(target.value)){
            target.classList.add("register_campo_invalid")
        }else{
            target.classList.remove("register_campo_invalid");
        }
    }
    function changeHandler(event){
        let target = event.target.name;
        switch (target){
            case "nombre":
                setNombre(event.target.value);
                validateName(event.target)
                break;
            case "email":
                setEmail(event.target.value);
                validateEmail(event.target)
                break;
            case "direccion":
                setDireccion(event.target.value);
                validateDir();
                break;
            case "direccion2":
                setDireccion2(event.target.value);
                validateDir()
                break;
            case "nacimiento":
                setNacimiento(event.target.value);
                console.log(event.target.value)
                validateDate(event.target)
                break;
            case "estado":
                setEstado(parseInt(event.target.value));
                console.log(estado)
                validateCompare(event.target,0)
                break;
            case "municipio":
                setMunicipio(parseInt(event.target.value));
                console.log(municipio)
                validateCompare(event.target, 0)
                break;
            case "ciudad":
                setCiudad(event.target.value);
                console.log(ciudad);
                validateName(event.target)
                break;
            case "contraseña":
                setContraseña(event.target.value);
                validateName(event.target)
                break;
            case "ccontraseña":
                setCContraseña(event.target.value);
                validateName(event.target)
                break;
            default:
                console.log("No such element");
                break;
        }

    }
    const register = (event) =>{
        event.preventDefault();
        if(contraseña === ccontraseña && contraseña.length > 0 && ccontraseña.length > 0 && municipio != 0 && estado != 0 && nombre.length >= 2 && email.length >= 2){
            fetch("http://localhost:8000/api/user/register",{
                method:"POST",
                "Content-Type":"application/json",
                "Accept":"application/json",
                body : JSON.stringify({
                    "nombre":nombre,
                    "email":email,
                    "password":contraseña,
                    "cpassword":ccontraseña,
                    "municipio":municipio,
                    "estado":estado,
                    "ciudad":ciudad,
                    "direccion":direccion+direccion2,
                    "nacimiento":String(nacimiento)
                })
            }).then( response => {
                if(response.status === 200 && response.ok){
                    setNavigate(<Navigate to={"/login"}/>)
                }
            }).catch(error => {
                setNavigate(<p>No se pudo iniciar session</p>)
            })
        }else{
            window.alert("Revise su formulario")
        }
    }
    return(
        <Fragment>
            <title>Registrate!!!</title>
            <Header/>
            {(localStorage.getItem("x-token")!==null)? <Navigate to={"/dashboard"}/>:null}
            {navigate}
            <form className={"register_form"} onSubmit={(e) => register(e)}>
                <h1 className={"register_title"}>Registro</h1>
                <Campo typeInput={"text"} nombre={"nombre"} description={"Nombre: "}
                       icon={"fas fa-user"} handler={changeHandler}/>
                <Campo state={email} typeInput={"_email"} nombre={"email"} description={"Email: "}
                       icon={"fas fa-envelope"} handler={changeHandler}/>
                <Campo typeInput={"text"} nombre={"direccion"} description={"Direccion: "}
                       icon={"fas fa-address-book"} handler={changeHandler}/>
                <Campo typeInput={"text"} nombre={"direccion2"} description={"Direccion 2: "}
                       icon={"fas fa-address-book"} handler={changeHandler}/>
                <Campo typeInput={"date"} nombre={"nacimiento"} description={"Fecha de nacimiento: "}
                       icon={"fas fa-birthday-cake"} handler={changeHandler}/>
                <SelectEstadosMunicipios handler={changeHandler}/>
                <Campo typeInput={"text"} nombre={"ciudad"} description={"Ciudad: "}
                       icon={"fas fa-city"} handler={changeHandler}/>
                <Campo typeInput={"password"} nombre={"contraseña"} description={"Contraseña: "}
                       icon={"fa-solid fa-key"} handler={changeHandler}/>
                <Campo typeInput={"password"} nombre={"ccontraseña"} description={"Confirmar contraseña: "}
                       icon={"fa-solid fa-key"} handler={changeHandler}/>
                <div className={"register_submit"}>
                    <button type={"submit"} className={"btn btn-primary"}>Registrarse</button>
                </div>
            </form>
        </Fragment>
    );

}
