<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class TourGuideSeeder extends Seeder
{
    public function run()
    {
        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg001',
            'user_id'       => '5',
            'name'      => 'Riski Hair',
            'email'     => 'riskihair@gmail.com',
            'password'  => Hash::make('riskihair'),
            'gender'    => 'laki-laki',
            'umur'      => '27 tahun',
            'date'      => "2018/07/18",
            'price'     => "150000",
            'deskripsi' => 'Memiliki project walking tour "Saya menyediakan layanan walking tour dan saya memiliki kemampuan berbahasa Inggris yang baik
            "',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg002',
            'user_id' => '6',
            'name'      => 'Agil Setiawan',
            'email'     => 'agilsetiawan@gmail.com',
            'password'  => Hash::make('agilsetiawan'),
            'gender'    => 'laki-laki',
            'umur'      => '30 tahun',
            'date'      => "2016/09/12",
            'price'     => "140000",
            'deskripsi' => 'Tour guide gunung (porter) "Saya menyediakan layanan tour guide gunung dan saya memiliki kemampuan skill manajemen perjalanan yang sangat baik"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg003',
            'user_id' => '7',
            'name'      => 'Zhefiansyah',
            'email'     => 'chepy@gmail.com',
            'password'  => Hash::make('chepy'),
            'gender'    => 'laki-laki',
            'umur'      => '38 tahun',
            'date'      => "2016/04/10",
            'price'     => "145000",
            'deskripsi' => 'Tergabung dalam komunitas MainJogja "Saya melayani tour berkeliling Yogyakarta dan memiliki skill manajemen perjalanan yang baik"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg004',
            'user_id' => '8',
            'name'      => 'Muhammad Firdaus',
            'email'     => 'mfirdaus@gmail.com',
            'password'  => Hash::make('mfirdaus'),
            'gender'    => 'laki-laki',
            'umur'      => '37 tahun',
            'date'      => "2009/12/29",
            'price'     => "110000",
            'deskripsi' => 'Tergabung dalam ASITA "Saya melayani tour berkeliling Yogyakarta dan biasanya saya melayani turis asing"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg005',
            'user_id' => '9',
            'name'      => 'Akhmad Suharyono',
            'email'     => 'akhmadsuharyono@gmail.com',
            'password'  => Hash::make('akhmadsuharyono'),
            'gender'    => 'laki-laki',
            'umur'      => '35 tahun',
            'date'      => "2013/01/27",
            'price'     => "100000",
            'deskripsi' => 'Pendiri HaryoBlankon "Saya melayani tour berkeliling Yogyakarta dan memiliki skill komunikasi yang dapat menimbulkan suasana yang nyaman untuk lawan bicaranya
            "',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg006',
            'user_id' => '10',
            'name'      => 'Ayu Rahmasari',
            'email'     => 'ayurahmasari@gmail.com',
            'password'  => Hash::make('ayurahmasari'),
            'gender'    => 'perempuan',
            'umur'      => '28 tahun',
            'date'      => "2019/03/21",
            'price'     => "100000",
            'deskripsi' => 'Jelajah Wisata Kuliner "Rasakan kenikmatan kuliner lokal yang autentik dengan tur yang dipandu oleh pakar makanan"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg007',
            'user_id' => '11',
            'name'      => 'Okta Anindyta',
            'email'     => 'oktaanindyta@gmail.com',
            'password'  => Hash::make('oktaanindyta'),
            'gender'    => 'perempuan',
            'umur'      => '26 tahun',
            'date'      => "2021/05/05",
            'price'     => "120000",
            'deskripsi' => 'Wisata Seni Kontemporer "Terpesona oleh keindahan seni kontemporer melalui tur ini, yang dipandu oleh ahli seni"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg008',
            'user_id' => '12',
            'name'      => 'Sintia',
            'email'     => 'sintia@gmail.com',
            'password'  => Hash::make('sintia'),
            'gender'    => 'perempuan',
            'umur'      => '27 tahun',
            'date'      => "2020/03/28",
            'price'     => "150000",
            'deskripsi' => 'Tur Eksplorasi Arsitektur "Menemukan keindahan arsitektur kota ini melalui tur yang dipandu oleh arsitek profesional"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg009',
            'user_id' => '13',
            'name'      => 'Nabila Ayu',
            'email'     => 'nabilaayu@gmail.com',
            'password'  => Hash::make('nabilaayu'),
            'gender'    => 'perempuan',
            'umur'      => '25 tahun',
            'date'      => "2022/01/21",
            'price'     => "100000",
            'deskripsi' => 'Wisata Belanja Lokal "Temukan keunikan produk lokal dengan tur belanja yang dipandu oleh pengamat mode terkenal"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg010',
            'user_id' => '14',
            'name'      => 'Choirunnisa',
            'email'     => 'choirunnisa@gmail.com',
            'password'  => Hash::make('choirunnisa'),
            'gender'    => 'perempuan',
            'umur'      => '24 tahun',
            'date'      => "2022/03/11",
            'price'     => "100000",
            'deskripsi' => 'Tur Wisata Religi "Mengalami keagungan spiritual dengan tur yang mengungkap cerita-cerita religi dan tempat-tempat suci"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg011',
            'user_id' => '15',
            'name'      => 'Haryo',
            'email'     => 'haryono@gmail.com',
            'password'  => Hash::make('haryono'),
            'gender'    => 'laki-laki',
            'umur'      => '27 tahun',
            'date'      => "2018/09/18",
            'price'     => "125000",
            'deskripsi' => 'Tur Sejarah Malam Kota "Nikmati malam yang memikat dengan tur sejarah yang mendalam di Kota ini"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg012',
            'user_id' => '16',
            'name'      => 'Agung',
            'email'     => 'agung@gmail.com',
            'password'  => Hash::make('agung01'),
            'gender'    => 'laki-laki',
            'umur'      => '30 tahun',
            'date'      => "2017/07/20",
            'price'     => "150000",
            'deskripsi' => 'Jelajahi Keindahan Taman Nasional "Temukan keajaiban alam yang memukau dengan tur melalui taman nasional yang dipandu oleh ahli lingkungan"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg013',
            'user_id' => '17',
            'name'      => 'Ahmad Basuki',
            'email'     => 'ahmadbasuki@gmail.com',
            'password'  => Hash::make('ahmadbasuki'),
            'gender'    => 'laki-laki',
            'umur'      => '28 tahun',
            'date'      => "2019/12/10",
            'price'     => "140000",
            'deskripsi' => 'Petualangan Alam Gunung "Temukan keindahan alam yang menakjubkan dengan tur petualangan gunung bersama pemandu ahli"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg014',
            'user_id' => '18',
            'name'      => 'Jenna Vallerine',
            'email'     => 'jenna@gmail.com',
            'password'  => Hash::make('jenna01'),
            'gender'    => 'perempuan',
            'umur'      => '25 tahun',
            'date'      => "2022/01/24",
            'price'     => "100000",
            'deskripsi' => 'Wisata Pariwisata Sehar "Jelajahi atraksi wisata terkenal dalam satu hari dengan tur yang efisien dan seru bersama pemandu lokal"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

        DB::table('tbl_tourguide')->insert([
            'id_tourguide' => 'tg015',
            'user_id' => '19',
            'name'      => 'Kimberly',
            'email'     => 'kimberly@gmail.com',
            'password'  => Hash::make('kimberly'),
            'gender'    => 'perempuan',
            'umur'      => '26 tahun',
            'date'      => "2022/08/11",
            'price'     => "100000",
            'deskripsi' => 'Tur Fotografi Lanskap "Menangkap keindahan alam melalui tur fotografi lanskap yang dipandu oleh fotografer profesional"',
            'photo' => '',
            'status' => '',
            'level'     => 'tourguide',
        ]);

    }

   
}