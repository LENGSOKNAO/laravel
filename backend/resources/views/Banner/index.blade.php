
<style>
    .container{
        background: rgb(15,17,26);
    }
 
    .th {
        display: flex;
        background: rgb(15,17,26);
        overflow: hidden;
        padding: 20px;
    }

    /* Table Styling */
    .banner-table {
        background: rgb(20,24,36);
        width: 87vw;
        text-align: center;
        padding: 10px 50px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        margin: 50px 0;
    }

    .name th {
        color: rgb(159,166,164);
        font-size: 10px;
        padding: 10px 0;    
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .banner-table td {
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 10px;
        color: rgba(255, 255, 255, 0.5);
    }

    /* Image */
    .banner-table img {
        width: 40px;
        border-radius: 100px;
    }

    /* Buttons */
    .btn {
        display: flex;
        align-items: center;
        justify-content: end;
        margin: 20px 10px;
        font-weight: 600;
    }

    .btn-add {
        padding: 8px 15px;
        background: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        transition: 0.3s;
    }

    .btn-add:hover {
        background: #0056b3;
    }

    .btn-edit {
        padding: 5px 10px;
        background: #ffc107;
        color: black;
        text-decoration: none;
        font-weight: bold;
        border-radius: 4px;
        transition: 0.3s;
    }

    .btn-edit:hover {
        background: #e0a800;
    }

    .btn-delete {
        padding: 5px 10px;
        background: red;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: bold;
        border-radius: 4px;
        transition: 0.3s;
    }

    .btn-delete:hover {
        background: darkred;
    }

    /* Pagination */
    .pagination {
        display: flex;
        justify-content: center;
        width: 100vw;
        gap: 10px;
        padding: 10px 0;
        background: transparent;
    }

    .pagination .page-link {
        padding: 6px 12px;
        font-size: 14px;
        color: #555;
        border: 1px solid #ddd;
        border-radius: 5px;
        transition: background-color 0.3s, color 0.3s;
        text-decoration: none;
        background: transparent;
    }

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
    th{
      color:rgb(159,166,164);
      font-size: 10px;
      padding: 10px 0;    
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      
    }

</style>
<x-layout>
    <div class="container">
        <x-Nav>
            <table class="banner-table">
                <thead>
                    <tr>
                        <th>BANNER IMAGE</th>
                        <th>BANNER NAME</th>
                        <th>BANNER BRAND</th>
                        <th>BANNER DESCRIPTION</th>
                        <th>BANNER IS ENABLED</th>
                        <th>ACTION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($banners as $banner)
                    <tr>
                        <td>
                            <img src="{{ asset('storage/' . $banner->banner_image) }}" alt="Banner Image" class="banner-img">
                        </td>
                        <td>{{ $banner->banner_name }}</td>
                        <td>{{ $banner->banner_brand }}</td>
                        <td>{{ $banner->banner_description }}</td>
                        <td class="status">
                            {{ $banner->banner_is_enabled ? 'Yes' : 'No' }}
                        </td>
                        <td style="padding: 12px; vertical-align: middle;">
                            <a href="{{ route('banner.edit', $banner->id) }}" 
                               style="text-align: center; color: #fff; text-decoration: none; background-color: #28a745; padding: 8px 16px; border-radius: 4px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
                                Edit
                            </a> 
                        </td>   
                        <td style="text-align: center; padding: 12px; vertical-align: middle;">
                            <form action="{{ route('banner.destroy', $banner->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this product?');" style="display:inline;">
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
    </div>
</x-layout>
