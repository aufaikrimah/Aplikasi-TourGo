<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\TourGuide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class CartController extends Controller
{
   
    public function index()
    {

        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        // Dapatkan data keranjang belanja pengguna
        $cartItems = Cart::where('user_id', auth()->id())
                         ->with('product')
                         ->get();

        // Berikan respons JSON
        return response()->json($cartItems, 200);
    }

    public function store(Request $request) 
    {
        $messages = [
        
            'brp_hari.min' => 'Minimal pemesanan adalah 1 hari !',
        ];

        // Validasi input
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|exists:tbl_tourguide,id_tourguide',
            'brp_hari' => 'required|integer|min:1',
        ], $messages);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Dapatkan data produk yang ingin ditambahkan ke keranjang
        $product = TourGuide::find($request->product_id);

        // Cek apakah produk sudah ada di keranjang pengguna
        $cart = Cart::where('user_id', auth()->id())
            ->where('id_tourguide', $product->id_tourguide)
            ->where('usertourguide_id', $product->user_id)
            ->where('nama_tg', $product->name)
            ->where('email_tg', $product->email)
            ->where('price', $product->price)
            ->where('photo_tg', $product->photo)
            ->first();

        if ($cart) {
            // Jika produk sudah ada di keranjang, tambahkan jumlahnya
            $cart->brp_hari += $request->brp_hari;
            $cart->save();
        } else {
            // Jika produk belum ada di keranjang, buat entri baru di database
            $cart = new Cart();
            $cart->user_id = auth()->id();
            $cart->id_tourguide = $product->id_tourguide;
            $cart->usertourguide_id = $product->user_id;
            $cart->nama_tg = $product->name;
            $cart->email_tg = $product->email;
            $cart->price = $product->price;
            $cart->photo_tg = $product->photo;
            $cart->brp_hari = $request->brp_hari;
            $cart->save();
        }

        // Berikan respons JSON
        return response()->json(['message' => 'Produk ditambahkan ke keranjang !'], 200);
    }

    public function show($id)
    {
        $cartItems = Cart::find($id);

        if (!$cartItems) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        return response()->json($cartItems);
    }

    public function destroy($id)
    {
        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }
        $cartItems = Cart::find($id);
        try {
            $cartItems->delete();

            return response()->json([
                'message'=>'Cart Successfully Deleted!'
            ]);
        }catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while deleting a cart'
            ]);
        }
    }

}
