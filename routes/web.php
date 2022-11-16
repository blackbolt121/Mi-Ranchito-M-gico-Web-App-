<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get("/", function () {
    return view("index");
});
Route::get("/go", function (){
    return view("index");
});
Route::get("/todo", function (){
    return view("index");
});
Route::get("/login", function (){
    return view("index");
});
Route::get("/register", function (){
    return view("index");
});
Route::get("/dashboard", function (){
    return view("index");
});
Route::get("/dashboard/visitar", function (){
    return view("index");
});
Route::get("/dashboard/visitar/{id}", function (){
    return view("index");
});
Route::get("/dashboard/mapa", function (){
    return view("index");
});
Route::get("/dashboard/recomendaciones", function (){
    return view("index");
});
Route::get("/dashboard/recomendaciones/{id}", function (){
    return view("index");
});
Route::get("/go/{id}", function (){
    return view("index");
});
Route::get("/admin", function (){
    return view("index");
});
Route::get("/admin/dashboard", function (){
    return view("index");
});

Route::get("/admin/ranchitos", function (){
    return view("index");
});
Route::get("/admin/usuarios", function (){
    return view("index");
});
