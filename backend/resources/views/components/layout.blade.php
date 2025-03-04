<!-- resources/views/components/header.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <style>
        header{
            background: rgb(20,24,36);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            width: 100%; 
            margin: 0;
            padding: 0;
        
        }
        h2{
            color: rgb(255, 255, 255);
            font-size: 2rem;
            padding: 20px 50px 0;
        }
    </style>
</head>
<body>
    <header >
        <h2>Admin</h2>
    </header>
    {{ $slot }}
</body>
</html>
