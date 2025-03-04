<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ProductController;
require __DIR__.'/auth.php';

// banner

Route::get('/banner', [BannerController::class, 'index'])->name('banner.index');
Route::get('/banner/create', [BannerController::class, 'create'])->name('banner.create');
Route::post('banner', [BannerController::class, 'store'])->name('banner.store');
Route::get('/banner/{banner}/edit', [BannerController::class , 'edit'])->name('banner.edit');
Route::put('/banner/{banner}', [BannerController::class , 'update'])->name('banner.update');
Route::delete('/banner/{banner}', [BannerController::class, 'destroy'])->name('banner.destroy');

// product

Route::get('/products', [ProductController::class, 'index'])->name('products.index');   
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');  
Route::post('/products', [ProductController::class, 'store'])->name('products.store');  
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');   
Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');  
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');   
