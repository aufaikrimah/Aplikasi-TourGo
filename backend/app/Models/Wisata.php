<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Alfa6661\AutoNumber\AutoNumberTrait;

class Wisata extends Model
{
    use HasFactory,  AutoNumberTrait;
    protected $table = 'tbl_wisata';
    protected $primaryKey = 'id';
    protected $fillable = [
        'kode_wisata', 'nama_wisata', 'deskripsi', 'gambar', 
    ];

    public function getAutoNumberOptions()
    {
        return [
            'kode_wisata' => [
                'format' => 'WST-?',
                'length' => 3,
                'field' => 'kode_user',
                'prefix' => 'WST-',
            ]
        ];
    }

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
}
