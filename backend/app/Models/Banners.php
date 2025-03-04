<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banners extends Model
{
    protected $fillable = [
        'banner_name',
        'banner_image',
        'banner_description',
        'banner_is_enabled',
        'banner_brand',
    ];
}
