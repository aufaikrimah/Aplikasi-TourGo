<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->string('kode_cart')->nullable();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignUuid('id_tourguide')->references('id_tourguide')->on('tbl_tourguide');
            $table->foreignId('usertourguide_id')->references('user_id')->on('tbl_tourguide');
            $table->string('nama_tg');
            $table->string('email_tg');
            $table->integer('price');
            $table->string('photo_tg')->nullable();
            $table->integer('brp_hari');
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
        Schema::table('carts', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['id_tourguide']);
            $table->dropForeign(['usertourguide_id']);
        });
    }
}