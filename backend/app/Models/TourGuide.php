<?php

namespace App\Models;

use User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TourGuide extends Model
{ 
    use HasFactory;

    protected $primaryKey = 'id_tourguide';
    protected $keyType = 'string';

    protected $table = 'tbl_tourguide';
    protected $fillable = [
       'id_tourguide', 'user_id', 'name', 'email', 'password', 'gender', 'umur', 'date', 'price', 'deskripsi', 'photo', 'status', 'level',
    ];
    
    protected $hidden = [
        'password', 
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id_tourguide = Str::uuid()->toString();
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'id_tourguide');
    }

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

}
