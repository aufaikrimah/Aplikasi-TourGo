<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $messages = [
            'email.dns' => 'Harap isi email dengan format yang benar !',
            'email' => 'Harap isi email dengan format yang benar !',
            'email.required' => 'Email wajib diisi !',
            'password.required' => 'Password tidak boleh kosong !',
            'password.min' => 'Password harus diisi minimal :min karakter !',
            'max' => ':attribute harus diisi maksimal :max karakter !',
        ];

        $validator = Validator::make($request->all(), [
            'email'     => 'required|string|email:dns|max:255',
            'password'  => 'required|string|min:6'
        ],$messages);

        //if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //get credentials from request
        $credentials = $request->only('email', 'password');

        //if auth failed
        if(!$token = auth()->guard('api')->attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Email atau Password Anda salah'
            ], 401);
        }

        //if auth success
        return response()->json([
            'success' => true,
            'datauser'    => auth()->guard('api')->user(),
            'token'   => $token   
        ], 200);
    }
}
