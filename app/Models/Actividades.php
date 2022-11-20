<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividades extends Model
{
    use HasFactory;
    function TipoActividades(){
        $this->hasMany(\App\Models\TipoActividades::class,"tipo");
    }
    function Ranchito(){
        $this->hasMany(\App\Models\Ranchito::class,"ranchito");
    }
}
