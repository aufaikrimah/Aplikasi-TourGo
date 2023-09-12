<?php

namespace App\Models;

use Order;
use TourGuide;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Alfa6661\AutoNumber\AutoNumberTrait;
  
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, AutoNumberTrait;

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = [
        'kode_user', 'name', 'gender', 'ttl', 'email', 'password', 'level',
    ];
    
    protected $hidden = [
        'password', 
    ];


    public function getAutoNumberOptions()
    {
        return [
            'kode_user' => [
                'format' => 'USR-?',
                'length' => 3,
                'field' => 'kode_user',
                'prefix' => 'USR-',
            ]
        ];
    }


    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return[];
    }

    public function tourGuide()
    {
        return $this->hasOne(TourGuide::class, 'user_id');
    }

    public function order()
    {
        return $this->hasMany(Order::class, 'user_id');
    }
}
