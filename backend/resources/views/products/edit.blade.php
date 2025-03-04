<style>
    
    .h{
        background: rgb(15,17,26);
    }
    form{
        width: 81.8vw;
        height: 100%;
        text-align: center;
        padding:10px  50px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        justify-content: start;
        color: rgb(255, 255, 255)
    }
    input{
        width: 100%;
        background: rgb(20,24,36);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color:rgba(255, 255, 255, 0.3);
        padding: 10px 20px;
        outline: none;
        border-radius: 5px;
        font-size: .8rem;
        margin: 20px 0;
        font-weight: 600;
    }
    input:hover{
        outline: 2px solid rgba(124, 126, 255, 0.3);
    }
    textarea{
        width: 100%;
        height: 30%;
        background: rgb(20,24,36);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color:rgba(255, 255, 255, 0.3);
        padding: 10px 20px;
        outline: none;
        border-radius: 5px;
        font-size: .9rem;
        margin: 20px 0;
        font-weight: 600
    }
    textarea:hover{
  
        outline: 2px solid rgba(124, 126, 255, 0.3);
    }
    label{
        font-size: 1.5rem;
    }
    .image {
        display: none; /* Hide default file input */
    }
    .add-image{
        width: 100%; 
        height: 10%;
        border: 1px dashed rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .image-preview-container img{
        width: 30px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 5px;
        margin: 20px 0 0 ;
        padding: 5px;
    }
    .delete-btn{
        position: absolute;
        top: 50px;
        right: 63px;
        background: transparent;
        border: none;
        outline: none;
        color:  rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }
    select {
        width: 100%;
        padding: 10px 15px;
        background-color: rgb(20,24,36);
        color: white;
        font-size: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        margin: 20px 0;
    }

        /* Style for selected options in the multi-select dropdown */
    #product_category option:checked,
    #product_sizes option:checked {
        background-color: rgba(255, 255, 255, 0.3); /* Green for selected items */
        color: white; /* White text for better visibility */
    }

    /* Option hover color */
    #product_category option:hover,
    #product_sizes option:hover {
        background-color: rgba(124, 126, 255, 0.7);
    }

    select option {
        background-color: rgb(20,24,36);
        color: white;
        padding: 10px;
    }

    select option:hover {
        background-color: rgba(124, 126, 255, 0.3);
    }

 
    select:hover {
        border: 1px solid rgba(124, 126, 255, 0.7);
    }

    select:focus {
        border: 1px solid rgba(0, 4, 255, 0.9);
    }
   .d{
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    background: rgb(20,24,36);
    margin: 10px 0;
   }
   .x label{
      font-size: 12px
   }
   .x input{
    margin: 10px 0;
   }
   .brand{
    margin: 10px 0;
    padding: 8px 20px;
   }
   p{
    color: rgba(255, 255, 255, 0.3);
    padding: 0 50px ;
   }
   .btn {
    display: flex;
    justify-content: end; /* Center the button horizontally */
    align-items: center; /* Center the button vertically */
    margin: 20px; /* Space above the button */
 }

    /* Button Style */
    .btn button {
        background-color: #28a745; /* Green background */
        color: white; /* Text color */
        border: none;  
        padding: 10px 40px; /* Padding for the button */
        font-size: 1rem; /* Set font size */
        border-radius: 5px; /* Rounded corners */
        cursor: pointer; /* Pointer cursor */
        
        transition: background-color 0.3s, transform 0.3s; /* Smooth transition effects */
    }

    /* Hover effect */
    .btn button:hover {
        background-color: #218838; /* Darker green on hover */
        transform: translateY(-3px); /* Lift the button slightly */
    }

    /* Focus effect (when button is clicked) */
    .image-preview-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .image-preview {
            position: relative;
            display: inline-block;
            width: 100px; /* Control image size */
            height: 100px;
        }
        .image-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        .delete-btn {
            position: absolute;
            top: 5px;
            right: 5px;
            background: transparent;
            color: rgba(255, 255, 255, 0.7);
            border: none;
            font-size: 16px;
            cursor: pointer;
        }
</style>
 
