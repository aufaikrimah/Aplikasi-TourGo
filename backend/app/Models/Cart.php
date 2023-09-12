<?php

namespace App\Models;

use App\Models\TourGuide;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Alfa6661\AutoNumber\AutoNumberTrait;

class Cart extends Model
{
    use HasFactory, AutoNumberTrait;
    protected $table = 'carts';
    protected $primaryKey = 'id';
    protected $fillable = [
        'kode_cart',
        'user_id',
        'id_tourguide',
        'usertourguide_id',
        'nama_tg',
        'email_tg',
        'price',
        'photo_tg',
        'brp_hari',
    ];

    public function getAutoNumberOptions()
    {
        return [
            'kode_cart' => [
                'field' => 'kode_cart',
                'format' => function () {
                    return 'CART/' . date('Ym') . '/?'; 
                },
                'length' => 5,
            ]
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(TourGuide::class);
    }
}