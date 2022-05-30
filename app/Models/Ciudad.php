<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    use HasFactory;

    protected $table = 'ciudades';

    public function municipio()
    {
        $this->belongsTo(Municipio::class);
    }

    public function ranchito()
    {
        $this->hasMany(Ranchito::class);
    }

    public static function createCity(string $nombre,int $id_estado,int $id_municipio,float $lat = 0,float $long = 0)
    {
        try {
            $city = new Ciudad();
            $city->nombre = $nombre;
            $city->id_estado = $id_estado;
            $city->id_municipio = $id_municipio;
            $city->latitud = $lat;
            $city->longitud = $long;
            $city->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
        return $city->id;
    }
    public static function createRanchitos(){
        try{
            Ciudad::createCity("Cuitzeo",16,20,19.9693467805032,-101.140302190923);
            Ciudad::createCity("Jiquilpan",16,45,19.9962434887108,-102.717815916321);
            Ciudad::createCity("Mineral de Angangueo",16,5,19.6160969870389,-100.290619283807);
            Ciudad::createCity("Paracho de Verduzco",16,65,19.6461046302824,-102.048013711079);
            Ciudad::createCity("Patzcuaro",16,65,19.513188902257,-101.609140804656);
            Ciudad::createCity("Santa Clara del Cobre",16,79,19.4058314679007,-101.638457022658);
            Ciudad::createCity("Tacámbaro",16,82,19.2354504677027,-101.45847912992);
            Ciudad::createCity("Tlalpujahua",16,93,19.8052979715365,-100.173284595898);
            Ciudad::createCity("Tzintzuntzan",16,93,19.6275258595407,-101.577984998058);
        }catch (\Exception $exception){

        }
    }
}
