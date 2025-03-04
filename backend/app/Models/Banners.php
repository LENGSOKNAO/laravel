<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banners extends Model
{
    protected $fillable = [
        'banner_name',
        'banner_image',
        'banner_description',
        'banner_small_image',
        'banner_slide_image',
        'banner_is_enabled',
        'banner_brand',
    ];
}
