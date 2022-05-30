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
        Schema::create('municipios', function (Blueprint $table) {
            $table->unsignedBigInteger("id")->nullable(false);
            $table->string("nombre",50)->nullable(false);
            $table->foreignId("id_estado")->references("id")->on("estados");
            $table->timestamps();
            $table->primary(["id","id_estado"]);
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('municipios');
    }
};
