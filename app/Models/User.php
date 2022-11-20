<?php

namespace App\Models;

use App\Models\session;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\Console\Output\ConsoleOutput;

class User extends Model
{
    use HasFactory;

    public function session()
    {
        $this->hasMany(\App\Models\session::class, "id_user");
    }
    public function Administrador(){
        $this->belongsTo(\App\Models\Administrador::class,"id","id");
    }

    public static function createUser(
        string $nombre,
        string $email,
        string $password,
        string $cpassword,
        string $direccion,
        string $nacimiento,
        string $ciudad,
        int    $estado,
        int    $municpio
    )
    {
        if ($password !== $cpassword) {
            throw new \Exception("Las contraseñas no coinciden");
        }
        $user = new User;
        $user->nombre = $nombre;
        $user->email = $email;
        $user->password = bcrypt($password);
        $user->direccion = $direccion;
        $user->nacimiento = Carbon::parse($nacimiento);
        try{
            $id_ciudad = Ciudad::query()
                ->select("id")
                ->where("nombre", "=", $ciudad)
                ->where("id_estado", "=", $estado)
                ->where("id_municipio", "=", $municpio)
                ->get()[0]["id"];
            if($id_ciudad == null){
                throw new Exception("No existe la ciudad");
            }
            $user->ciudad = $id_ciudad;
        }catch(Exception $ex){
            $id_ciudad = Ciudad::createCity($ciudad, $estado, $municpio);
            $user->ciudad = $id_ciudad;
        }
        try {
            return $user->save();
        } catch (QueryException $e) {
            return false;
        }
    }
    public static function login(String $email, String $password, String $user_agent, String $ip){
        $count = User::all()->where("email","=", $email);
        if(($size = $count->count()) == 1){
            $id_user = $count[0]["id"];
            if(!Hash::check($password,$count[0]["password"])){
                return false;
            }
            $id = uniqid();
            $session = new session();
            $session->id = $id;
            $session->id_user = $id_user;
            $session->user_agent = $user_agent;
            $session->ip_address = $ip;
            $session->save();
            return response()->json(["status"=>"accept","token"=>$id],Response::HTTP_ACCEPTED)->header("token",$id)->withCookie("token",uniqid());
        }else{
            return false;
        }
    }
}
