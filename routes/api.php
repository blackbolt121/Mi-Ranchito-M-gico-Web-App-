<?php

use App\Http\Controllers\api\MunicipioController;
use App\Http\Controllers\api\RanchitoController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\VisitasController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("/visita",[VisitasController::class,"addVisita"])->middleware('validtoken')->middleware('ranchito');
Route::get("/estados",[MunicipioController::class,"getEstados"]);
Route::get("/municipio/{estado}",[MunicipioController::class,"getMuncipios"])->middleware("municipio");
Route::post("/user/register",[UserController::class,"register"]);
Route::post("/user/login",[UserController::class,"login"]);
Route::get("/ranchitos",[RanchitoController::class,"getRanchitosMagicos"]);
Route::get("/ranchitos/{ranchito}",[RanchitoController::class,"getRanchitosMagicosById"]);
Route::post("/visitas",[VisitasController::class,"getVisita"])->middleware("validtoken");
Route::post("/visited",[VisitasController::class,"addVisited"])->middleware("validtoken")->middleware('ranchito');
