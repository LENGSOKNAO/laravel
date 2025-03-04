<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = [
        'product_name', 'product_code', 'product_category', 'product_brand', 
        'product_price', 'product_sizes', 'product_main_image', 'product_list_images', 
        'product_qty', 'product_description'
    ];

    protected $casts = [
        'product_sizes' => 'array',  
        'product_list_images' => 'array',
    ];
}
