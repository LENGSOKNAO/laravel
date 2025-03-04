<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banners;

class BannerController extends Controller
{
    public function index(){
     
      $banners = Banners::all();
      return view('Banner.index', compact('banners'));

    }
    public function create(){
        return view('banner.create');
    }
    public function store(Request $request){

        $data = $request->validate([
            'banner_name' => 'required|string|max:256',
            'banner_image' => 'required|image',
            'banner_description' => 'nullable|string',
            'banner_is_enabled' => 'boolean',
            'banner_brand' => 'nullable|string'
        ]);

        $image =  $request->file('banner_image')->store('Banners','public');

        Banners::create([
            'banner_name' => $request->banner_name,
            'banner_image' => $image,
            'banner_description' => $request->banner_description,
            'banner_is_enabled' => $request->banner_is_enbaled ?? 0,
            'banenr_brand' => $request->banner_brand
        ]);

        return redirect()->route('banner.index')->with('Data is create');
    }
    public function edit(Banners $banner) {
        return view('banner.edit', compact('banner'));
    }    
    public function update(Request $request, Banners $banner)
    {
        $data = $request->validate([
            'banner_name' => 'required|string|max:256',
            'banner_image' => 'nullable|image',
            'banner_description' => 'nullable|string',
            'banner_brand' => 'nullable|string'
        ]);
    
       
        $data['banner_is_enabled'] = $request->has('banner_is_enabled') ? true : false;
    
        if ($request->file('banner_image')) {
            $image = $request->file('banner_image')->store('Banners', 'public');
            $data['banner_image'] = $image; 
        }
    
        $banner->update($data);
    
        return redirect()->route('banner.index')->with('success', 'Banner updated successfully!');
    }
    public function destroy(Banners $banner){

        $banner->delete();
        return redirect()->route('banner.index');

    }
}
