<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    use HasFactory;
    public function estado(){
        return $this->belongsTo(Estado::class, 'id_estado', 'id');
    }
    public function ciudad(){
        return $this->hasMany(Ciudad::class);
    }
}
