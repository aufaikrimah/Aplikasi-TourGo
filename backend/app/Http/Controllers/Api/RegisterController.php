<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {
        $messages = [
            
            'name.required' => 'Nama harus diisi !',
            'gender.required' => 'Anda belum memilih kolom gender !',
            'ttl.required' => 'Tanggal lahir tidak boleh kosong !',
            'ttl.date' => 'Mohon isi tanggal lahir sesuai format !',
            'email.required' => 'Email wajib diisi !',
            'password.required' => 'Password tidak boleh kosong !',
            'password.min' => 'Password harus diisi minimal :min karakter !',
            'password.confirmed' => 'Konfirmasi password anda tidak cocok !',
            'max' => ':attribute harus diisi maksimal :max karakter !',
            'date' => 'Mohon isi tanggal lahir sesuai format !',
        ];
      
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'gender'=>'required',
            'ttl'=>'required|date',
            'email' => 'required|string|email:dns|max:255|unique:users',
            'password' => 'required|string|min:6',
            'level' => '',

        ],$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
    
        $user = User::create([
            'name'=>$request->name,
            'gender'=>$request->gender,
            'ttl'=>$request->ttl,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
        ]);

        if($user) {
            return response()->json([
                'success' => true,
                'datauser'    => $user,
            ], 201);
        }

        //return JSON process insert failed 
        return response()->json([
            'success' => false,
        ], 409);
    }
}
