<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            
            'name'      => 'wisatawan01',
            'gender'    => 'laki-laki',
            'ttl'       => '2003/06/20',
            'email'     => 'wisatawan01@gmail.com',
            'password'  => Hash::make('wisatawan01'),
            'level'     => 'wisatawan',
        ]);

        DB::table('users')->insert([
            
            'name'      => 'wisatawan02',
            'gender'    => 'laki-laki',
            'ttl'       => '2002/06/20',
            'email'     => 'wisatawan02@gmail.com',
            'password'  => Hash::make('wisatawan02'),
            'level'     => 'wisatawan',
        ]);
        DB::table('users')->insert([
            'name'      => 'admin',
            'gender'    => 'laki-laki',
            'ttl'       => '2002/06/20',
            'email'     => 'admin@gmail.com',
            'password'  => Hash::make('admin01'),
            'level'     => 'admin',
        ]);

        DB::table('users')->insert([
            'name'      => 'wisatawan',
            'gender'    => 'laki-laki',
            'ttl'       => '2002/06/20',
            'email'     => 'wisatawan@gmail.com',
            'password'  => Hash::make('wisatawan'),
            'level'     => 'wisatawan',
        ]);

        DB::table('users')->insert([
            'name'      => 'Riski Hair',
            'gender'    => 'laki-laki',
            'ttl'       => '1995/06/20',
            'email'     => 'riskihair@gmail.com',
            'password'  => Hash::make('riskihair'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Agil Setiawan',
            'gender'    => 'laki-laki',
            'ttl'       => '1992/09/25',
            'email'     => 'agilsetiawan@gmail.com',
            'password'  => Hash::make('agilsetiawan'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Zhefiansyah',
            'gender'    => 'laki-laki',
            'ttl'       => '1985/02/12',
            'email'     => 'chepy@gmail.com',
            'password'  => Hash::make('zhefiansyah'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Muhammad Firdaus',
            'gender'    => 'laki-laki',
            'ttl'       => '1986/12/25',
            'email'     => 'mfirdaus@gmail.com',
            'password'  => Hash::make('mfirdaus'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Akhmad Suharyono',
            'gender'    => 'laki-laki',
            'ttl'       => '1988/01/14',
            'email'     => 'akhmadsuharyono@gmail.com',
            'password'  => Hash::make('akhmadsuharyono'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Ayu Rahmasari',
            'gender'    => 'perempuan',
            'ttl'       => '1994/12/25',
            'email'     => 'ayurahmasari@gmail.com',
            'password'  => Hash::make('ayurahmasari'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Okta Anindyta',
            'gender'    => 'perempuan',
            'ttl'       => '1997/03/05',
            'email'     => 'oktaanindyta@gmail.com',
            'password'  => Hash::make('oktaanindyta'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Sintia',
            'gender'    => 'perempuan',
            'ttl'       => '1996/12/17',
            'email'     => 'sintia@gmail.com',
            'password'  => Hash::make('sintia'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Nabila Ayu',
            'gender'    => 'perempuan',
            'ttl'       => '1996/11/25',
            'email'     => 'nabilaayu@gmail.com',
            'password'  => Hash::make('nabilaayu'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Choirunnisa',
            'gender'    => 'perempuan',
            'ttl'       => '1999/09/09',
            'email'     => 'choirunnisa@gmail.com',
            'password'  => Hash::make('choirunnisa'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Haryo',
            'gender'    => 'laki-laki',
            'ttl'       => '1996/01/14',
            'email'     => 'haryono@gmail.com',
            'password'  => Hash::make('haryono'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Agung',
            'gender'    => 'laki-laki',
            'ttl'       => '1993/05/18',
            'email'     => 'agung@gmail.com',
            'password'  => Hash::make('agung01'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Ahmad Basuki',
            'gender'    => 'laki-laki',
            'ttl'       => '1995/02/23',
            'email'     => 'akhmadbasuki@gmail.com',
            'password'  => Hash::make('akhmadbasuki'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Jenna Vallerine',
            'gender'    => 'perempuan',
            'ttl'       => '1998/11/25',
            'email'     => 'jenna@gmail.com',
            'password'  => Hash::make('jenna01'),
            'level'     => 'tourguide',
        ]);

        DB::table('users')->insert([
            'name'      => 'Kimberly',
            'gender'    => 'perempuan',
            'ttl'       => '1997/01/01',
            'email'     => 'kimberly@gmail.com',
            'password'  => Hash::make('kimberly'),
            'level'     => 'tourguide',
        ]);
    }
}
