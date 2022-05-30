<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class session extends Model
{
    use HasFactory;
    public function user(){
        $this->belongsTo(User::class,"id_user","id");
    }

}
