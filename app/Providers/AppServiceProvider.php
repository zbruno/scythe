<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Schema;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::directive('getScript', function ($string) {
            $devMode = in_array(app()->environment(), ['development', 'testing', 'local']);
            $devMode = false;

            // Return the path to load the asset
            // In dev mode, we use the webpack dev server
            $assetPath = $devMode ? 'http://localhost:8080/public/js/'.$string.'.js' : '/js/'.$string.'.js';

            // Return the html tag for the asset
            return '<?php echo \'<script src="'.$assetPath.'"></script>\' ?>';
        });

        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
