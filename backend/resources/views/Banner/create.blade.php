<style>
    .container {
        background: rgb(15,17,26);
    }
    
    .h {
        background: rgb(15,17,26);
    }

    /* Form Container */
    form {
        width: 81.8vw;
        text-align: center;
        padding: 10px 50px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: rgb(255, 255, 255);
    }

    /* Input, Textarea & Select */
    input, textarea, select {
        width: 100%;
        background: rgb(20,24,36);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: rgba(255, 255, 255, 0.3);
        padding: 10px 20px;
        outline: none;
        border-radius: 5px;
        font-size: 0.8rem;
        margin: 20px 0;
        font-weight: 600;
    }

    /* Hover Effects */
    input:hover, textarea:hover, select:hover {
        outline: 2px solid rgba(124, 126, 255, 0.3);
    }

    /* Label */
    label {
        font-size: 1.5rem;
    }

    /* File Upload Box */
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

    /* Image Preview */
    .image-preview-container img {
        width: 30px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 5px;
        margin: 20px 0 0;
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

    /* Select Dropdown */
    select option {
        background-color: rgb(20,24,36);
        color: white;
        padding: 10px;
    }

    /* Hover & Focus for Select */
    select:hover {
        border: 1px solid rgba(124, 126, 255, 0.7);
    }

    select:focus {
        border: 1px solid rgba(0, 4, 255, 0.9);
    }

    /* Form Sections */
    .d {
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        background: rgb(20,24,36);
        margin: 10px 0;
    }

    /* Submit Button */
    .btn {
        display: flex;
        justify-content: end;
        margin: 20px;
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
            <h2 class="form-title">Create a New Banner</h2>

            @if ($errors->any())
                <div class="error-message">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('banner.store') }}" method="post" enctype="multipart/form-data" class="banner-form">
                @csrf <!-- CSRF token for security -->

                <div class="form-group">
                    <label for="banner_name">Banner Name</label>
                    <input type="text" name="banner_name" required>
                </div>

                <div class="form-group">
                    <label for="banner_image">banner image</label>
                    <input type="file" name="banner_image" accept="image/*" required>
                </div>

                <div class="form-group">
                    <label for="banner_small_image">banner small image</label>
                    <input type="file" name="banner_small_image" accept="image/*" required>
                </div>

                <div class="form-group">
                    <label for="banner_slide_image">banner slide image</label>
                    <input type="file" name="banner_slide_image" accept="image/*" required>
                </div>

                <div class="form-group">
                    <label for="banner_description">Description</label>
                    <textarea name="banner_description"></textarea>
                </div>

                <div class="form-group">
                    <label for="banner_brand">Brand</label>
                    <input type="text" name="banner_brand">
                </div>

                <div class="form-group checkbox-group">
                    <label for="banner_is_enabled">Enable</label>
                    <input type="checkbox" name="banner_is_enabled" value="1" checked   >
                </div>

                <button type="submit" class="btn-submit">Create Banner</button>
            </form>
        </x-Nav> 
    </div>
</x-layout>
