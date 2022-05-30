<?php

namespace App\Http\Controllers\api;

use App\Models\Ranchito;

class RanchitoController extends Controller
{
    //
    public function getRanchitosMagicos(){
        try{
            return response(Ranchito::query()
                ->join("ciudades","ciudades.id","ranchitos.id")
                ->join("estados","estados.id","ciudades.id_estado")
                ->select("ranchitos.id","ciudades.nombre as ciudad","estados.nombre as estado","ranchitos.descripcion","ranchitos.imagen","ciudades.latitud","ciudades.longitud")
                ->get()
                ->all(),200);
        }catch(\Exception $e){
            return response(["status"=>"failed to fetch",
                "error"=>$e->getMessage(),
                "line"=>$e->getLine(),
                "source" => $e->getTrace()
            ],400);
        }
    }
    public function getRanchitosMagicosById(int $id){
        try{
            return response(Ranchito::query()
                ->join("ciudades","ciudades.id","ranchitos.id")
                ->join("estados","estados.id","ciudades.id_estado")
                ->select("ciudades.nombre as ciudad","estados.nombre as estado","ranchitos.descripcion","ranchitos.imagen","ciudades.latitud","ciudades.longitud")
                ->where("ciudades.id",$id)
                ->get()
                ->all(),200);
        }catch(\Exception $e){
            return response(["status"=>"failed to fetch",
                "error"=>$e->getMessage(),
                "line"=>$e->getLine(),
                "source" => $e->getTrace()
            ],400);
        }
    }
}
