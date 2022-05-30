import {Fragment, useEffect, useState} from "react";
import Header from "../Header";
import ListRanchitos from "../ListRanchitos";
import {Navigate} from "react-router";



export default function Visitar() {

    return <>
        {(localStorage.getItem("x-token")===null)?<Navigate to={"/login"}/>:<></>}
        <Header/>
        <h1 className={"awesome__title"}>Visita:</h1>
        <ListRanchitos/>
    </>
}
