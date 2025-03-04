<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductController extends Controller
{
    public function showData()
    {
        $products = Products::all();
        return response()->json($products);
    }
    public function page($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
    public function search(Request $request)
    {
        $search = $request->query('search');

        $products = Product::when($search, function ($query, $search) {
            return $query->where('product_name', 'LIKE', "%{$search}%")
                         ->orWhere('product_category', 'LIKE', "%{$search}%")
                         ->orWhere('product_brand', 'LIKE', "%{$search}%");
        })->get();

        if ($products->isEmpty()) {
            return response()->json(['message' => 'No products found'], 404); // Changed to 404
        }

        return response()->json($products);
    }
    public function index()
    {
        $products = Products::paginate(10);  
        return view('products.index', compact('products'));
    }
    public function create()
    {
        return view('products.create');
    }
    public function edit(Products $product)
    {
        return view('products.edit', compact('product'));
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'product_code' => 'required|integer',
            'product_category' => 'required|array|min:1',
            'product_brand' => 'required|string|max:255',
            'product_price' => 'required|numeric|min:0',
            'product_sizes' => 'nullable|array',
            'product_main_image.*' => 'nullable|image',
            'product_list_images.*' => 'nullable|image',
            'product_qty' => 'required|integer|min:0',
            'product_description' => 'nullable|string',
        ]);
    
        $mainImagePath = $request->file('product_main_image')->store('products', 'public');
        
        $additionalImages = [];
        if ($request->hasFile('product_list_images')) {
            $product_list_images = is_array($request->file('product_list_images')) ? $request->file('product_list_images') : [$request->file('product_list_images')];
            foreach ($product_list_images as $image) {
                $additionalImages[] = $image->store('products', 'public');
            }
        }

        $product = Products::create([
            'product_name' => $request->product_name,
            'product_code' => $request->product_code,
            'product_category' => implode(',', $request->product_category), // Join categories
            'product_brand' => $request->product_brand,
            'product_price' => $request->product_price,
            'product_sizes' => is_array($request->product_sizes) ? json_encode($request->product_sizes) : $request->product_sizes,
            'product_main_image' => $mainImagePath,
            'product_list_images' => !empty($additionalImages) ? json_encode($additionalImages) : '[]',
            'product_qty' => $request->product_qty,
            'product_description' => $request->product_description,
        ]);
        
        return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }
    public function update(Request $request, Products $product)
    {
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'product_code' => 'required|integer',
            'product_category' => 'required|array|min:1',
            'product_brand' => 'required|string|max:255',
            'product_price' => 'required|numeric|min:0',
            'product_sizes' => 'nullable|array',
            'product_main_image.*' => 'nullable|image',
            'product_list_images.*' => 'nullable|image',
            'product_qty' => 'required|integer|min:0',
            'product_description' => 'nullable|string',
        ]);
    
        if ($request->hasFile('product_main_image')) {
            $product->product_main_image = $request->file('product_main_image')->store('product_main_image', 'public');
        }
    
        $additionalImages = [];
        if ($request->hasFile('product_list_images')) {
            $product_list_images = is_array($request->file('product_list_images')) ? $request->file('product_list_images') : [$request->file('product_list_images')];
            foreach ($product_list_images as $image) {
                $additionalImages[] = $image->store('products', 'public');
            }
        }
    
        $product->fill([
            'product_name' => $request->product_name,
            'product_code' => $request->product_code,
            'product_category' => implode(',', $request->product_category),
            'product_brand' => $request->product_brand,
            'product_price' => $request->product_price,
            'product_sizes' => is_array($request->product_sizes) ? json_encode($request->product_sizes) : $request->product_sizes,
            'product_qty' => $request->product_qty,
            'product_description' => $request->product_description,
        ]);
    
        if (!empty($additionalImages)) {
            $product->product_list_images = json_encode($additionalImages);
        }
    
        $product->save();
    
        return redirect()->route('products.index')->with('success', 'Product updated successfully!');
    }
    public function destroy(Products $product)
    {
        $product->delete();

        return redirect()->route('products.index')->with('success', 'Product deleted successfully!');
    }
}
