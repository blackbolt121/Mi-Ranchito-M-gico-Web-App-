<?php

namespace App\Http\Controllers\api;

use App\Models\Ranchito;
use App\Models\session;
use App\Models\Visita;
use Illuminate\Http\Request;
class VisitasController extends Controller
{
    function addVisita(Request $request){
        $token = $request->input("x-token");
        $ranchito = $request->input("ranchito");
        $session = session::query()->where("id",$token);
        if($session->count() > 0){
            $user_id = $session->first()->id_user;
            $visita = Visita::query()->where("id_ranchito",$ranchito)->where("id_user",$user_id);
            if($visita->count() > 0){
                $visita = $visita->first();
                $visita->visitado = false;
                $visita->save();
                return response()->json([]);
            }
            else{
                $vis = new Visita;
                $vis->id_ranchito = $ranchito;
                $vis->id_user = $user_id;
                $vis->visitado = false;
                $vis->save();
            }
        }else{
            return response()->json(["status"=>"Invalid credentials"],404);
        }
    }
    function addVisited(Request $request){
        if ($token = $request->input("x-token")) {
            $user = session::query()
                ->where("id", $token)
                ->get()
                ->first()
                ->id_user;
            if ($ranchito = $request->input("ranchito")) {
                $req = Visita::query()
                    ->where("id_user", $user)
                    ->where("id_ranchito", $ranchito)
                    ->first();
                $req->visitado = true;
                $req->save();
                return response()->json([]);
            }
        }
        return response("Error", 404);

    }
    function getVisita(Request $request){
        if($token = $request->input("x-token")){
            $user = session::query()->where("id",$token)->first();
            $ranchitos = Visita::query()
                ->select("id_ranchito")
                ->where("id_user",$user->id_user)
                ->where("visitado",false)
                ->pluck("id_ranchito");
            return Ranchito::query()->select("ranchitos.id","ciudades.nombre","ranchitos.imagen","ranchitos.latitud","ranchitos.longitud")->whereIn("ranchitos.id",$ranchitos)->join("ciudades","ciudades.id","ranchitos.id")->get()->all();
        }else{
            return response("",400);
        }
    }
}
