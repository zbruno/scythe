<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(EngineSeeder::class);
        $this->call(RaceSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(StarTypeSeeder::class);
    }
}
