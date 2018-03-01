<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
      WebFont.load({
        google: {"families":["Montserrat:300,400,500,600,700","Roboto:300,400,500,600,700"]},
        active: function() {
            sessionStorage.fonts = true;
        }
      });
    </script>

    <link href="/css/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
    <link href="/css/vendors.bundle.css" rel="stylesheet" type="text/css" />
    <link href="/css/style.bundle.css" rel="stylesheet" type="text/css" />
</head>
<body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    <div id="app" class="m-grid m-grid--hor m-grid--root m-page">
        @yield('content')
    </div>

    <script src="/js/vendors.bundle.js" type="text/javascript"></script>
    <script src="/js/scripts.bundle.js" type="text/javascript"></script>
    <script src="/js/fullcalendar.bundle.js" type="text/javascript"></script>
    {{-- <script src="assets/app/js/dashboard.js" type="text/javascript"></script> --}}
</body>
</html>
