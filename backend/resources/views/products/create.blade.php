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
        display: none; 
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

    select option {
        background-color: rgb(20,24,36);
        color: white;
        padding: 10px;
    }

    select option:hover {
        background-color: rgba(124, 126, 255, 0.3);
    }

    select option[value="select_all"] {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.7);
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
    .btn button:focus {
        outline: none; /* Remove outline */
        box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.5); /* Green focus ring */
    }
 </style>
 <div>
    <x-layout>
        <div class="h" >
            <x-Nav>
                <h2 class="h2">Add a product</h2>
                <p >Orders placed across your store</p> <br> 
                <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
                    <div class="btn">
                        <button type="submit" class="btn btn-success"   > Create Product</button>
                    </div>
                    
                @csrf
                    <div class="" style="display: flex; justify-content: start; gap:20px;">
                        <div class="" style="text-align: start;width:60vw">
                            <label  for="product_name">Product Title</label> <br>
                            <input type="text" class="t" placeholder="Write title here"  name="product_name" value="{{ old('product_name') }}" required> <br>       
                            <label for="product_description">Product Description</label> <br>
                            <textarea placeholder="Write a description here"  name="product_description"> {{ old('product_description') }}</textarea> <br>
                            <!-- Main Image Upload -->
                            <div class="" style="position: relative ;" >
                                <label>Product Image</label> <br>
                                <div id="mainImagePreview" class="image-preview-container"></div>
                                <label  for="product_main_image" > 
                                    <div class="add-image">
                                        <i class="fa-regular fa-image"></i>
                                    </div>
                                </label>
                                <input  class="image" type="file" id="product_main_image" name="product_main_image" accept="image/*" onchange="previewImage(event, 'mainImagePreview')">
                            </div>
                            <!-- Additional Images Upload -->
                            <div class="" style="position: relative">
                                <label>Product Images Size</label> <br>
                                <div id="additionalImagesPreview" style="display: grid; grid-template-columns: repeat(13, 1fr); gap: 10px; justify-content: center; align-items: center;" class="image-preview-container"></div> <br>
                                <label for="product_list_images"> 
                                    <div class="add-image">
                                        <i class="fa-solid fa-images"></i>
                                    </div>
                                </label>
                                <input class="image" type="file" id="product_list_images" name="product_list_images[]" accept="image/*" multiple onchange="previewMultipleImages(event)">                         
                            </div>    
                        </div>
                        <div class="" style="text-align: start;width:25%">
                            <div class="">
                                <div class="d" style=" ">
                                    <label for="product_category">Category</label> <br>
                                    <select id="product_category" name="product_category[]" multiple required> <br>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                        <option value="kids">Kids</option>
                                        <option value="shoes">Shoes</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="t_shirt">T-Shirt</option>
                                        <option value="terry"> Terry</option>
                                        <option value="pant"> Pants</option>
                                        <option value="basketball_jersey">Basketball Jersey</option>
                                        <option value="sport">Sport</option>
                                    </select>       
                                </div>                         
                               <div class="d">
                                <label for="product_sizes">Sizes</label> <br>
                                <select name="product_sizes[]" multiple> <br>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                               </div>
                            </div>
                            <div class="d" style="display: flex;gap:10px">
                                <div class="x">
                                    <label for="product_code">Product Code</label> <br>
                                    <input type="text" name="product_code" value="{{ old('product_code') }}" required> <br>
                        
                                    <label for="product_brand">Brand</label> <br>
                                    <select class="brand" name="product_brand" required> 
                                        <option value="nike">Nike</option>
                                        <option value="anta">Anta</option> 
                                        <option value="salomon">salomon</option> 
                                        <option value="nowbalance">NewBalance</option> 
                                        <option value="qiaodan">Qiaodan</option> 
                                    </select>
                                        
                                    {{-- <input type="text" name="product_brand" value="{{ old('product_brand') }}" required> <br> --}}
                                </div>
                    
                                <div class="x">
                                    <label for="product_price">Price</label> <br>
                                    <input type="number" name="product_price" value="{{ old('product_price') }}" step="0.01" required> <br>
                                
                                    <label for="product_qty">Quantity</label> <br>
                                    <input type="number" name="product_qty" value="{{ old('product_qty') }}" required> <br>
                                </div>
                            </div>
                        </div>
                    </div>
                              
                 
                </form>     
            </x-Nav>
        </div>
    </x-layout>
 </div>
 <script>
    function previewImage(event, previewContainerId) {
        let container = document.getElementById(previewContainerId);
        container.innerHTML = ""; // Clear previous preview

        const file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let div = document.createElement("div");
                div.classList.add("image-preview");
                div.innerHTML = `
                    <img src="${e.target.result}" alt="Image Preview">
                    <button class="delete-btn" onclick="removeImage('${previewContainerId}', this)">X</button>
                `;
                container.appendChild(div);
            };
            reader.readAsDataURL(file);
        }
    }

    function previewMultipleImages(event) {
        let container = document.getElementById("additionalImagesPreview");
        container.innerHTML = ""; // Clear previous preview

        Array.from(event.target.files).forEach((file) => {
            let reader = new FileReader();
            reader.onload = function (e) {
                let div = document.createElement("div");
                div.classList.add("image-preview");
                div.innerHTML = `
                    <img src="${e.target.result}" alt="Image Preview">
                    <button class="delete-btn" onclick="removeImage('additionalImagesPreview', this)">X</button>
                `;
                container.appendChild(div);
            };
            reader.readAsDataURL(file);
        });
    }

    function removeImage(previewContainerId, button) {
        let container = document.getElementById(previewContainerId);
        container.removeChild(button.parentElement);
    }
    document.getElementById('product_category').addEventListener('change', function(event) {
        // Check if "Select All" is selected
        const selectAllOption = 'select_all';
        const selectElement = event.target;
        
        if (selectElement.value === selectAllOption) {
            // If "Select All" is selected, select all options
            Array.from(selectElement.options).forEach(option => {
                if (option.value !== selectAllOption) {
                    option.selected = true;
                }
            });
        }
    });
  
</script>