<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\TourGuide;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index(Request $request)
    {

        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $orders = Order::where('user_id', auth()->id())
                                ->get();

        return response()->json($orders, 200);
    }

    public function store(Request $request) 
    {
        $messages = [
        
            'brp_hari.min' => 'Minimal pemesanan adalah 1 hari !',
            'brp_hari.required' => 'Jumlah hari dipesan tidak boleh kosong !',
            'tujuan_wisata.required' => 'Tujuan Wisata harus diisi !',
            'metode_bayar.required' => 'Mohon pilih metode pembayaran !',
        ];
        // Validasi input
        $validator = Validator::make($request->all(), [
            'cart_id' => 'required|exists:carts,id',
            'brp_hari' => 'required|integer|min:1',
            'tujuan_wisata' => 'required|string',
            'metode_bayar' => 'required|string'
        ], $messages);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Dapatkan data produk yang ingin dicheckout
        $product = Cart::find($request->cart_id);
        $totalPrice = $product->price * $request->brp_hari;

        $order = new Order;
        $order->cart_id = $product->id;
        $order->user_id = $request->user()->id;
        $order->id_tourguide = $product->id_tourguide;
        $order->usertourguide_id = $product->usertourguide_id;
        $order->photo_tg = $product->photo_tg;
        $order->nama_tg = $product->nama_tg;
        $order->email_tg = $product->email_tg;
        $order->price = $product->price;
        $order->brp_hari = $request->brp_hari;
        $order->tujuan_wisata = $request->tujuan_wisata;
        $order->metode_bayar = $request->metode_bayar;
        $order->total_price = $totalPrice;
        $order->save();

        // Berikan respons JSON
        return response()->json([
            'success' => true,
            'message' => 'Checkout berhasil.',
            'dataorder' => $order,
            'OrderId' => $order->id
        ], 200);
    }


    public function show($id)
    {
        $orderItems = Order::find($id);

        if (!$orderItems) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        return response()->json($orderItems);
    }

    public function showOrders(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $orders = Order::where('usertourguide_id', auth()->id())
                                ->with('user')
                                ->get();

        return response()->json($orders, 200);
    }

    public function destroyOrders($id)
    {
        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }
        $orders = Order::find($id);
        try {
            $orders->delete();

            return response()->json([
                'message'=>'Order Successfully Deleted!'
            ]);
        }catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while deleting a user'
            ]);
        }
    }

    public function showAllOrders()
    {
        return Order::select(
            'kode_pesan',
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
        'created_at')
        ->with('user')
        ->get();
    }

}
