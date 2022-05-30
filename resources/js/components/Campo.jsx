import {Fragment} from "react";
export default function Campo (props) {

    return (<Fragment>
        <div className={"register_campo"}>
            <label htmlFor={props.nombre}><i className={`register_icon ${props.icon}`}></i></label>
            <input
                type={props.typeInput}
                id={props.nombre}
                name={props.nombre}
                placeholder={props.description}
                onChange={props.handler}
                onKeyDown={props.handler}
                onBlur={props.handler}/>
        </div>
    </Fragment>);
}
