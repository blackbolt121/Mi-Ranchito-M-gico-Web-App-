import network from "../network";
import React, {useState} from "react";
import HeaderAdmin from "./HeaderAdmin";
import SelectEstadosMunicipios from "../SelectEstadosMunicipios";


const CreateRanchito = (props) => {


    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState();
    const [imagen, setImagen] = useState()

    function onChange(event){
        let target_name = event.target.name
        let target_value = event.target.value
        if(target_name == "latitud"){
            setLatitud(target_value)
        }else if(target_name == "longitud"){
            setLongitud(target_value)
        }else if(target_name == "nombre"){
            setNombre(target_value)
        }else if(target_name == "imagen"){
            setImagen(target_value)
        }else if(target_name == "descripcion"){
            setDescripcion(target_value)
        }
    }

    function clearFormCiudad(){
        document.getElementById("estado").value = 0;
        document.getElementById("municipios").value=0;
        setLatitud(0)
        setLongitud(0)
        setNombre("")
        setDescripcion("")
        setImagen("")
    }
    function crearCiudad(event){
        event.preventDefault()
        console.log("Registrando Ciudad")

        fetch(`http://${network.ip}/api/ranchito`,{
            method:"POST",
            "Content-Type":"application/json",
            accept:"application/json",
            body:JSON.stringify({
                "nombre":nombre,
                "estado":document.getElementById("estado").value,
                "municipio":document.getElementById("municipios").value,
                "descripcion":descripcion,
                "imagen":imagen,
                "latitud":latitud,
                "longitud":longitud
            })
        }).then(response => {
            if(response.status == 200){
                clearFormCiudad()
                alert("Ciudad registrada con exito")
            }else{
                clearFormCiudad()
                response.text().then( text => {
                    console.log(text)
                })
            }
        }).catch( error => {
            alert.log(error.message)
            clearFormCiudad()
        })
    }
    function onChange(event){
        let target_name = event.target.name
        let target_value = event.target.value
        if(target_name == "latitud"){
            setLatitud(target_value)
        }else if(target_name == "longitud"){
            setLongitud(target_value)
        }else if(target_name == "nombre"){
            setNombre(target_value)
        }else if(target_name == "imagen"){
            setImagen(target_value)
        }else if(target_name == "descripcion"){
            setDescripcion(target_value)
        }
    }

    function clearFormCiudad(){
        document.getElementById("estado").value = 0;
        document.getElementById("municipios").value=0;
        setLatitud(0)
        setLongitud(0)
        setNombre("")
        setDescripcion("")
        setImagen("")
    }
    function crearCiudad(event){
        event.preventDefault()
        console.log("Registrando Ciudad")

        fetch(`http://${network.ip}/api/ranchito`,{
            method:"POST",
            "Content-Type":"application/json",
            accept:"application/json",
            body:JSON.stringify({
                "nombre":nombre,
                "estado":document.getElementById("estado").value,
                "municipio":document.getElementById("municipios").value,
                "descripcion":descripcion,
                "imagen":imagen,
                "latitud":latitud,
                "longitud":longitud
            })
        }).then(response => {
            if(response.status == 200){
                clearFormCiudad()
                alert("Ciudad registrada con exito")
            }else{
                clearFormCiudad()
                response.text().then( text => {
                    console.log(text)
                })
            }
        }).catch( error => {
            alert.log(error.message)
            clearFormCiudad()
        })
    }
    return <>
        <form onSubmit={crearCiudad} className={"register_form"}>
            <h1 className={"register_title"}>Registrar Ranchito</h1>
            <div className={"register_campo"}>
                <label htmlFor={"nombre"}>
                    Nombre
                </label>
                <input name={"nombre"} type={"text"} value={nombre} onChange={onChange} placeholder={"Nombre del ranchito"}/>
            </div>
            <SelectEstadosMunicipios/>
            <div className={"register_campo"}>
                <label htmlFor={"latitud"}>Latitud</label>
                <input type={"number"} value={latitud} step={0.00001} name={"latitud"} onChange={onChange}/>
            </div>
            <div className={"register_campo"}>
                <label htmlFor={"longitud"}>Longitud</label>
                <input type={"number"} value={longitud} step={0.00001} name={"longitud"} onChange={onChange}/>
            </div>
            <div className={"register_campo"}>
                <label htmlFor={"imagen"}>Imagen</label>
                <input name={"imagen"} type={"text"} value={imagen} onChange={onChange} placeholder={"Url de imagen"}/>
            </div>
            <div className={"register_campo"}>
                <label htmlFor={"descripcion"}>Descripción</label>
                <textarea className={"descripcion"} value={descripcion} name={"descripcion"} onChange={onChange}/>
            </div>
            <div className={"register_submit"}>
                <button type={"submit"} className={"btn btn-primary"}>Registrar</button>
            </div>
        </form>
    </>
}
export default CreateRanchito;
