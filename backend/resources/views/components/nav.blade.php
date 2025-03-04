<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;   
                      
        }
        nav {
            background: rgb(20, 24, 36);
            width: 12vw;
            z-index: 2;
            padding-top: 20px;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin: 0px 0;
           
        }
        a {
            color: rgb(155, 159, 154);
            text-decoration: none;
            font-size: 12px;
            display: block;
            padding: 10px 30px;
            border-radius: 5px;
            transition: background-color 0.3s ease, color 0.3s ease;
            display: flex;
            gap: 10px;
        }
        a:hover {
            background-color: rgb(34, 40, 49);
            color: #ffffff;
            display: flex;
            gap: 20px;
        }
        a:focus {
            outline: none;
            background-color: rgb(30, 36, 45);
        }
        .g{
            display: flex
        }
    </style>
</head>
<body>
   
   <div  class="g">
    <nav>
        <ul style=" " >
            <li><a href="{{ route('products.index') }}"> <i class="fa-solid fa-caret-right"></i> Products</a></li>
            <li><a href="{{ route('products.create') }}"> <i class="fa-solid fa-caret-right"></i> Add Products</a></li>
            <li><a href="{{ route('banner.index') }}"> <i class="fa-solid fa-caret-right"></i> Banners</a></li>
            <li><a href="{{ route('banner.create') }}"> <i class="fa-solid fa-caret-right"></i> Add Banners</a></li>
            <li><a href=""> <i class="fa-solid fa-caret-right"></i> Customer</a></li>
            <li><a href=""> <i class="fa-solid fa-caret-right"></i> Customer Details</a></li>
            <li><a href=""> <i class="fa-solid fa-caret-right"></i> Order</a></li>
            <li><a href=""> <i class="fa-solid fa-caret-right"></i> Order Details</a></li>
            <li><a href=""> <i class="fa-solid fa-caret-right"></i> Refund</a></li>    
        </ul>
    </nav>
    <div class="">
        {{ $slot }}
    </div>
   </div>
</body>
</html>
