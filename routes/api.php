<?php

use App\Http\Controllers\api\MunicipioController;
use App\Http\Controllers\api\RanchitoController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\VisitasController;
use \App\Http\Controllers\api\CiudadesController;
use App\Http\Controllers\api\ActividadesController;
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
Route::get("/ciudades",[CiudadesController::class,"getCiudades"]);
Route::post("/ciudades",[CiudadesController::class,"createCiudades"]);
Route::delete("/ciudades/{id}",[CiudadesController::class,"deleteCiudad"]);
Route::post("/ranchito",[RanchitoController::class,"createRanchito"]);
Route::post("/ranchito/edit",[RanchitoController::class,"updateRanchitoMagico"]);
Route::get("/admin/users",[UserController::class,"getUsersTravel"]);
Route::get("/tipo_actividades",[ActividadesController::class,"getTipoActividades"]);
Route::post("/actividad",[ActividadesController::class,"crearActividad"]);
Route::put("/actividad",[ActividadesController::class,"editarActividad"]);
Route::get("/admin/actividad/{id}",[ActividadesController::class,"obtenerActividad"]);
Route::get("/actividad/{id}",[ActividadesController::class,"obtenerActividadesFront"]);
Route::post("/comment",[\App\Http\Controllers\api\RecomendacionController::class,"addComment"]);
Route::get("/recomendaciones/{id}",[\App\Http\Controllers\api\RecomendacionController::class,"obtenerRecomendaciones"]);
