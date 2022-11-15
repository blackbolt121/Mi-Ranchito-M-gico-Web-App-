<?php

namespace App\Http\Controllers\api;

use App\Models\Ciudad;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Ramsey\Uuid\Type\Integer;


class CiudadesController extends Controller
{
    public function getCiudades(){
        return Ciudad::all();
    }
    public function createCiudades(Request $request){
        $ciudad = json_decode($request->getContent());
        Ciudad::createCity($ciudad->nombre,$ciudad->estado,$ciudad->municipio,$ciudad->latitud,$ciudad->longitud);
    }

    public function deleteCiudad(int $id){
        try{
            Ciudad::query()->where("id","=",$id)->delete();
            return response("{status:'Deleted succesfully'}")->setStatusCode(Response::HTTP_ACCEPTED);
        }catch (\Exception $e){
            return response("{status: \"Failed on delete\"}")->setStatusCode(Response::HTTP_CONFLICT);
        }

    }

}
