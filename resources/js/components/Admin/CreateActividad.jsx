import {useEffect, useState} from "react";
import network from "../network";

const CreateActividad = (props) => {
    let [nombre, setNombre] = useState("")

    let [ranchito, setRanchito] = useState(0)
    let [tipoActividad, setTipoActividad] = useState(0)
    let [latitud, setLatitud] = useState(0)
    let [longitud, setLongitud] = useState(0)
    let [telefono, setTelefono] = useState("")
    let [descripcion, setDescripcion] = useState("")
    let [ranchitos, setRanchitos] = useState([])
    let [actividades, setActividades] = useState([])


    function onChange(event){
        event.preventDefault()
        let value = event.target.value
        let target = event.target.name
        let functions = [setRanchito, setTipoActividad,setNombre,setLatitud,setLongitud,setTelefono,setDescripcion]
        let names = ["ranchito","tipo","nombre","latitud","longitud","telefono","descripcion"]
        for(let i = 0; i<names.length; i++){
            if ( names[i] == target){
                functions[i](value)
            }
        }
    }
    useEffect(()=> {
        fetch(`http://${network.ip}/api/ranchitos`)
            .then(response => response.json())
            .then(response => {
                setRanchitos(response.map(ranchito => <option key={ranchito.id} value={ranchito.id}>{ranchito.ciudad}</option>))
            })
        fetch(`http://${network.ip}/api/tipo_actividades`)
            .then(response => response.json())
            .then(response => {
                setActividades(response.map(actividad => <option key={actividad.id} value={actividad.id}>{actividad.categoria}</option>))
            } )
    },[])
    function limpiarFormulario(){
        setNombre("")
        setDescripcion("")
        setLatitud(0)
        setLongitud(0)
        setTelefono("")
        setRanchito(0)
        setTipoActividad(0)
    }
    function crearActividad(event){
        event.preventDefault()
        fetch(`http://${network.ip}/api/actividad`,{
            method:"POST",
            "Content-Type": "application/json",
            accept:"application/json",
            body:JSON.stringify({
                "nombre":nombre,
                "ranchito":ranchito,
                "tipo":tipoActividad,
                "latitud":latitud,
                "longitud":longitud,
                "telefono":telefono,
                "descripcion":descripcion
            })
        }).then(response => {
            if(response.ok && response.status === 200){
                alert("Se ha creado la actividad con exito!!!")
                limpiarFormulario()
            }else{
                throw new Error("Fallo en registrar actividad")
            }
        }).catch(error => {
            alert(error.message)
            limpiarFormulario()
        })
    }
    return <>
        <form onSubmit={crearActividad} className={"register_form"}>
            <h1 className={"register_title"}>Registrar Actividad</h1>

            <div className={"register_campo"}>
                <label htmlFor={"ranchito"}>Ranchito</label>
                <select name={"ranchito"} onChange={onChange} value={ranchito}>
                    <option key={0} value={0}>Sin seleccionar</option>
                    {ranchitos}
                </select>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"tipo"}>Categoria</label>
                <select name={"tipo"} onChange={onChange} value={tipoActividad}>
                    <option key={0} value={0}>Sin seleccionar</option>
                    {actividades}
                </select>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"nombre"}>
                    Nombre
                </label>
                <input name={"nombre"} type={"text"} value={nombre} onChange={onChange} placeholder={"Nombre del ranchito"}/>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"latitud"}>Latitud</label>
                <input type={"number"} value={latitud} step={0.00001} name={"latitud"} onChange={onChange}/>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"longitud"}>Longitud</label>
                <input type={"number"} value={longitud} step={0.00001} name={"longitud"} onChange={onChange}/>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"telefono"}>Telefono</label>
                <input name={"telefono"} type={"text"} value={telefono} onChange={onChange} placeholder={"Telefono"}/>
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
export default CreateActividad;
