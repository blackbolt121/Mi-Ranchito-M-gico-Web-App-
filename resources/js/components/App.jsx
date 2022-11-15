//Librerias
import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
//Estilos
import "../css/Main.css"
import "../css/Main2.css"
//Componentes
import Header from "./Header"
import Footer from "./Footer";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import ToGo from "./ToGo";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Index from "./Index";
import Recomendaciones from "./dashboard/Recomendaciones";
import Mapa from "./dashboard/Mapa";
import Visitar from "./dashboard/Visitar";
import VisitarGo from "./dashboard/VisitarGo";
import Go from "./Go";
import RecomendacionesGo from "./dashboard/RecomendacionesGo";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminRanchitos from "./Admin/AdminRanchitos";

function App() {
    return <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"  crossOrigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossOrigin="anonymous"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous"/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>} exact/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/logout"} element={<Logout/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/go"} element={<ToGo/>}/>
                <Route path={"/go/:id"} element={<Go/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/dashboard/mapa"} element={<Mapa/>}/>
                <Route path={"/dashboard/visitar"} element={<Visitar/>}/>
                <Route path={"/dashboard/visitar/:id"} element={<VisitarGo/>}/>
                <Route path={"/dashboard/recomendaciones"} element={<Recomendaciones/>}/>
                <Route path={"/dashboard/recomendaciones/:id"} element={<RecomendacionesGo/>}/>
                <Route path={"/admin"} element={<AdminLogin/>}/>
                <Route path={"/admin/dashboard"} element={<AdminDashboard/>}/>
                <Route path={"/admin/ranchitos"} element={<AdminRanchitos/>}/>
                <Route path={"*"} element={
                    <Fragment>
                        <Header/>
                        <NotFound/>
                    </Fragment>
                }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>;
}
export default App;
