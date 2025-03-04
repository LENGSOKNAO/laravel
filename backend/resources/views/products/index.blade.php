<style>
    .th{
       display: flex;
       background: rgb(15,17,26);
       overflow: hidden;
    }
    table{
      background: rgb(20,24,36);
      width: 87vw;
      text-align: center;
      padding:10px  50px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      margin: 50px 0;
    }
    .name  th{
      color:rgb(159,166,164);
      font-size: 10px;
      padding: 10px 0;    
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      
    }
    td{
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      font-size: 10px;
      color: rgba(255, 255, 255, 0.5);
    }
    img{
      width: 40px;
      border-radius: 100px;
    }
   .btn{
      display: flex;
      align-items: center;
      justify-content: end;
      margin: 20px 10px;
      font-weight: 600;
      
   }
   /* Reset pagination styles */
   
  
   /* Ensure pagination background is transparent */
      .pagination {
          display: flex;
          justify-content: center;
          width: 100vw;
          gap: 10px;
          padding: 10px 0;
          background: transparent; /* Ensure no background */
      }
  
      .pagination .page-link {
          padding: 6px 12px;
          font-size: 14px;
          color: #555;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: background-color 0.3s, color 0.3s;
          text-decoration: none;
          background: transparent; /* Ensure no background */
      }
  
      /* Hover and active styles */
      .pagination .page-link:hover {
          background-color: #007bff;
          color: white;
      }
  
      .pagination .active .page-link {
          background-color: #107cf0;
          color: white;
          font-weight: bold;
      }
  
      .pagination .disabled .page-link {
          color: #aaa;
          border-color: #ddd;
          cursor: not-allowed;
      }
  
  </style>
  
<x-layout>
      <div class="th">
          <x-Nav>
              <h2>Products</h2>
              <div class="btn " style="z-index: 50" >
                  <a  href="{{ route('products.create') }}" style=" font-size: 13px;" > <i class="fa-solid fa-plus"></i> Add product</a>
              </div>
              <table>
                  <thead>
                      <tr class="name" >
                        
                          <th>PRODUCT IMAGE</th>
                          <th>PRODUCT IMAGE SIZES</th>
                          <th>PRODUCT NAME</th>
                          <th>PRODUCT PRICE</th>
                          <th>PRODUCT CATEGORY</th>
                          <th>PRODUCT SIZES</th>
                          <th>PRODUCT CODE</th>
                          <th>PRODUCT QUANTITY</th>
                          <th>PRODUCT BRAND</th>          
                          <th>ACTIONS</th>
                          <th>ACTIONS</th>
                      </tr>
                  </thead>
                  <tbody>
                      @foreach($products as $product)
                          <tr> 
                             
                              <td>
                                  @if($product->product_main_image)
                                      <img src="{{ asset('storage/'.$product->product_main_image) }}" alt="{{ $product->product_name }}" width="100">
                                  @else
                                      No Image
                                  @endif
                              </td>
                              <td>
                                  @if($product->product_list_images && json_decode($product->product_list_images, true))  
                                      @php
                                          $images = json_decode($product->product_list_images, true);
                                      @endphp
                                      <img src="{{ asset('storage/' . $images[0]) }}" alt="Additional Image" width="100">
                                  @else
                                      No Additional Images
                                  @endif
                              </td>                 
                              <td>{{ $product->product_name }}</td>
                              <td>${{ number_format($product->product_price, 2) }}</td>
                              <td>
                                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(4px, 1fr)); justify-content: center; align-items: center;">
                                      @php
                                          $categories = explode(',', $product->product_category);
                                      @endphp
                                      @foreach($categories as $index => $category)
                                          <span>{{ trim($category) }}{{ $index < count($categories) - 1 ? ',' : '' }}</span>
                                      @endforeach
                                  </div>                                
                              </td>               
                              
                              <td>
                                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(10px, 1fr)); justify-content: center; align-items: center;">
                                      @php
                                          $sizes = json_decode($product->product_sizes, true) ?? [];
                                      @endphp
                                      @foreach($sizes as $index => $size)
                                          <span>{{ $size }}{{ $index < count($sizes) - 1 ? ',' : '' }}</span>
                                      @endforeach
                                  </div>
                              </td>
                              
                              <td>{{ $product->product_code }}</td>  
                              <td>{{ $product->product_qty }}</td>
                              <td>{{ $product->product_brand }}</td>
                                           
                              <td style="padding: 12px; vertical-align: middle;">
                                  <a href="{{ route('products.edit', $product->id) }}" 
                                     style="text-align: center; color: #fff; text-decoration: none; background-color: #28a745; padding: 8px 16px; border-radius: 4px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
                                      Edit
                                  </a> 
                              </td>                      
                              <td style="text-align: center; padding: 12px; vertical-align: middle;">
                                  <form action="{{ route('products.destroy', $product->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this product?');" style="display:inline;">
                                      @csrf
                                      @method('DELETE')
                                      <button type="submit" style="background-color: #dc3545; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">
                                          Delete
                                      </button>
                                  </form>
                              </td>                            
                          </tr>
                          @endforeach
                      </tbody>
                  </table>
              </x-Nav>
              <div class="" style=" position: absolute; left:0; top:150px;z-index: 1 " >
                  <div style="height: 100px;   background: transparent; border: none;">
                      {{ $products->links('vendor.pagination.bootstrap-4') }}
                  </div> 
              </div>
          </div>
</x-layout>
  