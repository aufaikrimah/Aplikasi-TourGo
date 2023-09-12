<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateTourGuidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_tourguide', function (Blueprint $table) {
            $table->uuid('id_tourguide')->primary();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('name')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('gender')->nullable();
            $table->string('umur')->nullable();
            $table->date('date')->nullable();
            $table->integer('price')->nullable();
            $table->text('deskripsi')->nullable();
            $table->string('photo')->nullable();
            $table->string('status')->nullable();
            $table->enum('level', ['tourguide']);
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
        Schema::table('tbl_order', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
    }
}
