<?php

namespace App\Http\Controllers\api;

use App\Models\Ranchito;
use App\Models\User;
use App\Models\Visita;
use Illuminate\Http\Request;
use Exception;

class UserController extends Controller
{
    function register(Request $request)
    {

        try {

            $info = json_decode($request->getContent());
            if (
                isset($info->nombre)
                && isset($info->email)
                && isset($info->password)
                && isset($info->cpassword)
                && isset($info->direccion)
                && isset($info->municipio)
                && isset($info->estado)
                && isset($info->nacimiento)
            ) {
                return (User::createUser(
                    $info->nombre,
                    $info->email,
                    $info->password,
                    $info->cpassword,
                    $info->direccion,
                    $info->nacimiento,
                    $info->ciudad,
                    $info->estado,
                    $info->municipio)) ?
                    response()->json(["status" => "success"]) :
                    response()->json(["status" => "failed"], 400);
            } else {
                return response()->json(["error" => "missing fields"], 400);
            }
            return response()->json(["message" => "missing parameters"], 400);
        } catch (Exception $e) {
            return response()->json([$e->getMessage(), $e->getLine(), $e->getFile(), $e->getTrace()], 500);
        }
    }

    function login(Request $request)
    {
        $body = json_decode($request->getContent());
        if ((!isset($body->email) && !isset($body->password)) || (strlen($body->password)==0))
            return response()->json(["message" => "missing paramters"], 400);
        if (!filter_var($body->email, FILTER_VALIDATE_EMAIL))
            return response()->json(["message" => "invalid email"], 400);

        if(($status = User::login($body->email,$body->password,$request->userAgent(),$request->ip())) == false){
            return response()->json(["message" => "Wrong credentials"], 400);
        }else{
            return $status;
        }
    }
    function getUsersTravel(Request $request){
        $results = Visita::query()->select("users.nombre","users.email","visitas.id as id_visita","visitas.id_user","visitas.id_ranchito","ciudades.nombre as nombre_ciudad","visitas.visitado")->where("visitas.visitado","=",1)->join("users","users.id","visitas.id_user")->join("ranchitos","ranchitos.id","visitas.id_ranchito")->join("ciudades","ciudades.id","visitas.id_ranchito");
        return $results->get()->all();
    }
}