<x-layout>
    <div class="h">
        <x-Nav>
            <h2 class="h2">Update a product</h2>
            <p>Orders placed across your store</p> <br>
            <form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT') <!-- Use PUT for updating a resource -->
                <div class="btn">
                    <button type="submit" class="btn btn-success">Update Product</button>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 20px;">
                    <!-- Left Section for Product Details -->
                    <div style="width: 60%; text-align: start;">
                        <div class="form-group">
                            <label for="product_name">Product Title</label> <br>
                            <input type="text" class="t" placeholder="Write title here" name="product_name" value="{{ old('product_name', $product->product_name) }}" required> <br>
                        </div>

                        <div class="form-group">
                            <label for="product_description">Product Description</label> <br>
                            <textarea placeholder="Write a description here" name="product_description">{{ old('product_description', $product->product_description) }}</textarea> <br>
                        </div>

                        <!-- Main Image Upload -->
                        <div class="form-group" style="position: relative">
                            <label>Product Image</label> <br>
                            @if($product->product_main_image)
                                <img class="image" src="{{ asset('storage/' . $product->product_main_image) }}" alt="Current Image" style="width: 100px;">
                            @endif
                            <div id="mainImagePreview" class="image-preview-container"></div>
                            <label for="product_main_image"> 
                                <div class="add-image">
                                    <i class="fa-regular fa-image"></i>
                                </div>
                            </label>
                            <input class="image" type="file" id="product_main_image" name="product_main_image" accept="image/*" onchange="previewImage(event, 'mainImagePreview')">
                        </div>

                     <!-- Additional Images Upload -->
                        <div class="form-group" style="position: relative">
                            <label>Product Images Size</label> <br>

                            <!-- Display Existing Images -->
                            @if($product->product_list_images)
                                @php
                                    $images = json_decode($product->product_list_images);
                                @endphp
                                <div   class="image-preview-container" style="display: grid; grid-template-columns: repeat(13, 1fr); gap: 10px; justify-content: center; align-items: center;">
                                       @foreach($images as $image)
                                            <img src="{{ asset('storage/' . $image) }}" style="width: 50px;" alt="Additional Image">
                                        @endforeach
                                </div>
                            @endif

                            <!-- Upload New Images -->
                            <label for="product_list_images"> 
                                <div class="add-image">
                                    <i class="fa-solid fa-images"></i>
                                </div>
                            </label>
                            <input class="image" type="file" id="product_list_images" name="product_list_images[]" accept="image/*" multiple onchange="previewMultipleImages(event)"> 
                        </div>
                    </div>

                    <!-- Right Section for Product Information -->
                    <div style="width: 35%; text-align: start;">
                        <!-- Category Selection -->
                        <div class="form-group d">
                            <label for="product_category">Category</label> <br>
                            <select id="product_category" name="product_category[]" multiple required>
                                <option value="men" {{ in_array('men', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Men</option>
                                <option value="women" {{ in_array('women', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Women</option>
                                <option value="kids" {{ in_array('kids', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Kids</option>
                                <option value="shoes" {{ in_array('shoes', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Shoes</option>
                                <option value="clothing" {{ in_array('clothing', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Clothing</option>
                                <option value="t_shirt" {{ in_array('t_shirt', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>T-Shirt</option>
                                <option value="terry" {{ in_array('terry', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}> Terry</option>
                                <option value="pant" {{ in_array('pant', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Pants</option>
                                <option value="basketball_jersey" {{ in_array('basketball_jersey', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}> Basketball Jersey</option>
                                <option value="sport" {{ in_array('sport', old('product_category', explode(',', $product->product_category))) ? 'selected' : '' }}>Sport</option>
                            </select>
                        </div>

                        <!-- Sizes Selection -->
                        <div class="form-group d">
                            <label for="product_sizes">Sizes</label> <br>
                            <select id="product_sizes" name="product_sizes[]" multiple> 
                                <option value="S" {{ in_array('S', old('product_sizes', json_decode($product->product_sizes, true))) ? 'selected' : '' }}>S</option>
                                <option value="M" {{ in_array('M', old('product_sizes', json_decode($product->product_sizes, true))) ? 'selected' : '' }}>M</option>
                                <option value="L" {{ in_array('L', old('product_sizes', json_decode($product->product_sizes, true))) ? 'selected' : '' }}>L</option>
                                <option value="XL" {{ in_array('XL', old('product_sizes', json_decode($product->product_sizes, true))) ? 'selected' : '' }}>XL</option>
                            </select>
                        </div>

                        <div class="d" style="display: flex; gap: 10px;">
                            <!-- Left Section for Code and Brand -->
                            <div class="form-group x" style="flex: 1;">
                                <label for="product_code">Product Code</label> <br>
                                <input type="text" name="product_code" value="{{ old('product_code', $product->product_code) }}" required> <br>

                                <label for="product_brand">Brand</label> <br>
                                <select class="brand" name="product_brand" required>
                                    <option value="nike" {{ $product->product_brand == 'nike' ? 'selected' : '' }}>Nike</option>
                                    <option value="anta" {{ $product->product_brand == 'anta' ? 'selected' : '' }}>Anta</option>
                                    <option value="salomon" {{ $product->product_brand == 'salomon' ? 'selected' : '' }}>Salomon</option>
                                    <option value="nowbalance" {{ $product->product_brand == 'nowbalance' ? 'selected' : '' }}>NowBalance</option>
                                    <option value="qiaodan" {{ $product->product_brand == 'qiaodan' ? 'selected' : '' }}>Qiaodan</option>
                                </select>
                            </div>

                            <!-- Right Section for Price and Quantity -->
                            <div class="form-group x" style="flex: 1;">
                                <label for="product_price">Price</label> <br>
                                <input type="number" name="product_price" value="{{ old('product_price', $product->product_price) }}" step="0.01" required> <br>

                                <label for="product_qty">Quantity</label> <br>
                                <input type="number" name="product_qty" value="{{ old('product_qty', $product->product_qty) }}" required> <br>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </x-Nav>
    </div>
</x-layout>
<script>
    window.onload = function() {
    const mainImage = "{{ asset('storage/' . $product->product_main_image) }}";
    if (mainImage) {
        const img = document.createElement('img');
        img.src = mainImage;
        document.getElementById('mainImagePreview').appendChild(img);
    }

    const additionalImages = @json($images ?? []);
    if (additionalImages.length > 0) {
        const previewContainer = document.getElementById('additionalImagesPreview');
        additionalImages.forEach(image => {
            const img = document.createElement('img');
            img.src = "{{ asset('storage/') }}" + image;
            previewContainer.appendChild(img);
        });
    }
};

</script>


 
