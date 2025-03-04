<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banners;

class BannerController extends Controller
{
    public function showindex(){
        $banners = Banners::all();
        return response()->json($banners);
    }
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
            'banner_small_image' => 'required|image',
            'banner_slide_image' => 'required|image',
            'banner_description' => 'nullable|string',
            'banner_is_enabled' => 'boolean',
            'banner_brand' => 'nullable|string'
        ]);

        $image =  $request->file('banner_image')->store('Banners','public');
        $slide =  $request->file('banner_slide_image')->store('Banners','public');
        $small =  $request->file('banner_small_image')->store('Banners','public');

        Banners::create([
            'banner_name' => $request->banner_name,
            'banner_image' => $image,
            'banner_slide_image' => $slide,
            'banner_small_image' => $small,
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
            'banner_small_image' => 'nullable|image',
            'banner_slide_image' => 'nullable|image',
            'banner_description' => 'nullable|string',
            'banner_is_enabled' => 'boolean',
            'banner_brand' => 'nullable|string'
        ]);
    
        $data['banner_is_enabled'] = $request->has('banner_is_enabled') ? true : false;
    
        if ($request->hasFile('banner_image')) {
            $data['banner_image'] = $request->file('banner_image')->store('Banners', 'public');
        } else {
            $data['banner_image'] = $banner->banner_image;  
        }
    
        if ($request->hasFile('banner_small_image')) {
            $data['banner_small_image'] = $request->file('banner_small_image')->store('Banners', 'public');
        } else {
            $data['banner_small_image'] = $banner->banner_small_image;
        }
    
        if ($request->hasFile('banner_slide_image')) {
            $data['banner_slide_image'] = $request->file('banner_slide_image')->store('Banners', 'public');
        } else {
            $data['banner_slide_image'] = $banner->banner_slide_image;
        }

        $banner->update($data);
    
        return redirect()->route('banner.index')->with('success', 'Banner updated successfully!');
    }
    
    public function destroy(Banners $banner){

        $banner->delete();
        return redirect()->route('banner.index');

    }
}
