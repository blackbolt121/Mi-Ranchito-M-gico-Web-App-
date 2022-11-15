import React from "react";
import Header from "../Header";
const HeaderAdmin = (props)=>{

    return <>
        <Header main={{"Cerrar Sesión":"/logout"}} routes={{"Dashboard":"/admin/dashboard"}} />
    </>



}
export default HeaderAdmin;
