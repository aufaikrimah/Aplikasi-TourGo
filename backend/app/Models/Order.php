<?php

namespace App\Models;

use App\Models\TourGuide;
use App\Models\User;
use App\Models\Cart;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Alfa6661\AutoNumber\AutoNumberTrait;

class Order extends Model
{
    use HasFactory, AutoNumberTrait;
    protected $table = 'tbl_order';
    protected $primaryKey = 'id';
    protected $fillable = [
        'kode_pesan',
        'cart_id',
        'user_id',
        'id_tourguide',
        'usertourguide_id',
        'photo_tg',
        'nama_tg',
        'email_tg',
        'price',
        'brp_hari',
        'tujuan_wisata',
        'metode_bayar',
        'total_price',
        
    ];

    public function getAutoNumberOptions()
    {
        return [
            'kode_pesan' => [
                'field' => 'kode_pesan',
                'format' => function () {
                    return 'PS/' . date('Ym') . '/?'; 
                },
                'length' => 5,
            ]
        ];
    }

    public function cart()
    {
        return $this->belongsTo(Cart::class);
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
