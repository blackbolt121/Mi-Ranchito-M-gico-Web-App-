import React, {useState} from "react";
import SelectEstadosMunicipios from "../SelectEstadosMunicipios";
import network from "../network";
import HeaderAdmin from "./HeaderAdmin";

export default function AdminRanchitos(prop){

    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const [nombre, setNombre] = useState("")
    function onChange(event){
        let target_name = event.target.name
        let target_value = event.target.value
        if(target_name == "latitud"){
            setLatitud(target_value)
        }else if(target_name == "longitud"){
            setLongitud(target_value)
        }else if(target_name == "nombre"){
            setNombre(target_value)
        }
    }
    function clearFormCiudad(){
        document.getElementById("estado").value = 0;
        document.getElementById("municipios").value=0;
        setLatitud(0)
        setLongitud(0)
        setNombre("")
    }
    function crearCiudad(event){
        event.preventDefault()
        //fetch(`http://${network.ip}`)
        console.log("Registrando Ciudad")

        fetch(`http://${network.ip}/api/ciudades`,{
            method:"POST",
            "Content-Type":"application/json",
            'Accept':'application/json',
            body:JSON.stringify({
                "nombre":nombre,
                "estado":document.getElementById("estado").value,
                "municipio":document.getElementById("municipios").value,
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


        //Limpiando el formulario

    }
    function crearRanchito(event){
        event.preventDefault();

    }
    return <>
        <HeaderAdmin/>
        <form onSubmit={crearCiudad} className={"register_form"}>
            <h1 style={{textAlign:"center",color:"white"}}>Registrar Estado</h1>
            <div className={"register_campo"}>
                <label htmlFor={"nombre"}>
                    Nombre
                </label>
                <input name={"nombre"} type={"text"} value={nombre} onChange={onChange}/>
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
            <div className={"register_submit"}>
                <button type={"submit"} className={"btn btn-primary"}>Registrar</button>
            </div>
        </form>
        <form>

        </form>
    </>
}
