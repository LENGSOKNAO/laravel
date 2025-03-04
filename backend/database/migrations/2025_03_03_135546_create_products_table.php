<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->integer('product_code');
            $table->string('product_category');
            $table->string('product_brand');
            $table->decimal('product_price', 10, 2);
            $table->json('product_sizes')->nullable();
            $table->string('product_main_image');
            $table->json('product_list_images')->nullable();
            $table->integer('product_qty');
            $table->text('product_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
