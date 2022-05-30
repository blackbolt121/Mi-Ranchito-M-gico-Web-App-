<?php

namespace App\Data;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

class Data
{
    public static function readSQL($path){
        $file = fopen($path,"r") or null;
        return ( $file )? fread($file,filesize($path)) : null;
    }
    public static function insertEstados(){
        $content = self::readSQL("C:\\Users\\rgo19\\Documents\\7mo Semestre\\Ingenieria de Software\\Mi_ranchito_magico\\sql\\estados.sql");
        if ( $content ){
            try{
                DB::unprepared($content);
            }catch (QueryException $ex){
                echo 'Datos ya insertados en la base de datos';
                return false;
            }
        }
        return ($content === null)? true : false;
    }
    public static function insertMunicipios(){
        $content = self::readSQL("C:\\Users\\rgo19\\Documents\\7mo Semestre\\Ingenieria de Software\\Mi_ranchito_magico\\sql\\municipios.sql");
        if ( $content ){
            try{
                DB::unprepared($content);
            }catch (QueryException $ex){
                echo 'Datos ya insertados en la base de datos';
                return false;
            }
        }
        return ($content === null)? true : false;
    }
}
