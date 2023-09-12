<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_order', function (Blueprint $table) {
            $table->id();
            $table->string('kode_pesan')->nullable();
            $table->foreignId('cart_id')->references('id')->on('carts');
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignUuid('id_tourguide')->references('id_tourguide')->on('tbl_tourguide');
            $table->foreignId('usertourguide_id')->references('usertourguide_id')->on('carts');
            $table->string('photo_tg')->nullable();
            $table->string('nama_tg');
            $table->string('email_tg');
            $table->integer('price');
            $table->integer('brp_hari');
            $table->string('tujuan_wisata');
            $table->string('metode_bayar');
            $table->decimal('total_price', 10, 2);
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
            $table->dropForeign(['cart_id']);
            $table->dropForeign(['user_id']);
            $table->dropForeign(['id_tourguide']);
            $table->dropForeign(['usertourguide_id']);
        });
    }
}
