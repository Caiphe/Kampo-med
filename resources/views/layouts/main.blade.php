<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="title" content="Kampo Medical Centre">
    <meta name="description" content="Kampo Medical Centre: Located in South African Kimberly, We give you easy access to a doctor, optometrist or dentist ...">
    <meta name="keywords" content="Kampo Medical center, Kampo Medical center Kimberly, Kampo your companion,
        We are pleased to offer you the chance to have the health you need, We give you easy access to a doctor, optometrist or dentist" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200;1,300;1,400&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    @vite([
        'resources/css/aos.css', 
        'resources/css/slick.css', 
        'resources/css/slick-theme.css', 
        'resources/css/animate.css', 
        'resources/css/index.css',
        'resources/css/header.css',
        'resources/css/footer.css',

        'resources/js/custom.js',
        'resources/js/jquery-2.js',
        // 'resources/js/aos.js',
        'resources/js/slick.js',
    ])

    <title> Kampo Medical Centre</title>
</head>
<body>
    
    @include('partial.nav')
    @yield('content')
    @include('partial.footer')

    
</body>
</html>