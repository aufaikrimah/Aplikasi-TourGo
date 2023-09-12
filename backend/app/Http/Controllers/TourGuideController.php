<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use Illuminate\Support\Str;
use App\Models\TourGuide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TourGuideController extends Controller
{
    public function index()
    {
        return TourGuide::select('id_tourguide', 'user_id', 'name', 'email', 'password', 'gender', 'umur', 'date', 'price', 'deskripsi', 'photo', 'status', 'level',)->get();
    }

    public function show($id_tourguide)
    {
        $product = TourGuide::find($id_tourguide);

        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        return response()->json([
            'product' => $product]);
    }

    public function update(Request $request, $id_tourguide)
    {
            $messages = [
            
                'name.required' => 'Nama harus diisi !',
                'gender.required' => 'Anda belum memilih kolom gender !',
                'umur.required' => 'Umur tidak boleh kosong !',
                'date.date' => 'Mohon isi tanggal sesuai format !',
                'email.required' => 'Email wajib diisi !',
                'email.dns' => 'Mohon isi email sesuai format !',
                'password.required' => 'Password tidak boleh kosong !',
                'password.min' => 'Password harus diisi minimal :min karakter !',
                'max' => ':attribute harus diisi maksimal :max karakter !',
                'date.required' => 'Tanggal mulai menjadi tour guide tidak boleh kosong!',
                'price.required' => 'Harga tidak boleh kosong!',
                'deskripsi.required' => 'Deskripsi tidak boleh kosong!',
                'price.integer' => 'Mohon isi harga hanya nominal angka saja tanpa simbol apapun !',
                'photo.required' => 'Photo tidak boleh kosong !',
                'image' => 'Gambar harus berupa gambar yang benar ! ekstensi yang diperbolehkan : jpeg, png, jpg, gif, svg'
            ];
    
            $product = TourGuide::find($id_tourguide);
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email:dns|max:255',
                'password' => 'required|string|min:6',
                'gender'=>'required',
                'umur'=>'required',
                'date'     =>'required|date',
                'price'     =>'required|integer',
                'deskripsi'     =>'required',
                'photo' => 'required|max:2048',
                'status' => '',
            ], $messages);
            // Find product
            $product = TourGuide::find($id_tourguide);
            if(!$product){
              return response()->json([
                'message'=>'Product Not Found.'
              ],404);
            }

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
    
      
            //echo "request : $request->image";
            $product->name = $request->name;
            $product->email = $request->email;
            $product->password = $request->password;
            $product->gender = $request->gender;
            $product->umur = $request->umur;
            $product->date = $request->date;
            $product->price = $request->price;
            $product->deskripsi = $request->deskripsi;
            $product->status = $request->status;
      
            if($request->photo) {
 
                // Public storage
                $storage = Storage::disk('public');
      
                // Old iamge delete
                if($storage->exists($product->photo))
                    $storage->delete($product->photo);
      
                // Image name
                $imageName = Str::random(32).".".$request->photo->getClientOriginalExtension();
                $product->photo = $imageName;
      
                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->photo));
            }
      
            // Update Product
            $product->save();
      
            // Return Json Response
            return response()->json([
                'message' => "Product successfully updated."
            ],200);
         //return JSON process insert failed 
        return response()->json([
            'success' => false,
        ], 409);
    }

    public function store(Request $request)

    {
        $messages = [
        
            'name.required' => 'Nama harus diisi !',
            'id_tourguide.required' => 'id harus diisi !',
            'unique' => 'id ini sudah diambil',
            'exists' => 'Mohon buat akun tour guide terlebih dahulu sebelum menambah data tour guide !',
                'gender.required' => 'Anda belum memilih kolom gender !',
                'umur.required' => 'Umur tidak boleh kosong !',
                'date.date' => 'Mohon isi tanggal sesuai format !',
                'email.required' => 'Email wajib diisi !',
                'email.dns' => 'Mohon isi email sesuai format !',
                'password.required' => 'Password tidak boleh kosong !',
                'password.min' => 'Password harus diisi minimal :min karakter !',
                'max' => ':attribute harus diisi maksimal :max karakter !',
                'date.required' => 'Tanggal mulai menjadi tour guide tidak boleh kosong!',
                'price.required' => 'Harga tidak boleh kosong!',
                'deskripsi.required' => 'Deskripsi tidak boleh kosong!',
                'price.integer' => 'Mohon isi harga hanya nominal angka saja tanpa simbol apapun !',
                'photo.required' => 'Photo tidak boleh kosong !',
                'image' => 'Gambar harus berupa gambar yang benar ! ekstensi yang diperbolehkan : jpeg, png, jpg, gif, svg'
        ];

        $validator = Validator::make($request->all(), [
            'id_tourguide' => 'required|string|unique:tbl_tourguide',
            'user_id' => 'required|unique:tbl_tourguide|exists:users,id',
            'name' => 'required|string|max:255',
                'email' => 'required|string|email:dns|max:255',
                'password' => 'required|string|min:6',
                'gender'=>'required',
                'umur'=>'required',
                'date'     =>'required|date',
                'price'     =>'required|integer',
                'deskripsi'     =>'required',
                'photo' => 'required|max:2048'
        ], $messages);
        

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

  
        $imageName = Str::random(32).".".$request->photo->getClientOriginalExtension();
      
        

            // Create Product
            $product = TourGuide::create([
                'id_tourguide' => $request->id_tourguide,
                'user_id' => $request->user_id,
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'gender' => $request->gender,
                'umur' => $request->umur,
                'date' => $request->date,
                'price' => $request->price,
                'deskripsi' => $request->deskripsi,
                'photo' => $imageName
            ]); 
      
            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->photo));
      
            // Return Json Response
            if($product) {
            return response()->json([
                'message' => "Tour Guide successfully created."
            ],200);
        }
  
            //return JSON process insert failed 
            return response()->json([
                'success' => false,
            ], 409);
    }
  
    public function destroy($id_tourguide)
    {
        // Detail 
        $product = TourGuide::find($id_tourguide);
        if(!$product){
          return response()->json([
             'message'=>'Product Not Found.'
          ],404);
        }
      
        // Public storage
        $storage = Storage::disk('public');
      
        // Iamge delete
        if($storage->exists($product->photo))
            $storage->delete($product->photo);
      
        // Delete Product
        $product->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "Product successfully deleted."
        ],200);
    }


    public function getProfile()
    {
        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $usertg = TourGuide::where('user_id', auth()->id())->get();

        return response()->json([
            'usertg' => $usertg], 200);
    }

}
