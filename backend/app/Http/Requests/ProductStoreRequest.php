<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'email' => 'required',
                'password' => 'required',
                'gender' => 'required',
                'umur'  =>'required',
                'date'  =>'required',
                'price' => 'required',
                'deskripsi' => 'required',
                'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'email' => 'required',
                'password' => 'required',
                'gender' => 'required',
                'umur'  =>'required',
                'date'  =>'required',
                'price' => 'required',
                'deskripsi' => 'required',
                'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ];
        }
    }

    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'Email is required',
                'password.required' => 'Password is required',
                'gender.required' => 'Gender is required',
                'umur.required'  =>'Umur is required',
                'date.required'  =>'Date is required',
                'price.required' => 'Price is required',
                'deskripsi.required' => 'Deskripsi is required',
                'photo.required' => 'Image is required!'
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'Email is required',
                'password.required' => 'Password is required',
                'gender.required' => 'Gender is required',
                'umur.required'  =>'Umur is required',
                'date.required'  =>'Date is required',
                'price.required' => 'Price is required',
                'deskripsi.required' => 'Deskripsi is required'
                
            ];   
        }
    }
}
