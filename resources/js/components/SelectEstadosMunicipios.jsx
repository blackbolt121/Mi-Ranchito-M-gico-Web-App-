import {Fragment} from "react";
import {useState} from "react";
import estados from "./EstadosInfo";



const SelectEstadosMunicipios= (props) => {
    let [municipios,setMunicipios] = useState();
    function changeState(e){
        let id_estado = parseInt(document.getElementById("estado").value);
        if(id_estado > 0 && id_estado < 33){
            setMunicipios(estados[id_estado-1].municipios.map(muncipio => <option key={muncipio.nombre} value={muncipio.id_municipio}>{muncipio.nombre}</option>))
        }else{
            setMunicipios([]);
        }
        props.handler(e)
    }
    const options = estados.map(estado => <option key={estado.nombre} value={estado.id}>{estado.nombre}</option>);
    return (
      <Fragment>
              <div className={"register_campo"}>
                  <label htmlFor={"estado"}><i className="fa-solid fa-building-ngo"></i></label>
                  <select id={"estado"} name={"estado"} onChange={(e)=>changeState(e)}>
                      <option key={"sin_seleccionar"} value={0}>Selecciona un estado</option>
                      {options}
                  </select>
              </div>
              <div className={"register_campo"}>
                  <label htmlFor={"municipios"}><i className="fa-solid fa-house"></i></label>
                  <select id={"municipios"} name={"municipio"} onChange={props.handler}>
                      <option value={0}>Selecciona un municipio</option>
                      {municipios}
                  </select>
              </div>
      </Fragment>
    );
}
SelectEstadosMunicipios.defaultProps = {
    handler: ()=>{

    }
}
export default SelectEstadosMunicipios;
