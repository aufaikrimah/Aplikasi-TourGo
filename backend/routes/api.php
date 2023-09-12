<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TourGuideController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\WisataController;
use  App\Http\Controllers\Api\LoginController;
use  App\Http\Controllers\Api\RegisterController;
use  App\Http\Controllers\Api\LogoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::post('/register', App\Http\Controllers\Api\RegisterController::class)->name('register');
//Route::post('/login', App\Http\Controllers\UserController::class)->name('login');
//Route::post('/logout', App\Http\Controllers\Api\LogoutController::class)->name('logout');

//Route::middleware('auth:api')->get('/user', function (Request $request) {
  // return $request->user();});
//Route::get('/user', 'UserController@getAuthenticatedUser')->middleware('jwt.verify');
//Route::get('/datauser', [UserController::class, 'datauser'])->middleware('auth:api');

Route::post('/register', App\Http\Controllers\Api\RegisterController::class)->name('register');
Route::post('/login', App\Http\Controllers\Api\LoginController::class)->name('login');


Route::middleware('auth:api')->get('/datauser', function (Request $request) {
  return $request->user(); 
});


//Route::post('register', [UserController::class, 'register']);
//Route::post('login', [UserController::class, 'login']);
//Route::middleware('auth:api')->get('/datauser', function (Request $request) {
 // return $request->user();});

Route::post('/logout', App\Http\Controllers\Api\LogoutController::class)->name('logout');



//Route::get('/login', [UserController::class, 'index'])->middleware('auth');
//Route::post('/login', [LoginController::class, 'authenticate']);
//Route::get('/register', [RegisterController::class, 'index']);
//Route::post('/register', [RegisterController::class, 'store']);
//Route::post('/logout', [LogoutController::class, 'logout']);

//Route::post('/logout', [LogoutController::class, 'logout']);

Route::get('/user', [UserController::class, 'index']);
Route::post('/user/store', [UserController::class, 'store']);
Route::get('/user/show/{id}', [UserController::class, 'show']);
Route::put('/user/update/{id}', [UserController::class, 'update']);
Route::delete('/user/destroy/{id}', [UserController::class, 'destroy']);


Route::middleware('verify.product.uuid')->get('/datatourguide', function (Request $request) {
  return $request->product();
});
Route::get('/products', [TourGuideController::class, 'index']);
Route::get('/products/show/{uuid}', [TourGuideController::class, 'show']);
Route::post('/products/create', [TourGuideController::class, 'store']);
Route::put('/products/update/{uuid}', [TourGuideController::class, 'update']);
Route::delete('/product/delete/{uuid}', [TourGuideController::class, 'destroy']);

Route::get('/wisata', [WisataController::class, 'index']);
Route::get('/wisata/show/{id}', [WisataController::class, 'show']);
Route::post('/wisata/create', [WisataController::class, 'store']);
Route::put('/wisata/update/{id}', [WisataController::class, 'update']);
Route::delete('/wisata/delete/{id}', [WisataController::class, 'destroy']);



//Route::resource('/cart', App\Http\Controllers\CartController::class)->only('index');
Route::get('/cart', [CartController::class, 'index'])->middleware('auth:api');
Route::post('/carts', [CartController::class, 'store'])->middleware('auth:api');
Route::get('/carts/show/{id}', [CartController::class, 'show']);
Route::delete('/carts/destroy/{id}', [CartController::class, 'destroy'])->middleware('auth:api');
//Route::post('/cart/add', [CartController::class, 'addToCart'])->middleware('auth:api');

Route::get('/dataorder', [OrderController::class, 'index'])->middleware('auth:api');
Route::post('/order', [OrderController::class, 'store'])->middleware('auth:api');
Route::get('/order/show/{id}', [OrderController::class, 'show']);
Route::get('/allorder', [OrderController::class, 'showAllOrders']);


Route::middleware('auth:api')->group(function () {
  // Endpoint untuk menampilkan pesanan kepada akun tourguide yang bersangkutan
  Route::get('/tourguide/orders', [OrderController::class, 'showOrders']);
  Route::delete('/order/delete/{id}', [OrderController::class, 'destroyOrders']);
});

Route::group(['middleware' => 'auth:api'], function () {
  // Mengambil data profil pengguna tourguide
  Route::get('/profiletg', [TourGuideController::class, 'getProfile']);

});