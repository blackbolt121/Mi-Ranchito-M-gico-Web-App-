import React, {useEffect, useState} from "react";
import network from "../network";
import estados from "../EstadosInfo";

export default function EditRanchito(props) {
    const [ranchitos, setRanchitos] = useState([])
    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState();
    const [imagen, setImagen] = useState()
    const [municipios, setMunicipios] = useState()
    const options = estados.map(estado => <option key={estado.nombre} value={estado.id}>{estado.nombre}</option>);

    function changeState(){
        let id_estado = parseInt(document.getElementById("estado").value);
        if(id_estado > 0 && id_estado < 33){
            setMunicipios(estados[id_estado-1].municipios.map(muncipio => <option key={muncipio.nombre} value={muncipio.id_municipio}>{muncipio.nombre}</option>))
        }else{
            setMunicipios([]);
        }
    }
    function onChangeState(e){
        changeState()
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


    useEffect(()=> {
        fetch(`http://${network.ip}/api/ranchitos`)
            .then(response => response.json())
            .then(response => {
                setRanchitos(response)
            })
    },[])
    function editRanchito(event){
        let id = event.target.value
        if(id == 0){
            clearForm()
        }else{
            let selected = ranchitos.filter(x => x.id == id)[0]
            if( selected !== undefined ){
                setNombre(selected.ciudad)
                setImagen(selected.imagen)
                setLongitud(selected.longitud)
                setLatitud(selected.latitud)
                setDescripcion(selected.descripcion)
                let id_estado = selected.id_estado
                let id_municipio = selected.id_municipio
                document.getElementById("estado").value = id_estado
                changeState()
                setTimeout(()=>{
                    document.getElementById("municipios").value = id_municipio
                },1)
            }
        }
    }
    function clearForm(event){
        document.getElementById("edit_ranchito").value = 0
        document.getElementById("estado").value = 0;
        document.getElementById("municipios").value=0;
        setLatitud(0)
        setLongitud(0)
        setNombre("")
        setDescripcion("")
        setImagen("")
        setMunicipios([])
    }
    function submitChanges(event){
        event.preventDefault()

        let ranchito_id = document.getElementById("edit_ranchito").value
        let estado = document.getElementById("estado").value
        let municipio = document.getElementById("municipios").value
        let info = {
            "id":ranchito_id,
            "nombre":nombre,
            "id_estado":estado,
            "id_municipio":municipio,
            "latitud":latitud,
            "longitud":longitud,
            "descripcion":descripcion,
            "imagen":imagen
        }
        info = JSON.stringify(info)
        fetch(`http://${network.ip}/api/ranchito/edit`,{
            "method":"POST",
            "Content-Type":"application/json",
            "accept":"application/json",
            "body":info
        }).then(response => {
            if (response.ok && response.status === 200){
                return response.json()
            }
        })
            .then(response => {
                alert("Ranchito actualizado con exito!!!!")
                clearForm()
                fetch(`http://${network.ip}/api/ranchitos`)
                        .then(response => response.json())
                        .then(response => {
                            setRanchitos(response)
                        })
            })
            .catch(error => console.log(error))

    }
    return <>
        <form className={"register_form"} onSubmit={submitChanges}>
            <h1 className={"register_title"}>Editar Ranchito</h1>
            <div className={"register_campo"}>
                <label htmlFor={"edit_ranchito"}>Seleciona un ranchito</label>
                <select id={"edit_ranchito"} name={"edit_ranchito"} onChange={editRanchito}>
                    <option value={0}>Sin seleccionar</option>
                    {ranchitos.map( x => <option key={x.id} value={x.id}>{x.ciudad}</option>)}
                </select>
            </div>
            <div className={"register_campo"}>
                <label htmlFor={"nombre"}>
                    Nombre
                </label>
                <input name={"nombre"} type={"text"} value={nombre} onChange={onChange} placeholder={"Nombre del ranchito"}/>
            </div>
            <div>
                <div className={"register_campo"}>
                    <label htmlFor={"estado"}><i className="fa-solid fa-building-ngo"></i></label>
                    <select id={"estado"} name={"estado"} onChange={onChangeState}>
                        <option key={"sin_seleccionar"} value={0}>Selecciona un estado</option>
                        {options}
                    </select>
                </div>
                <br/>
                <div className={"register_campo"}>
                    <label htmlFor={"municipios"}><i className="fa-solid fa-house"></i></label>
                    <select id={"municipios"} name={"municipio"} onChange={onChange}>
                        <option value={0}>Selecciona un municipio</option>
                        {municipios}
                    </select>
                </div>
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
                <label htmlFor={"imagen"}>Imagen</label>
                <input name={"imagen"} type={"text"} value={imagen} onChange={onChange} placeholder={"Url de imagen"}/>
            </div>
            <div className={"register_campo"}>
                <label htmlFor={"descripcion"}>Descripción</label>
                <textarea className={"descripcion"} value={descripcion} name={"descripcion"} onChange={onChange}/>
            </div>
            <div className={"register_submit"}>
                <div className={"container menu_options"}>
                    <button className={"btn btn-primary"} onClick={clearForm}>Limpiar</button>
                    <button type={"submit"} className={"btn btn-primary"}>Modificar</button>
                </div>
            </div>

        </form>
    </>
}
