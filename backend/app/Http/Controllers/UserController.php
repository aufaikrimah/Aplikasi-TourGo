<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

 
class UserController extends Controller
{
    public function index()
    {
        return User::select('id','name', 'gender', 'ttl','email','level')->get();
    }

    public function store (Request $request)
    {
        $messages = [
            
            'name.required' => 'Nama harus diisi !',
            'gender.required' => 'Anda belum memilih kolom gender !',
            'ttl.required' => 'Tanggal lahir tidak boleh kosong !',
            'ttl.date' => 'Mohon isi tanggal lahir sesuai format !',
            'email.required' => 'Email wajib diisi !',
            'email.dns' => 'Mohon isi email sesuai format !',
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
            'level'     =>'required',
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
            'level'     =>$request->level,
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

    public function show($id)
    {
        $user = User::find($id);
        return response()->json([
            'datauser'=>$user
        ]);
    }

    public function update(Request $request, $id)
    {
        $messages = [
            
            'name.required' => 'Nama harus diisi !',
            'gender.required' => 'Anda belum memilih kolom gender !',
            'ttl.required' => 'Tanggal lahir tidak boleh kosong !',
            'ttl.date' => 'Mohon isi tanggal lahir sesuai format !',
            'email.required' => 'Email wajib diisi !',
            'email.dns' => 'Mohon isi email sesuai format !',
            'password.required' => 'Password tidak boleh kosong !',
            'password.min' => 'Password harus diisi minimal :min karakter !',
            'password.confirmed' => 'Konfirmasi password anda tidak cocok !',
            'max' => ':attribute harus diisi maksimal :max karakter !',
            'date' => 'Mohon isi tanggal lahir sesuai format !',
        ];

        $user = User::find($id);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'gender'=>'required',
            'ttl'=>'required|date',
            'email' => 'required|string|email:dns|max:255',
            'password' => 'required|string|min:6',
            'level'     =>'required',
        ], $messages);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user->fill([
            'name'=>$request->name,
            'gender'=>$request->gender,
            'ttl'=>$request->ttl,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'level'     =>$request->level,
        ]);

        if($user->save()) {
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

    public function destroy($id)
    {
        $user = User::find($id);
        try {
            $user->delete();

            return response()->json([
                'message'=>'User Successfully Deleted!'
            ]);
        }catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while deleting a user'
            ]);
        }
    }
}
