import {useEffect, useState} from "react";
import network from "../network";


const EditActividad = (props) => {

    let [actividadesList, setActividadesList] = useState([])
    let [nombre, setNombre] = useState("")
    let [showCategorias, setShowCategorias] = useState()
    let [ranchito, setRanchito] = useState(0)
    let [tipoActividad, setTipoActividad] = useState(0)
    let [actividad, setActividad] = useState(0)
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
    },[])
    function limpiarFormulario(){
        setNombre("")
        setDescripcion("")
        setLatitud(0)
        setLongitud(0)
        setTelefono("")
        setRanchito(0)
        setActividad(0)
        setTipoActividad(0)
        setActividadesList([])
        setActividades([])
    }

    function editarActividad(event){
        event.preventDefault()
        console.log({
            "nombre":nombre,
            "ranchito":ranchito,
            "actividad":actividad,
            "tipo":tipoActividad,
            "latitud":latitud,
            "longitud":longitud,
            "telefono":telefono,
            "descripcion":descripcion
        })
        fetch(`http://${network.ip}/api/actividad`,{
            method:"PUT",
            "Content-Type": "application/json",
            accept:"application/json",
            body:JSON.stringify({
                "nombre":nombre,
                "ranchito":ranchito,
                "actividad":actividad,
                "tipo":tipoActividad,
                "latitud":latitud,
                "longitud":longitud,
                "telefono":telefono,
                "descripcion":descripcion
            })
        }).then(response => {
            if(response.ok && response.status === 200){
                alert("El ranchito ha sido actualizado")
            }else{
                throw new Error("Fallo en registrar actividad")
            }
        }).catch(error => {
            alert(error.message)
        })
        limpiarFormulario()
    }
    function onChangeRanchito(event){

        let id = event.target.value

        setRanchito(id)

        if( id != 0 ) {

            fetch(`http://${network.ip}/api/actividad/${id}`)
                .then(response => response.json())
                .then(response => {
                    setActividadesList(response)
                    if( response.length > 0 )
                        setActividades(response.map(actividad => <option key={actividad.id} value={actividad.id}>{actividad.nombre}</option>))
                    else{
                        setRanchito(0)
                        alert("El ranchito seleccionado no cuenta con actividades disponibles")
                    }

                })
        }else {
            limpiarFormulario()
        }

    }
    function onChangeActividad(event){

        let id_actividad = event.target.value
        let selected_activity = actividadesList.filter( x => x.id == id_actividad )[0]

        setActividad(selected_activity.id)
        setNombre(selected_activity.nombre)
        setLatitud(selected_activity.latitud)
        setLongitud(selected_activity.longitud)
        setTelefono(selected_activity.telefono)

        fetch(`http://${network.ip}/api/tipo_actividades`)
            .then(response => response.json())
            .then(response => {
                setShowCategorias(response.map(actividad => <option key={actividad.id} value={actividad.id}>{actividad.categoria}</option>))
            } )

        setTimeout(()=>{
            setTipoActividad(selected_activity.tipo)
        },10)
        setDescripcion(selected_activity.descripcion)
    }

    return <>
        <form onSubmit={editarActividad} className={"register_form"}>
            <h1 className={"register_title"}>Editar Actividad</h1>

            <div className={"register_campo"}>
                <label htmlFor={"ranchito"}>Ranchito</label>
                <select name={"ranchito"} onChange={onChangeRanchito} value={ranchito}>
                    <option key={0} value={0}>Sin seleccionar</option>
                    {ranchitos}
                </select>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"tipo"}>Actividad</label>
                <select name={"tipo"} onChange={onChangeActividad} value={actividad}>
                    <option key={0} value={0}>Sin seleccionar</option>
                    {actividades}
                </select>
            </div>

            <div className={"register_campo"}>
                <label htmlFor={"categoria"}>Categoria</label>
                <select name={"categoria"} id={"categoria"} onChange={onChange} value={tipoActividad}>
                    <option key={0} value={0}>Sin seleccionar</option>
                    {showCategorias}
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


            <div className={"register_submit menu_options"}>
                <button className={"btn btn-primary"} onClick={limpiarFormulario}>Limpiar</button>
                <button type={"submit"} className={"btn btn-primary"}>Editar</button>
            </div>

        </form>
    </>
}


export default EditActividad;
