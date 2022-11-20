<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoActividades extends Model
{
    use HasFactory;
    function Actividades(){
        $this->belongsTo(\App\Models\Actividades::class,"tipo","id");
    }
}
