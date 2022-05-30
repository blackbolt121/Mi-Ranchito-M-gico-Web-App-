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
        Schema::create('ciudades', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string("nombre",100)->nullable(false);
            $table->foreignId("id_estado")->references("id_estado")->on("municipios");
            $table->foreignId("id_municipio")->references("id")->on("municipios");
            $table->double("latitud");
            $table->double("longitud");
            $table->index(["id_municipio","id_estado"]);
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
        Schema::dropIfExists('ciudades');
    }
};
