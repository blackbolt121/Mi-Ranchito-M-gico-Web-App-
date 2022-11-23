<?php

namespace App\Http\Controllers\api;

use App\Models\Actividades;
use App\Models\TipoActividades;
use http\Env\Response;
use Illuminate\Http\Request;

class ActividadesController extends Controller
{
    public function getTipoActividades(Request $request){
        return TipoActividades::all()->all();
    }
    public function crearActividad(Request $request){
        $body = json_decode($request->getContent());
        $actividad = new Actividades();

        //Rellenando los campos de la actividad

        $actividad->ranchito = $body->ranchito;
        $actividad->tipo = $body->tipo;
        $actividad->nombre = $body->nombre;
        $actividad->telefono = $body->telefono;
        $actividad->latitud = $body->latitud;
        $actividad->longitud = $body->longitud;
        $actividad->descripcion = $body->descripcion;

        $actividad->save();
    }

    public function obtenerActividad(int $id){

        return Actividades::query()->where("ranchito",$id)->get()->all();

    }

    public function editarActividad(Request $request){
        $new = json_decode($request->getContent());
        $results = Actividades::query()->where("id","=",$new->actividad)->get();
        if( sizeof($results) == 0 ){
            return response("{}",400);
        }
        try{
            $actividad = $results->first();
            $actividad->tipo = $new->tipo;
            $actividad->latitud = $new->latitud;
            $actividad->longitud = $new->longitud;
            $actividad->telefono = $new->telefono;
            $actividad->descripcion = $new->descripcion;
            $actividad->nombre = $new->nombre;
            $actividad->save();
        }catch (\Exception $exception){
            return response("{status:'missing parameter'}",402);
        }
        return response("{status:'success'}",200);
    }
    public function obtenerActividadesFront(int $id){
        return Actividades::query()->select("actividades.nombre","actividades.descripcion","actividades.telefono","actividades.latitud","actividades.longitud","actividades.tipo","tipo_actividades.categoria")->join("tipo_actividades","actividades.tipo","tipo_actividades.id")->where("actividades.ranchito","=",$id)->get()->all();
    }
}
