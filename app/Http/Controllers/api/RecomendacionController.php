<?php

namespace App\Http\Controllers\api;




use App\Models\Recomendacion;
use App\Models\session;
use App\Models\Visita;
use Illuminate\Http\Request;

class RecomendacionController extends Controller
{
    //
    public function addComment(Request $request){
        $comment = json_decode($request->getContent());
        try{
            $id_user = session::query()->where("id","=",$comment->token)->get()[0]->id_user;
            $ranchito = $comment->ranchito;
            $visitas = Visita::query()
                ->where("id_user","=",$id_user)
                ->where("id_ranchito","=",$ranchito)
                ->where("visitado","=",1);
            if($visitas->count() == 0 ){
                return response(json_encode(["status"=>"No podemos recibir tu opinión de un lugar que no has visitado..."]),202);
            }
            $id_visita = $visitas->get()[0]->id;

            $recomendacion = new Recomendacion();
            $recomendacion->id_visita = $id_visita;
            $recomendacion->comentario = $comment->comentario;
            $recomendacion->puntuacion = 5.0;
            $recomendacion->save();

            return response(json_encode(["status"=>"Gracias por tu recomendación!!!"]),202);
        }catch (\Exception $exception){
            return response(json_encode(["status"=>$exception->getMessage()]),200);
        }

    }
    public function obtenerRecomendaciones(int $id){
        return Recomendacion::query()
            ->select("recomendacions.comentario")
            ->join("visitas","recomendacions.id_visita","visitas.id")
            ->where("visitas.id_ranchito","=",$id)
            ->get()
            ->all();
    }
}
