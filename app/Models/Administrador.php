<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\User;

class Administrador extends Model
{
    use HasFactory;
    function User(){
        $this->hasMany(User::class,"id");
    }
}
