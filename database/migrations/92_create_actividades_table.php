<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividades', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("ranchito")->nullable(false);
            $table->unsignedBigInteger("tipo")->nullable(false);
            $table->foreign("ranchito")->references("id")->on("ranchitos");
            $table->foreign("tipo")->references("id")->on("tipo_actividades");
            $table->double("latitud")->default(0);
            $table->double("longitud")->default(0);
            $table->string("nombre",100)->nullable(false);
            $table->string("descripcion",300)->nullable(false);
            $table->string("telefono",12)->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actividades');
    }
};
