<?php

namespace App\Http\Controllers\api;

use App\Models\Ciudad;
use App\Models\Ranchito;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RanchitoController extends Controller
{
    //
    public function getRanchitosMagicos(){
        try{
            return response(Ranchito::query()
                ->join("ciudades","ciudades.id","ranchitos.id")
                ->join("estados","estados.id","ciudades.id_estado")
                ->select("ranchitos.id","ciudades.nombre as ciudad","estados.nombre as estado","ciudades.id_estado as id_estado","ciudades.id_municipio as id_municipio","ranchitos.descripcion","ranchitos.imagen","ciudades.latitud","ciudades.longitud")
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
    public function createRanchito(Request $request){
        $ciudad = json_decode($request->getContent());
        $id = Ciudad::createCity($ciudad->nombre,$ciudad->estado,$ciudad->municipio,$ciudad->latitud,$ciudad->longitud);
        $ranchito = new Ranchito();
        $ranchito->id = $id;
        if(filter_var($id, FILTER_VALIDATE_INT) && filter_var($ciudad->imagen, FILTER_VALIDATE_URL)){
            $ranchito->descripcion = $ciudad->descripcion;
            $ranchito->imagen = $ciudad->imagen;
            $ranchito->save();
            return response("{}",Response::HTTP_CREATED);
        }else{
            return response("{}",Response::HTTP_NOT_ACCEPTABLE);
        }


    }
    public function updateRanchitoMagico(Request $request){
        $req = json_decode($request->getContent());
        try{
            $ciudad = Ciudad::query()->where("id","=",$req->id)->get()[0];
            $ciudad->id_municipio = $req->id_municipio;
            $ciudad->id_estado = $req->id_estado;
            $ciudad->nombre = $req->nombre;
            $ciudad->latitud = $req->latitud;
            $ciudad->longitud = $req->longitud;
            $ciudad->save();
            $ranchito = Ranchito::query()->where("id","=",$req->id)->get()[0];
            $ranchito->imagen = $req->imagen;
            $ranchito->descripcion = $req->descripcion;
            $ranchito->save();
            return response("{}",200);
        }catch (\Exception $exception){
            echo $exception->getMessage();
        }
    }
}
