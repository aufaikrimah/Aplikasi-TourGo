<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('kode_user')->nullable();
            $table->string('name');
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->string('ttl');
            $table->string('email', 250)->unique();
            $table->string('password');
            $table->enum('level', ['wisatawan', 'admin', 'tourguide']);
            $table->timestamps();
        });
    }

   
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
