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
        Schema::create('users', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string("nombre", 100)->nullable(false);
            $table->string("password",200)->nullable(false);
            $table->string("email",200)->nullable(false)->unique();
            $table->string("direccion",200);
            $table->date("nacimiento")->nullable(false);
            $table->foreignId("ciudad")->references("id")->on("ciudades")->nullable(false);
            $table->timestamps();
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
        Schema::dropIfExists('users');
    }
};
