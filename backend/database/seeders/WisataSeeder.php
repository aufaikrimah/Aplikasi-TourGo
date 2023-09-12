<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WisataSeeder extends Seeder
{
    public function run()
    {
        DB::table('tbl_wisata')->insert([
            
            'nama_wisata'      => 'Kabupaten Bantul',
            'deskripsi'    => 'Bantul adalah sebuah wilayah kabupaten yang terletak di Daerah Istimewa Yogyakarta, Indonesia. Kabupaten bantul terkenal akan wisata alam dan pantainya yang indah. Beberapa pantai yang terkenal di Kabupaten Bantul adalah Pantai Parangtritis dan Pantai Parangkusumo.',
            'gambar'       => '',
        ]);

        DB::table('tbl_wisata')->insert([
            
            'nama_wisata'      => 'Kabupaten Gunung Kidul',
            'deskripsi'    => 'Gunungkidul adalah sebuah wilayah kabupaten yang terletak di Daerah Istimewa Yogyakarta, Indonesia. Gunungkidul merupakan daerah tandus dan sering mengalami kekeringan ketika musim kemarau, walau begitu Gunungkidul memiliki sejarah yang unik, juga memiliki potensi pada pariwisata, budaya, dan kulinernya.',
            'gambar'       => '',
        ]);

        DB::table('tbl_wisata')->insert([
            
            'nama_wisata'      => 'Kabupaten Kulon Progo',
            'deskripsi'    => 'Kulon Progo adalah sebuah kabupaten yang terletak di Daerah Istimewa Yogyakarta. Pada bagian barat laut wilayah kabupaten ini berupa pegunungan (Bukit Menoreh) dan di bagian selatan merupakan dataran rendah yang landai hingga ke pantai (Pantai Congot, Pantai Glagah Indah, dan Pantai Trisik).',
            'gambar'       => '',
        ]);

        DB::table('tbl_wisata')->insert([
            
            'nama_wisata'      => 'Kabupaten Sleman',
            'deskripsi'    => 'Sleman adalah sebuah wilayah kabupaten yang terletak di Daerah istimewa Yogyakarta. Sleman ini dikenal sebagai asal buah salah pondoh.',
            'gambar'       => '',
        ]);

        DB::table('tbl_wisata')->insert([
            
            'nama_wisata'      => 'Kota Yogyakarta',
            'deskripsi'    => 'Yogyakarta adalah ibukota dari provinsi DI Yogyakarta . Kota Yogyakarta ini adalah kediaman dari Sultan Hamengkubuwana dan Adipati Paku Alam. di DI Yogyakarta Keraton/Kerajaan masih berfungsi.',
            'gambar'       => '',
        ]);



    }
}
