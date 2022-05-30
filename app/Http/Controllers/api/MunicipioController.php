<?php

namespace App\Http\Controllers\api;
use Illuminate\Http\Request;
use App\Models\Estado;
class MunicipioController extends Controller
{
    function getEstados(Request $request)
    {
        try {
            $list = Estado::query()->select("nombre", "id")->get();
            return response()->json($list);
        } catch (Exception $exception) {
            return response()->json(["error" => "500", "source" => $request->ip(), "user-agent" => $request->userAgent()], 500);
        }
    }

    function getMuncipios(Request $request, int $estado)
    {
        try {
            $est = Estado::find($estado);
            $municipios = $est->municipio()->select("id", "nombre")->get();
            $res = ["id" => $est->id, "nombre" => $est->nombre, "municipios" => $municipios];
            return response()->json($res)->withCookie(cookie("token", "jkdlñajfklasjdklfajsdklfjkasdjñaf", 100));
        } catch (Exception $exception) {
            return response()->json(["Error" => "500", "source" => $request->ip()], 500);
        }
    }
}
