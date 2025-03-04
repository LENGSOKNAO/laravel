<style>
 
 .container {
        background: rgb(15,17,26);
    }
    form {
        width: 81.8vw;
        height: 100%;
        text-align: center;
        padding: 10px 50px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        justify-content: start;
        color: rgb(255, 255, 255);
    }
    input, textarea, select {
        width: 100%;
        background: rgb(20,24,36);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: rgba(255, 255, 255, 0.3);
        padding: 10px 20px;
        outline: none;
        border-radius: 5px;
        font-size: .8rem;
        margin: 20px 0;
        font-weight: 600;
    }
    input:hover, textarea:hover, select:hover {
        outline: 2px solid rgba(124, 126, 255, 0.3);
    }
    label {
        font-size: 1.5rem;
    }
    .add-image {
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
    .image-preview-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .image-preview {
        position: relative;
        display: inline-block;
        width: 100px;
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
    .d {
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        background: rgb(20,24,36);
        margin: 10px 0;
    }
    .x label {
        font-size: 12px;
    }
    .x input {
        margin: 10px 0;
    }
    .btn {
        display: flex;
        justify-content: end;
        margin: 20px;
    }
    .btn button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 40px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }
    .btn button:hover {
        background-color: #218838;
        transform: translateY(-3px);
    }
     /* Checkbox Group */
     .checkbox-group {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
        cursor: pointer;
    }

    /* Checkbox Input */
    .checkbox-group input[type="checkbox"] {
        width: 18px;
        height: 18px;
        appearance: none;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        background: rgb(15,17,26);
        position: relative;
        cursor: pointer;
    }

    /* Checkbox Checked State */
    .checkbox-group input[type="checkbox"]:checked {
        background-color: #28a745;
        border: none;
    }

    /* Checkbox Checkmark */
    .checkbox-group input[type="checkbox"]:checked::before {
        content: "✔";
        color: white;
        font-size: 14px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Checkbox Label */
    .checkbox-group label {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
    }
    .btn-submit {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 40px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }

    .btn-submit:hover {
        background-color: #218838;
        transform: translateY(-3px);
    }
</style>
<x-layout>
    <div class="container">
        <x-Nav> 
    <h2>Edit Banner</h2>
    <form action="{{ route('banner.update', $banner->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <label for="banner_name">Banner Name:</label>
        <input type="text" name="banner_name" value="{{ $banner->banner_name }}" required>

      
        <img src="{{ asset('storage/' . $banner->banner_image) }}" alt="Banner Image" width="100">
        <input type="file" name="banner_image">

        <label for="banner_description">Description:</label>
        <textarea name="banner_description">{{ $banner->banner_description }}</textarea>

        <label for="banner_brand">Brand:</label>
        <input type="text" name="banner_brand" value="{{ $banner->banner_brand }}">
        
        <div class="form-group checkbox-group">
            <label for="banner_is_enabled">Enable:</label>
            <input type="checkbox" id="banner_is_enabled" name="banner_is_enabled" value="1" {{ $banner->banner_is_enabled ? 'checked' : '' }}>
        </div>
        
        <button type="submit"  class="btn-submit" >Update Banner</button>    
    </form>
</x-Nav> 
</div>
</x-layout>
