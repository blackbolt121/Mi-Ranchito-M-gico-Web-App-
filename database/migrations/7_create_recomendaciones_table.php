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
        Schema::create('recomendacions', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignid("id_visita")->references("id")->on("visitas");
            $table->string("comentario",300);
            $table->double("puntuacion");
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
        Schema::dropIfExists('recomendaciones');
    }
};
