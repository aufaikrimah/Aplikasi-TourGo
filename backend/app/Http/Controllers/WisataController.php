<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wisata;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class WisataController extends Controller
{
    public function index()
    {
        return Wisata::select('id', 'nama_wisata', 'deskripsi', 'gambar',)->get();
    }

    public function show($id)
    {
        $wisata = Wisata::find($id);

        if (!$wisata) {
            return response()->json(['message' => 'Wisata tidak ditemukan'], 404);
        }

        return response()->json([
            'wisata' => $wisata]);
    }

    public function store(Request $request)

    {
        $messages = [
        
            'nama_wisata.required' => 'Nama Wisata harus diisi !',
            'max' => ':attribute harus diisi maksimal :max karakter !',
            'deskripsi.required' => 'Deskripsi tidak boleh kosong!',
            'gambar.required' => 'Gambar tidak boleh kosong ! ekstensi yang diperbolehkan : jpeg, png, jpg, gif, svg',
            'image' => 'Gambar harus berupa gambar yang benar ! ekstensi yang diperbolehkan : jpeg, png, jpg, gif, svg'
        ];

        $validator = Validator::make($request->all(), [
            'nama_wisata' => 'required|string|max:255',
            'deskripsi'     =>'required',
            'gambar' => 'required|max:2048'
        ], $messages);
        

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

  
        $imageName = Str::random(32).".".$request->gambar->getClientOriginalExtension();
      
            // Create Product
            $wisata = Wisata::create([
                'nama_wisata' => $request->nama_wisata,
                'deskripsi' => $request->deskripsi,
                'gambar' => $imageName
            ]); 
      
            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->gambar));
      
            // Return Json Response
            if($wisata) {
            return response()->json([
                'message' => "Wisata successfully created."
            ],200);
        }
  
            //return JSON process insert failed 
            return response()->json([
                'success' => false,
            ], 409);
    }

    public function update(Request $request, $id)
            

    {
        $messages = [
        
            'nama_wisata.required' => 'Nama Wisata harus diisi !',
            'max' => ':attribute harus diisi maksimal :max karakter !',
            'deskripsi.required' => 'Deskripsi tidak boleh kosong!',
            'gambar.required' => 'Gambar tidak boleh kosong !',
            'image' => 'Gambar harus berupa gambar yang benar ! ekstensi yang diperbolehkan : jpeg, png, jpg, gif, svg'
        ];

        $wisata = Wisata::find($id);
        $validator = Validator::make($request->all(), [
            'nama_wisata' => 'required|string|max:255',
            'deskripsi'     =>'required',
            'gambar' => 'required|max:2048'
        ], $messages);
        // Find product
        $wisata = Wisata::find($id);
        if(!$wisata){
          return response()->json([
            'message'=>'Product Not Found.'
          ],404);
        }

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

  
        //echo "request : $request->image";
        $wisata->nama_wisata = $request->nama_wisata;
        $wisata->deskripsi = $request->deskripsi;
  
        if($request->gambar) {

            // Public storage
            $storage = Storage::disk('public');
  
            // Old iamge delete
            if($storage->exists($wisata->gambar))
                $storage->delete($wisata->gambar);
  
            // Image name
            $imageName = Str::random(32).".".$request->gambar->getClientOriginalExtension();
            $wisata->gambar = $imageName;
  
            // Image save in public folder
            $storage->put($imageName, file_get_contents($request->gambar));
        }
  
        // Update Product
        $wisata->save();
  
        // Return Json Response
        return response()->json([
            'message' => "Wisata successfully updated."
        ],200);
        //return JSON process insert failed 
        return response()->json([
            'success' => false,
        ], 409);
    }

  
    public function destroy($id)
    {
        // Detail 
        $wisata = Wisata::find($id);
        if(!$wisata){
          return response()->json([
             'message'=>'Product Not Found.'
          ],404);
        }
      
        // Public storage
        $storage = Storage::disk('public');
      
        // Iamge delete
        if($storage->exists($wisata->gambar))
            $storage->delete($wisata->gambar);
      
        // Delete Product
        $wisata->delete();
      
        // Return Json Response
        return response()->json([
            'message' => "Product successfully deleted."
        ],200);
    }
}
